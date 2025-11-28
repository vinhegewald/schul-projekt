<script setup lang="ts">
import { useArticles } from '@/composables/useArticles'

const { loadAll } = useArticles()
const articles = await loadAll()
</script>

<template>
  <div>
    <h1>Archive</h1>
    <ArchivArchiveList :items="articles" />
  </div>
</template>
