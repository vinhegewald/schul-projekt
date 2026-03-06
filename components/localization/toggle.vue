<template>
  <div class="flex flex-col gap-4 mt-4 px-2">
    <div
      class="text-sm font-semibold tracking-wide text-[#6B6257] uppercase pl-1"
    >
      Sprache
    </div>
    <div
      class="flex w-full bg-white/40 border border-[#BCB5AA] rounded-xl overflow-hidden shadow-sm"
    >
      <button
        v-for="lang in languages"
        :key="lang.code"
        :class="
          currentLang === lang.code
            ? 'bg-[#BCB5AA] text-white'
            : 'text-[#4A453F] hover:bg-white/70'
        "
        class="flex-1 flex items-center justify-center gap-2 py-3 transition-all font-medium"
        @click="setLanguage(lang.code)"
      >
        <Icon :name="lang.icon" class="w-5 h-5" />
        <span class="text-sm">{{ lang.code.toUpperCase() }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLanguage } from "@/composables/useLanguage";

defineOptions({ name: "LocalizationToggle" });

const { currentLang, setLanguage } = useLanguage();

const languages = [
  { code: "de" as const, name: "Deutsch", icon: "circle-flags:de" },
  { code: "en" as const, name: "English", icon: "circle-flags:gb" },
];
</script>
