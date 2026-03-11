# MapComponent Documentation

## Overview
The `MapComponent.vue` is a Vue 3 component that displays an interactive map with a location marker. It uses the Leaflet library (via `@vue-leaflet/vue-leaflet`) to render OpenStreetMap tiles and provides a link to open the location in Google Maps.

**File Location:** `components/events/MapComponent.vue`

---

## Component Structure

The component follows the Vue 3 Single File Component (SFC) structure with three sections:
1. **Template** - The HTML structure
2. **Script** - The TypeScript logic
3. **Style** - The CSS styling

---

## 1. Template Section (Lines 1-41)

### Main Container Structure
```html
<div class="map-container">
```
- The outermost wrapper for the entire component
- Styled with Tailwind's `w-full` (full width)

### Map Wrapper (Lines 3-26)
```html
<div class="map-wrapper">
```
- Container specifically for the Leaflet map
- Has fixed height of 400px, rounded corners, shadow, and border
- Contains the actual map component

### The LMap Component (Lines 4-25)
```html
<LMap
  ref="map"
  :zoom="zoom"
  :center="center"
  :use-global-leaflet="false"
  class="leaflet-map"
>
```

**What is LMap?**
- `LMap` is a Vue component from the `@vue-leaflet/vue-leaflet` library
- It's a wrapper around Leaflet.js, a popular JavaScript library for interactive maps
- Think of it as the "canvas" where the map is drawn

**Props Explained:**
- **`ref="map"`**: Creates a reference to this component so you can access it programmatically (not currently used, but useful for future features)
- **`:zoom="zoom"`**: Controls how zoomed in the map is (higher = more zoomed in). The colon (`:`) means it's dynamically bound to the `zoom` prop
- **`:center="center"`**: Sets the map's center point using latitude/longitude coordinates
- **`:use-global-leaflet="false"`**: Tells the component to use its own Leaflet instance instead of a global one (prevents conflicts)
- **`class="leaflet-map"`**: CSS class for styling

### The LTileLayer Component (Lines 11-16)
```html
<LTileLayer
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  layer-type="base"
  name="OpenStreetMap"
/>
```

**What is LTileLayer?**
- Maps are made up of small image "tiles" (like puzzle pieces)
- `LTileLayer` loads these tiles from a server and assembles them into a complete map

**Props Explained:**
- **`url`**: The template URL for fetching map tiles
  - `{s}` = subdomain (a, b, or c) for load balancing
  - `{z}` = zoom level
  - `{x}` and `{y}` = tile coordinates
  - Example: `https://a.tile.openstreetmap.org/15/17210/10898.png`
- **`attribution`**: Legal requirement to credit OpenStreetMap contributors
- **`layer-type="base"`**: Marks this as the base map layer (vs. overlay layers)
- **`name`**: Identifier for this layer

### The LMarker Component (Lines 17-24)
```html
<LMarker :lat-lng="center">
```

**What is LMarker?**
- Places a pin/marker on the map at specific coordinates
- `:lat-lng="center"` positions it at the same coordinates as the map center

### The LPopup Component (Lines 18-23)
```html
<LPopup>
  <div class="popup-content">
    <strong>{{ location.name }}</strong>
    <p class="text-sm mt-1">{{ location.address }}</p>
  </div>
</LPopup>
```

**What is LPopup?**
- A popup that appears when you click the marker
- Nested inside `LMarker`, so it's attached to that marker
- Displays the location name (bold) and address

**Vue Syntax:**
- `{{ location.name }}` - Vue interpolation syntax that displays the value of `location.name`
- This is reactive - if the data changes, the display updates automatically

### Map Info Section (Lines 28-39)
```html
<div class="map-info mt-4">
  <h3 class="font-bold text-xl mb-2">📍 Veranstaltungsort</h3>
  <p class="text-lg mb-2">{{ location.address }}</p>
  <a
    :href="googleMapsLink"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
  >
    In Google Maps öffnen →
  </a>
</div>
```

**Purpose:**
- Displays location information below the map
- Provides a button to open the location in Google Maps

**Link Attributes:**
- **`:href="googleMapsLink"`**: Dynamically bound to the computed Google Maps URL
- **`target="_blank"`**: Opens link in a new tab
- **`rel="noopener noreferrer"`**: Security best practice when using `target="_blank"`
  - `noopener`: Prevents the new page from accessing the original page's `window` object
  - `noreferrer`: Doesn't send referrer information to the new page

---

## 2. Script Section (Lines 43-79)

### Imports (Lines 44-46)
```typescript
import { computed } from 'vue';
import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';
```

- **`computed`**: Vue function for creating computed properties (explained below)
- **Leaflet components**: The map components used in the template
- **Leaflet CSS**: Required styles for the map to display correctly

### TypeScript Interfaces (Lines 48-60)

#### Location Interface (Lines 48-55)
```typescript
interface Location {
  name: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}
```

**What is an Interface?**
- A TypeScript feature that defines the "shape" of an object
- It's like a contract: "Any Location object MUST have these properties with these types"
- Provides autocomplete and type checking in your IDE

**Example Location Object:**
```javascript
{
  name: 'BBS1 Lüneburg',
  address: 'Spillbrunnenweg 1, 21337 Lüneburg, Deutschland',
  coordinates: {
    lat: 53.2467,
    lng: 10.4108
  }
}
```

#### MapComponentProps Interface (Lines 57-60)
```typescript
interface MapComponentProps {
  location: Location;
  zoom?: number;
}
```

