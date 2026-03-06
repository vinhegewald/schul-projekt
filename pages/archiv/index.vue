<script setup lang="ts">
import { useArticles } from '@/composables/useArticles'

const { loadAll } = useArticles()
const articles = await loadAll()

useSeoMeta({
  title: "Archiv",
  ogTitle: "Archiv",
  description: "Archiv",
  ogDescription: "Archiv",
})

</script>



<template>
  <div class="w-full flex flex-col">
    <h1 class="self-center m-[30px] text-4xl">Archiv</h1>
    <ArchivArchiveList :items="articles" />
  </div>
</template>
