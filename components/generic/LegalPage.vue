<template>
  <div class="max-w-4xl mx-auto px-6 py-12">
    <h1 class="text-4xl font-bold mb-8">{{ content.title }}</h1>
    <div class="space-y-6 text-lg leading-relaxed">
      <section
        v-for="(section, index) in content.sections"
        :key="index"
        class="space-y-3"
      >
        <h2 v-if="section.heading" class="text-2xl font-semibold mt-8 mb-4">
          {{ section.heading }}
        </h2>
        <p v-for="(paragraph, pIndex) in section.paragraphs" :key="pIndex">
          {{ paragraph }}
        </p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useLanguage } from "@/composables/useLanguage";

interface Section {
  heading?: string;
  paragraphs: string[];
}

interface LocalizedContent {
  title: string;
  sections: Section[];
}

interface Props {
  de: LocalizedContent;
  en: LocalizedContent;
}

const props = defineProps<Props>();

defineOptions({ name: "GenericLegalPage" });

const { currentLang } = useLanguage();

const content = computed(() => props[currentLang.value]);
</script>
