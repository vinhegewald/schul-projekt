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
          currentLanguage.code === lang.code
            ? 'bg-[#BCB5AA] text-white'
            : 'text-[#4A453F] hover:bg-white/70'
        "
        class="flex-1 flex items-center justify-center gap-2 py-3 transition-all font-medium"
        @click="selectLanguage(lang)"
      >
        <Icon :name="lang.icon" class="w-5 h-5" />
        <span class="text-sm">{{ lang.code.toUpperCase() }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
defineOptions({ name: "LanguageToggle" });

interface Language {
  code: string;
  name: string;
  icon: string;
}

const languages: Language[] = [
  { code: "de", name: "Deutsch", icon: "circle-flags:de" },
  { code: "en", name: "English", icon: "circle-flags:gb" },
];

const currentLanguage = ref<Language>(languages[0]!);

onMounted(() => {
  try {
    const saved = localStorage.getItem("language");
    if (saved) {
      const found = languages.find((l) => l.code === saved);
      if (found) currentLanguage.value = found;
    }
  } catch (e) {
    console.warn("Could not read language from localStorage", e);
  }
});

const selectLanguage = (lang: Language) => {
  try {
    localStorage.setItem("language", lang.code);
  } catch (e) {
    console.warn("Could not save language to localStorage", e);
  }
  currentLanguage.value = lang;
};
</script>
