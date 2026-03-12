<template>
  <div class="my-16 mx-auto max-w-6xl px-6">
    <h2 class="font-bold text-4xl mb-8">{{ content.home.aboutTitle }}</h2>
    <div class="text-xl leading-relaxed space-y-6">
      <p v-for="paragraph in content.home.aboutParagraphs" :key="paragraph">
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSiteContent } from '@/composables/useSiteContent';

defineOptions({
  name: 'LandingAbout',
});

const { content } = useSiteContent();
</script>
