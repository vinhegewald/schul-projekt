<template>
  <GenericLegalPage :title="title" :sections="sections" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useSiteContent } from '@/composables/useSiteContent';

const { content } = useSiteContent();
const title = computed(() => content.value.legal.impressum.title);
const sections = computed(() => content.value.legal.impressum.sections);
</script>
