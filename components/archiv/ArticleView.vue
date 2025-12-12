<script setup lang="ts">
defineProps<{ article: any }>()
</script>

<template>
  <section 
    :style="{ backgroundImage: `url(${article.image})` }"
    alt="Preview"
    class="hero-section relative lg:h-[500px] h-[250px] bg-cover bg-center bg-no-repeat flex items-start justify-start">
  </section>

  <div class="min-h-600 py-10">
    <div class="max-w-6xl mx-auto px-4 space-y-6">

      <article class="flex flex-col">
        <h2 class="font-bold text-4xl my-8 self-center">{{ article.title }}</h2>
        <p class="text-2sm font-light ml-5"><i>{{ article.date }}</i></p>
        <hr class="border-t border-gray-300 my-6" />
        <div
          class="w-full max-w-[1650px] flex items-center justify-between mb-6 px-4"
        >
          <div class="text-xl leading-relaxed space-y-6" v-for="(line, index) in article.content" :key="index">
            <p v-if="!line.startsWith('#')">{{ line }}</p>
            <h2 v-if="line.startsWith('#')">{{ line.replace(/^#+\s*/, '') }}</h2>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>