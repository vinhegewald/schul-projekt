<template>
  <EventsEventPage
    :title="t.title"
    :subtitle="t.subtitle"
    :header-image="headerImage"
    :content-header="t.contentHeader"
    :description="t.description"
    :location="eventLocation"
  />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLanguage } from "@/composables/useLanguage";

defineOptions({ name: "SummerSalePage" });

const { currentLang } = useLanguage();

// FIXME JSC Placeholder - replace with actual image
const headerImage = "/images/events/summer-sale.jpg";

// FIXME JSC check for correct coordinates
const eventLocation = {
  name: "BBS1 Lüneburg",
  address: "Spillbrunnenweg 1, 21337 Lüneburg, Deutschland",
  coordinates: { lat: 53.2467, lng: 10.4108 },
};

const translations = {
  de: {
    title: "SUMMER SALE:",
    subtitle: "SAVE THE DATE ?.06.26",
    contentHeader: "Summer-Sale:",
    // FIXME JSC other group needs to provide content
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
  },
  en: {
    title: "SUMMER SALE:",
    subtitle: "SAVE THE DATE ?.06.26",
    contentHeader: "Summer Sale:",
    // FIXME JSC other group needs to provide content
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
  },
};

const t = computed(() => translations[currentLang.value]);
</script>
