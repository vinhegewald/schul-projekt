<template>
  <div class="event-page">
    <!-- Hero Section with Image and Overlay Text -->
    <section
      class="hero-section relative h-[500px] bg-cover bg-center bg-no-repeat flex items-start justify-start"
      :style="{ backgroundImage: `url(${headerImage})` }"
    >
        <!--dark semi-transparent gradient for better contrast, can be removed -->
<div class="hero-overlay absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>

      <div class="hero-content relative z-10 p-12 text-white max-w-2xl">
        <h1 class="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          {{ title }}
        </h1>
        <h2 class="text-3xl md:text-4xl font-semibold drop-shadow-lg">
          {{ subtitle }}
        </h2>
      </div>
    </section>

    <!-- Content Section -->
    <section class="content-section my-16 mx-auto max-w-6xl px-6">
      <h2 class="font-bold text-4xl mb-8">{{ contentHeader }}</h2>
      
      <div class="text-xl leading-relaxed space-y-6">
        <!-- If description is an array of paragraphs -->
        <template v-if="Array.isArray(description)">
          <p v-for="(paragraph, index) in description" :key="index">
            {{ paragraph }}
          </p>
        </template>
        
        <!-- If description is a single string -->
        <div v-else v-html="description"></div>
      </div>
    </section>

    <!-- Map Section (optional) -->
    <section v-if="location" class="map-section my-16 mx-auto max-w-6xl px-6">
      <ClientOnly>
        <EventsMapComponent :location="location" :zoom="mapZoom" />
        <template #fallback>
          <div class="h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
            <p class="text-gray-600">{{ content.events.loadingMap }}</p>
          </div>
        </template>
      </ClientOnly>
    </section>

  </div>
</template>

<script setup lang="ts">
import { useSiteContent } from '@/composables/useSiteContent';

interface Location {
  name: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

interface EventPageProps {
  title: string;
  subtitle: string;
  headerImage: string;
  contentHeader: string;
  description: string | string[];
  location?: Location;
  mapZoom?: number;
}

withDefaults(defineProps<EventPageProps>(), {
  mapZoom: 15,
});

defineOptions({
  name: 'EventPage',
});

const { content } = useSiteContent();
</script>


