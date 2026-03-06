<template>
  <div class="bg-[#E6E2DC]">
    <NuxtLayout class="layouts">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { useLanguage } from "@/composables/useLanguage";

const { init } = useLanguage();

onMounted(() => {
  init();
});
</script>
