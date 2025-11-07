<template>
  <div class="map-container">
    <div class="map-wrapper">
      <LMap
        ref="map"
        :zoom="zoom"
        :center="center"
        :use-global-leaflet="false"
        class="leaflet-map"
      >
        <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          layer-type="base"
          name="OpenStreetMap"
        />
        <LMarker :lat-lng="center">
          <LPopup>
            <div class="popup-content">
              <strong>{{ location.name }}</strong>
              <p class="text-sm mt-1">{{ location.address }}</p>
            </div>
          </LPopup>
        </LMarker>
      </LMap>
    </div>
    
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
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';

interface Location {
  name: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

interface MapComponentProps {
  location: Location;
  zoom?: number;
}

const props = withDefaults(defineProps<MapComponentProps>(), {
  zoom: 15,
});

const center = computed(() => [
  props.location.coordinates.lat,
  props.location.coordinates.lng,
]);

const googleMapsLink = computed(() => {
  const { lat, lng } = props.location.coordinates;
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
});

defineOptions({
  name: 'EventMapComponent',
});
</script>

<style scoped>
.map-container {
  @apply w-full;
}

.map-wrapper {
  @apply w-full h-[400px] rounded-lg overflow-hidden shadow-lg border-2 border-gray-300;
}

.leaflet-map {
  @apply w-full h-full;
}

.popup-content {
  @apply p-2;
}
</style>