**Purpose:**
- Defines what props (inputs) this component accepts
- **`location: Location`**: Required prop (no `?` mark)
- **`zoom?: number`**: Optional prop (the `?` means optional)

### Props Definition (Lines 62-64)
```typescript
const props = withDefaults(defineProps<MapComponentProps>(), {
  zoom: 15,
});
```

**Breaking it down:**
- **`defineProps<MapComponentProps>()`**: Tells Vue "this component accepts these props"
- **`withDefaults(..., { zoom: 15 })`**: Sets default values for optional props
- **Result**: If no zoom is provided, it defaults to 15

**Usage Example:**
```vue
<!-- With custom zoom -->
<MapComponent :location="myLocation" :zoom="12" />

<!-- Without zoom (uses default 15) -->
<MapComponent :location="myLocation" />
```

### Computed Properties

#### center (Lines 66-69)
```typescript
const center = computed(() => [
  props.location.coordinates.lat,
  props.location.coordinates.lng,
]);
```

**What is a Computed Property?**
- A value that's automatically calculated based on other data
- It's **reactive**: when `props.location` changes, `center` automatically updates
- It's **cached**: only recalculates when dependencies change (efficient!)

**Why use it here?**
- Leaflet expects coordinates as an array: `[latitude, longitude]`
- Our data has coordinates as an object: `{ lat: 53.2467, lng: 10.4108 }`
- This computed property converts the format

**Without computed (inefficient):**
```vue
:center="[props.location.coordinates.lat, props.location.coordinates.lng]"
```

**With computed (clean):**
```vue
:center="center"
```

#### googleMapsLink (Lines 71-74)
```typescript
const googleMapsLink = computed(() => {
  const { lat, lng } = props.location.coordinates;
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
});
```

**Purpose:**
- Generates a Google Maps URL with the location's coordinates
- Uses **destructuring**: `const { lat, lng } = ...` extracts lat and lng from the coordinates object
- Uses **template literals**: `` `string ${variable}` `` to insert variables into strings

**Example Output:**
```
https://www.google.com/maps/search/?api=1&query=53.2467,10.4108
```

### Component Options (Lines 76-78)
```typescript
defineOptions({
  name: 'EventMapComponent',
});
```

**Purpose:**
- Sets the component's name for debugging and Vue DevTools
- Helps identify the component in error messages

---

## 3. Style Section (Lines 81-97)

```css
<style scoped>
```

**What is `scoped`?**
- CSS rules only apply to THIS component
- Prevents styles from leaking to other components
- Vue adds unique attributes to elements to achieve this

### Tailwind @apply Directive
```css
.map-container {
  @apply w-full;
}
```

**What is @apply?**
- A Tailwind CSS feature that applies utility classes in CSS files
- `@apply w-full;` is equivalent to `class="w-full"` in HTML
- Useful for reusable styles

**All Styles Explained:**
- **`.map-container`**: Full width container
- **`.map-wrapper`**: 400px tall, rounded corners, shadow, border
- **`.leaflet-map`**: Full width and height of its container
- **`.popup-content`**: Padding inside the marker popup

---

## How It All Works Together

### 1. Component Receives Data
```vue
<MapComponent 
  :location="{ 
    name: 'BBS1 Lüneburg', 
    address: 'Spillbrunnenweg 1, 21337 Lüneburg',
    coordinates: { lat: 53.2467, lng: 10.4108 }
  }" 
  :zoom="15" 
/>
```

### 2. Props Are Processed
- `props.location` = the location object
- `props.zoom` = 15

### 3. Computed Properties Calculate
- `center` = `[53.2467, 10.4108]`
- `googleMapsLink` = `"https://www.google.com/maps/search/?api=1&query=53.2467,10.4108"`

### 4. Template Renders
- LMap creates the map centered at `[53.2467, 10.4108]` with zoom 15
- LTileLayer loads OpenStreetMap tiles
- LMarker places a pin at the center
- LPopup attaches to the marker with location info
- Button links to Google Maps

### 5. User Interaction
- User can pan/zoom the map
- Clicking the marker shows the popup
- Clicking the button opens Google Maps in a new tab

---

## Key Concepts Summary

| Concept | What It Does | Example |
|---------|-------------|---------|
| **Props** | Input data passed to component | `:location="myLocation"` |
| **Computed** | Auto-calculated reactive values | `const center = computed(...)` |
| **Interpolation** | Display data in template | `{{ location.name }}` |
| **Binding** | Connect data to attributes | `:href="googleMapsLink"` |
| **Interface** | Define object structure | `interface Location { ... }` |
| **Scoped Styles** | CSS only for this component | `<style scoped>` |

---

## Common Questions

**Q: Why use Leaflet instead of Google Maps?**
A: OpenStreetMap (via Leaflet) is free and open-source. Google Maps requires an API key and has usage limits.

**Q: Can I add multiple markers?**
A: Yes! You'd need to loop through an array of locations and create multiple `LMarker` components.

**Q: Why is this wrapped in `<ClientOnly>` in EventPage.vue?**
A: Leaflet requires browser APIs that don't exist during server-side rendering. `<ClientOnly>` ensures it only runs in the browser.

**Q: How do I change the map style?**
A: Change the `url` in `LTileLayer` to a different tile provider (e.g., Mapbox, CartoDB, etc.).

---

## Dependencies

- **Vue 3**: The framework
- **@vue-leaflet/vue-leaflet**: Vue wrapper for Leaflet
- **leaflet**: The actual map library
- **Tailwind CSS**: For styling

Install with:
```bash
npm install @vue-leaflet/vue-leaflet leaflet
```

