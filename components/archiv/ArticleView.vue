<script setup lang="ts">
defineProps<{ article: any }>()
</script>

<template>
  <div class="min-h-600 py-10">
    <div class="max-w-4xl mx-auto px-4 space-y-6">

      <article class="flex flex-col">
        <img
          :src="article.image"
          alt="Preview"
          class="w-full h-40 object-cover rounded-lg shrink-0"
        />
        <h1 class="text-2xl mt-10">{{ article.title }}</h1>
        <p class="text-2sm font-light"><i>{{ article.date }}</i></p>
        <hr class="border-t border-gray-300 my-6" />
        <div
          class="w-full max-w-[1650px] flex items-center justify-between mb-6 px-4"
        >
          <div v-for="(line, index) in article.content" :key="index">
            <p v-if="!line.startsWith('#')">{{ line }}</p>
            <h2 v-if="line.startsWith('#')">{{ line.replace(/^#+\s*/, '') }}</h2>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>