<script setup lang="ts">
import { computed } from 'vue';
import { useProducts } from '@/composables/useProducts';
import { useSiteContent } from '@/composables/useSiteContent';

const route = useRoute();
const { content } = useSiteContent();
const { getCategoryBySlug } = useProducts();

const category = computed(() => getCategoryBySlug(route.params.category?.toString() ?? ''));

const products = computed(() => category.value?.products ?? []);

if (!category.value) {
  throw createError({
    statusCode: 404,
    statusMessage: content.value.products.categoryNotFound,
  });
}

const config = useRuntimeConfig();
const baseUrl = config.public.siteUrl;

useSeoMeta({
  title: category.value?.category,
  ogTitle: category.value?.category,
  description: 'Produkte von Print4Future',
  ogDescription: 'Produkte von Print4Future',
  ogImage: `${baseUrl}/image.png`,
});
</script>

<template>
  <div class="mt-[120px] w-full flex flex-col items-center px-6">
    <div class="max-w-[1660px] w-full flex flex-wrap justify-center gap-12 px-4">
      <h1 class="w-full text-5xl font-bold text-center mb-12">{{ category?.category }}</h1>

      <div
        v-for="product in products"
        :key="product.slug"
        class="bg-[#DFDAD1] w-[370px] rounded-md border border-[#C1BBB1] flex flex-col"
      >
        <img
          :src="product.image"
          :alt="product.alt"
          class="w-full rounded-t-md object-cover h-52"
        />
        <div class="flex flex-col flex-1 gap-4 p-4">
          <h2 class="text-xl font-semibold">{{ product.name }}</h2>
          <p class="text-md">{{ product.description }}</p>
          <NuxtLink
            :to="`/produkte/${product.slug}`"
            class="bg-[#c9c4bb] hover:bg-[#d3cec5] transition-all rounded-md border border-[#b8b3aa] px-4 py-2 mt-auto"
          >
            {{ content.products.learnMore }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
