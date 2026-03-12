<script setup lang="ts">
import { useArticles } from '@/composables/useArticles';
import { useSiteContent } from '@/composables/useSiteContent';

const { articles } = useArticles();
const { content } = useSiteContent();
// const { loadAll } = useArticles()
// const articles = await loadAll()

useSeoMeta({
  title: "Archiv",
  ogTitle: "Archiv",
  description: "Archiv",
  ogDescription: "Archiv",
})

</script>



<template>
  <div class="w-full flex flex-col">
    <h1 class="self-center m-[30px] text-4xl">{{ content.archive.title }}</h1>
    <ArchivArchiveList :items="articles" />
  </div>
</template>
