<template>
  <div class="my-16 mx-auto max-w-6xl px-6">
    <h2 class="font-bold text-4xl mb-8">{{ t.title }}</h2>
    <div class="text-xl leading-relaxed space-y-6">
      <p v-for="(paragraph, i) in t.paragraphs" :key="i">
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useLanguage } from "@/composables/useLanguage";

defineOptions({ name: "LandingAbout" });

const { currentLang } = useLanguage();

const translations = {
  de: {
    title: "Über uns",
    paragraphs: [
      "Unsere Schülerfirma ist ein kreatives und innovatives Startup-Projekt der Schüler/-innen der HA25B der einjährigen Berufsfachschule Wirtschaft mit den Schwerpunkten Handel und IT an den Berufsbildenden Schulen I Lüneburg.",
      "Wir haben uns auf den Bereich 3D-Druck spezialisiert und setzen unsere Ideen mit viel Motivation und Teamgeist in die Tat um. In einem Design-Thinking-Prozess haben wir durch Interviews mit potenziellen Kunden herausgefunden, welche Produkte gefragt sind – diese entwickeln und produzieren wir nun.",
      "Außerdem arbeiten wir in einer Kooperation mit der gewerblichen BBS II: Dort gefertigte Holzprodukte vermarkten wir als angehende Handelsprofis.",
      "Als Schülerunternehmen setzen wir auf Teamarbeit, Kreativität und gegenseitige Unterstützung. Jede Idee zählt, jeder Beitrag ist wertvoll. Wir sind ein offenes Team, das sich stetig weiterentwickelt und innovative Lösungen für spannende Projekte schafft.",
      "Unser Ziel: Mit unseren Produkten einen echten Mehrwert für die Gemeinschaft zu bieten – und dabei Erfahrung für unsere berufliche Zukunft zu sammeln.",
      "Unsere Schülerfirma steht für Kreativität, Motivation und eine starke, hilfsbereite Zusammenarbeit – und wir freuen uns darauf, noch viele spannende Projekte zu realisieren!",
    ],
  },
  en: {
    title: "About Us",
    paragraphs: [
      "Our student company is a creative and innovative startup project by the students of HA25B from the one-year vocational business school with a focus on commerce and IT at the Vocational Schools I Lüneburg.",
      "We have specialized in 3D printing and bring our ideas to life with motivation and team spirit. Through a design thinking process and interviews with potential customers, we identified which products are in demand — and we now develop and produce them.",
      "We also work in cooperation with the vocational BBS II: wooden products made there are marketed by us as aspiring commerce professionals.",
      "As a student company, we rely on teamwork, creativity, and mutual support. Every idea counts, every contribution is valuable. We are an open team that continuously grows and creates innovative solutions for exciting projects.",
      "Our goal: to offer real added value to the community with our products — while gaining experience for our professional futures.",
      "Our student company stands for creativity, motivation, and strong, supportive collaboration — and we look forward to realizing many more exciting projects!",
    ],
  },
};

const t = computed(() => translations[currentLang.value]);
</script>
