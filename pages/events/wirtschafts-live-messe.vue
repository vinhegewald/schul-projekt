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

defineOptions({ name: "WirtschaftsLiveMessePage" });

const { currentLang } = useLanguage();

// FIXME JSC Placeholder - replace with actual image
const headerImage = "/images/events/summer-sale.jpg";

const eventLocation = {
  name: "BBS Walsrode",
  address: "Am bhf 80, 29664 Walsrode",
  coordinates: { lat: 52.870271624240516, lng: 9.598559460718183 },
};

const translations = {
  de: {
    title: "WIRTSCHAFTS LIVE MESSE",
    subtitle: "Besuchen Sie uns auf der Messe",
    contentHeader: "Über die Veranstaltung:",
    description: [
      'Die Wirtschaft-Live-Messe der Schülerunternehmen findet jedes Jahr abwechselnd an eine Berufsschule in Niedersachsen statt. Dort stellen ca. 20 Schülerunternehmen aus ganz Niedersachsen aus und messen sich in den Wettbewerben "bester Messestand", "bester Messebandbeitrag", "bester Imagefilm" und "beste Fotopräsentation der Geschäftsidee".',
      "Die Messe bietet den Jugendlichen die Möglichkeit, ihre Geschäftsideen und Produkte einer breiten Öffentlichkeit vorzustellen. Ziel der Messe ist es, unternehmerisches Denken und Handeln praxisnah zu fördern, wirtschaftliche Kompetenzen zu stärken und den Austausch zwischen Schüler/-innen, Schulen, Wirtschaft und Politik zu unterstützen.",
    ],
  },
  en: {
    title: "WIRTSCHAFTS LIVE TRADE FAIR",
    subtitle: "Visit us at the trade fair",
    contentHeader: "About the Event:",
    description: [
      'The Wirtschaft-Live trade fair for student companies takes place every year at a different vocational school in Lower Saxony. Around 20 student companies from across Lower Saxony exhibit and compete in categories including "best trade fair stand", "best trade fair band contribution", "best image film", and "best photo presentation of a business idea".',
      "The fair gives young people the opportunity to present their business ideas and products to a wider audience. The goal is to promote entrepreneurial thinking and action in a practical setting, strengthen economic competencies, and support the exchange between students, schools, business, and politics.",
    ],
  },
};

const t = computed(() => translations[currentLang.value]);
</script>
