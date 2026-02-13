<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useArticles } from '@/composables/useArticles'

const route = useRoute()
const { loadBySlug } = useArticles()

const article = await loadBySlug(route.params.slug as string)

if (!article) {
  throw createError({ statusCode: 404, message: 'Article not found' })
}

useSeoMeta({
  title: article.title,
  ogTitle: article.title,
  description: article.description,
  ogDescription: article.description,
})
</script>

<template>
  <ArchivArticleView :article="article" />
</template>