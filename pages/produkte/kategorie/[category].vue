<script setup lang="ts">
import productsData from "@/data/products.json";

interface Product {
  name: string;
  slug: string;
  description: string;
  image: string;
}

interface Category {
  category: string;
  products: Product[];
}

const route = useRoute();
const categorySlug = route.params.category?.toString().toLowerCase();

// Flatten categories and add category slug
const categories = (productsData as Category[]).map((cat) => ({
  ...cat,
  slug: cat.category.toLowerCase().replace(/\s+/g, "-"),
}));

// Find the category by slug
const category = categories.find((c) => c.slug === categorySlug);

const products = computed(() =>
  category
    ? category.products.map((p) => ({ ...p, category: category.category }))
    : [],
);

if (!category) {
  throw createError({
    statusCode: 404,
    statusMessage: "Kategorie nicht gefunden",
  });
}

const config = useRuntimeConfig()
const baseUrl = config.public.siteUrl

useSeoMeta({
  title: category.category,
  ogTitle: category.category,
  description: 'Produkte von Print4Future',
  ogDescription: 'Produkte von Print4Future',
  ogImage: `${baseUrl}/image.png`,
})
</script>

<template>
  <div class="mt-[120px] w-full flex flex-col items-center px-6">
    <div
      class="max-w-[1660px] w-full flex flex-wrap justify-center gap-12 px-4"
    >
      <h1 class="w-full text-5xl font-bold text-center mb-12">
        {{ category.category }}
      </h1>

      <div
        v-for="product in products"
        :key="product.slug"
        class="bg-[#DFDAD1] w-[370px] rounded-md border border-[#C1BBB1]"
      >
        <img
          :src="product.image"
          class="w-full rounded-t-md object-cover h-52"
        />
        <div class="flex flex-col gap-4 p-4">
          <h2 class="text-xl font-semibold">{{ product.name }}</h2>
          <p class="text-md">{{ product.description }}</p>
          <NuxtLink
            :to="`/produkte/${product.slug}`"
            class="bg-[#c9c4bb] hover:bg-[#d3cec5] transition-all rounded-md border border-[#b8b3aa] px-4 py-2"
          >
            Mehr erfahren...
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
