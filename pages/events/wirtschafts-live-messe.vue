<template>
  <EventsEventPage
    :title="event.title"
    :subtitle="event.subtitle"
    :header-image="headerImage"
    :header-image-alt="event.headerImageAlt"
    :content-header="event.contentHeader"
    :description="event.description"
    :location="event.location"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useSiteContent } from '@/composables/useSiteContent';

const { content } = useSiteContent();
const headerImage = '/images/events/summer-sale.jpg';
const event = computed(() => content.value.events.wirtschaftsLiveMesse);

defineOptions({
  name: 'WirtschaftsLiveMessePage',
});

useSeoMeta({
  title: "Wirtschafts Live Messe",
  ogTitle: "Wirtschafts Live Messe",
  description: "Wirtschafts Live Messe",
  ogDescription: "Wirtschafts Live Messe",
})
</script>

