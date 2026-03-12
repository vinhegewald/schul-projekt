<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useArticles } from '@/composables/useArticles';
import { useSiteContent } from '@/composables/useSiteContent';

const route = useRoute();
const { getArticleBySlug } = useArticles();
const { content } = useSiteContent();

const article = computed(() => getArticleBySlug(route.params.slug as string));

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: content.value.archive.articleNotFound });
}

useSeoMeta({
  title: article.value?.title,
  ogTitle: article.value?.title,
  description: article.value?.description,
  ogDescription: article.value?.description,
})
</script>

<template>
  <ArchivArticleView :article="article" />
</template>