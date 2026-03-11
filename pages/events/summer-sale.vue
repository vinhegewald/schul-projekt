<template>
  <EventsEventPage
    :title="event.title"
    :subtitle="event.subtitle"
    :header-image="headerImage"
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

const event = computed(() => content.value.events.summerSale);

defineOptions({
  name: 'SummerSalePage',
});
</script>

