<template>
  <EventsEventPage
    title="SUMMER SALE:"
    subtitle="SAVE THE DATE ?.06.26"
    :header-image="headerImage"
    header-image-alt="Summer-Sale Banner für das Event am 26. Juni"
    content-header="Summer-Sale:"
    :description="eventDescription"
    :location="eventLocation"
  />
</template>

<script setup lang="ts">
const headerImage = '/images/events/summer-sale.jpg'; 

const eventDescription = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
];

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

