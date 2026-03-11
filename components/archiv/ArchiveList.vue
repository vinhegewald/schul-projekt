<script setup lang="ts">
import { useSiteContent } from '@/composables/useSiteContent';

defineProps<{ items: any[] }>();

const { content } = useSiteContent();
</script>

<!-- <template>
  <ul>
    <li v-for="item in items" :key="item.slug">
      <NuxtLink :to="`/archiv/${item.slug}`">
        {{ item.title }} — {{ item.date }}
      </NuxtLink>
    </li>
  </ul>
</template> -->

<template>
  <div class="min-h-600 py-10 flex flex-wrap">
    <div
      v-for="item in items"
      :key="item.id"
      class="w-1/2 p-4"
    >
      <div class="flex flex-col items-center rounded-xl gap-4 shadow-md hover:shadow-lg transition">
          <img
            :src="item.image"
            :alt="content.archive.previewAlt"
            class="w-full h-40 object-cover rounded-lg shrink-0"
          />

        <div class="flex-1 text-center">
          <h2 class="text-lg font-semibold text-gray-800">
            {{ item.title }}
          </h2>
          <p class="text-sm text-gray-600 mt-1 text-start mx-5">
            {{ item.excerpt }}
          </p>
          <NuxtLink :to="`/archiv/${item.slug}`">
            {{ content.archive.learnMore }}
          </NuxtLink>
          <div class="h-3" />
        </div>
      </div>
    </div>
  </div>
</template>