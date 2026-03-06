<template>
  <div class="mt-[117px]">
    <div class="flex flex-col items-center justify-center space-y-6">
      <h1 class="mt-24 text-7xl font-bold text-center">{{ t.title }}</h1>
      <div class="w-full max-w-2xl">
        <input
          v-model="searchParams"
          :placeholder="t.searchPlaceholder"
          class="w-full h-12 mt-24 px-4 py-2 bg-[#DFDAD1] rounded-md border border-[#C1BBB1] outline-none"
        />
      </div>
    </div>
    <div class="mt-32 w-full flex flex-col items-center">
      <div
        class="w-full max-w-[1650px] flex items-center justify-between mb-6 px-4"
      >
        <p class="text-left">
          {{ products?.length || 0 }}
          {{
            (products?.length || 0) === 1 ? t.productSingular : t.productPlural
          }}
        </p>
        <select
          v-model="sortOption"
          class="h-12 w-64 px-4 py-2 bg-[#DFDAD1] rounded-md border border-[#C1BBB1] outline-none text-black cursor-pointer"
        >
          <option value="default">{{ t.sortDefault }}</option>
          <option value="name_asc">{{ t.sortAsc }}</option>
          <option value="name_desc">{{ t.sortDesc }}</option>
        </select>
      </div>

      <div
        class="w-full max-w-[1660px] flex flex-wrap justify-center gap-12 px-4"
      >
        <div
          v-for="product in products"
          :key="product.name"
          class="bg-[#DFDAD1] w-[370px] rounded-md border border-[#C1BBB1]"
        >
          <img
            :src="product.image"
            :alt="product.displayAlt"
            class="w-full h-52 object-cover"
          />
          <div class="flex flex-col gap-12 p-4">
            <div>
              <h2 class="text-xl font-semibold">{{ product.name }}</h2>
              <p class="text-md">{{ product.displayDescription }}</p>
            </div>
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
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import { generateFuzzyRegexPatterns } from "@/utils/fuzzySearch";
import productsData from "@/data/products.json";
import { useLanguage } from "@/composables/useLanguage";

interface Product {
  name: string;
  description: string;
  descriptionEn: string;
  image: string;
  alt: string;
  altEn: string;
  slug: string;
}

interface Category {
  category: string;
  products: Product[];
}

const { currentLang } = useLanguage();

const translations = {
  de: {
    title: "Produkte",
    searchPlaceholder: "Produkt abc....",
    productSingular: "Produkt",
    productPlural: "Produkte",
    sortDefault: "Sortierung",
    sortAsc: "Alphabetisch (A-Z)",
    sortDesc: "Alphabetisch (Z-A)",
    readMore: "Mehr erfahren...",
  },
  en: {
    title: "Products",
    searchPlaceholder: "Product abc....",
    productSingular: "Product",
    productPlural: "Products",
    sortDefault: "Sort by",
    sortAsc: "Alphabetical (A-Z)",
    sortDesc: "Alphabetical (Z-A)",
    readMore: "Learn more...",
  },
};

const t = computed(() => translations[currentLang.value]);

const searchParams = ref("");
const sortOption = ref("default");
const products = ref<
  (Product & { displayDescription: string; displayAlt: string })[]
>([]);

const allProducts: Product[] = (productsData as Category[]).flatMap(
  (cat) => cat.products,
);

function applyFiltersAndSorting() {
  const search = searchParams.value.trim().toLowerCase();
  const regex = new RegExp(generateFuzzyRegexPatterns(search));

  const filtered = allProducts
    .filter((product) => {
      const name = product.name.toLowerCase();
      const desc = (
        currentLang.value === "en" ? product.descriptionEn : product.description
      ).toLowerCase();
      return regex.test(name) || regex.test(desc);
    })
    .map((product) => ({
      ...product,
      displayDescription:
        currentLang.value === "en"
          ? product.descriptionEn
          : product.description,
      displayAlt: currentLang.value === "en" ? product.altEn : product.alt,
    }));

  if (sortOption.value === "name_asc") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption.value === "name_desc") {
    filtered.sort((a, b) => b.name.localeCompare(a.name));
  }

  products.value = filtered;
}

onMounted(() => {
  applyFiltersAndSorting();
});

watch([searchParams, sortOption, currentLang], () => {
  applyFiltersAndSorting();
});

const config = useRuntimeConfig();
const baseUrl = config.public.siteUrl;
useSeoMeta({
  title: "Produkte",
  ogTitle: "Produkte",
  description: "Produkte von Print4Future",
  ogDescription: "Produkte von Print4Future",
  ogImage: `${baseUrl}/image.png`,
});
</script>
