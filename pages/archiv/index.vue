<script setup lang="ts">
import { useArticles } from '@/composables/useArticles'

const { loadAll } = useArticles()
const articles = await loadAll()
</script>



<template>
  <div class="w-full flex flex-col">
    <h1 class="self-center m-[30px] text-4xl">Archive</h1>
    <ArchivArchiveList :items="articles" />
  </div>
</template>
