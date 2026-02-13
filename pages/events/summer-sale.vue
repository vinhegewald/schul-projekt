<template>
  <EventsEventPage
    title="SUMMER SALE:"
    subtitle="SAVE THE DATE ?.06.26"
    :header-image="headerImage"
    content-header="Summer-Sale:"
    :description="eventDescription"
    :location="eventLocation"
  />
</template>

<script setup lang="ts">
// FIXME JSC Placeholder - replace with actual image
const headerImage = '/images/events/summer-sale.jpg'; 

// FIXME JSC other group needs to provide content
const eventDescription = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
];

// FIXME JSC check for correct coordinates
const eventLocation = {
  name: 'BBS1 Lüneburg',
  address: 'Spillbrunnenweg 1, 21337 Lüneburg, Deutschland',
  coordinates: {
    lat: 53.2467, 
    lng: 10.4108,
  },
};

defineOptions({
  name: 'SummerSalePage',
});
useSeoMeta({
  title: "Summer Sale",
  ogTitle: "Summer Sale",
  description: "Summer Sale",
  ogDescription: "Summer Sale",
})
</script>

