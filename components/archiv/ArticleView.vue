<script setup lang="ts">
defineProps<{ article: any }>()
</script>

<template>
  <article>
    <h1>{{ article.title }}</h1>
    <p><i>{{ article.date }}</i></p>

    <div v-for="(line, index) in article.content" :key="index">
      <p v-if="!line.startsWith('#')">{{ line }}</p>
      <h2 v-if="line.startsWith('#')">{{ line.replace(/^#+\s*/, '') }}</h2>
    </div>
  </article>
</template>