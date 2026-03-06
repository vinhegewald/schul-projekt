<script setup lang="ts">
import { computed } from "vue";
import productsData from "@/data/products.json";
import { useLanguage } from "@/composables/useLanguage";

interface Product {
  name: string;
  slug: string;
  description: string;
  descriptionEn: string;
  image: string;
  alt: string;
  altEn: string;
}

interface Category {
  category: string;
  categoryEn: string;
  slug: string;
  products: Product[];
}

const { currentLang } = useLanguage();

const translations = {
  de: { readMore: "Mehr erfahren..." },
  en: { readMore: "Learn more..." },
};

const t = computed(() => translations[currentLang.value]);

const route = useRoute();
const categorySlug = route.params.category?.toString().toLowerCase();

const category = (productsData as Category[]).find(
  (c) => c.slug === categorySlug,
);

if (!category) {
  throw createError({
    statusCode: 404,
    statusMessage:
      currentLang.value === "en"
        ? "Category not found"
        : "Kategorie nicht gefunden",
  });
}

const categoryName = computed(() =>
  currentLang.value === "en" ? category.categoryEn : category.category,
);

const products = computed(() =>
  category.products.map((p) => ({
    ...p,
    displayDescription:
      currentLang.value === "en" ? p.descriptionEn : p.description,
    displayAlt: currentLang.value === "en" ? p.altEn : p.alt,
  })),
);
</script>

<template>
  <div class="mt-[120px] w-full flex flex-col items-center px-6">
    <div
      class="max-w-[1660px] w-full flex flex-wrap justify-center gap-12 px-4"
    >
      <h1 class="w-full text-5xl font-bold text-center mb-12">
        {{ categoryName }}
      </h1>

      <div
        v-for="product in products"
        :key="product.slug"
        class="bg-[#DFDAD1] w-[370px] rounded-md border border-[#C1BBB1]"
      >
        <img
          :src="product.image"
          :alt="product.displayAlt"
          class="w-full rounded-t-md"
        />
        <div class="flex flex-col gap-4 p-4">
          <h2 class="text-xl font-semibold">{{ product.name }}</h2>
          <p class="text-md">{{ product.displayDescription }}</p>
          <NuxtLink
            :to="`/produkte/${product.slug}`"
            class="bg-[#c9c4bb] hover:bg-[#d3cec5] transition-all rounded-md border border-[#b8b3aa] px-4 py-2"
          >
            {{ t.readMore }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
