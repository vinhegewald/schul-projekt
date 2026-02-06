<template>
  <div class="mt-[117px]">
    <div class="flex flex-col items-center justify-center space-y-6">
      <h1 class="mt-24 text-7xl font-bold text-center">Produkte</h1>
      <div class="w-full max-w-2xl">
        <input
          v-model="searchParams"
          placeholder="Produkt abc...."
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
          {{ (products?.length || 0) === 1 ? "Produkt" : "Produkte" }}
        </p>
        <select
          v-model="sortOption"
          class="h-12 w-64 px-4 py-2 bg-[#DFDAD1] rounded-md border border-[#C1BBB1] outline-none text-black cursor-pointer"
        >
          <option value="default">Sortierung</option>
          <option value="name_asc">Alphabetisch (A-Z)</option>
          <option value="name_desc">Alphabetisch (Z-A)</option>
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
          <img :src="product.image" class="w-full h-52 object-cover" />
          <div class="flex flex-col gap-12 p-4">
            <div>
              <h2 class="text-xl font-semibold">{{ product.name }}</h2>
              <p class="text-md">{{ product.description }}</p>
            </div>
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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { generateFuzzyRegexPatterns } from "@/utils/fuzzySearch";
import productsData from "@/data/products.json";

interface Product {
  name: string;
  description: string;
  image: string;
  slug: string;
}

interface Category {
  category: string;
  products: Product[];
}

const searchParams = ref("");
const sortOption = ref("default");

// flat product list for display
const products = ref<Product[]>([]);

// load & flatten JSON
const allProducts: Product[] = productsData.flatMap(
  (cat: Category) => cat.products,
);

onMounted(() => {
  applyFiltersAndSorting();
});

watch([searchParams, sortOption], () => {
  applyFiltersAndSorting();
});

function applyFiltersAndSorting() {
  const search = searchParams.value.trim().toLowerCase();
  const regex = new RegExp(generateFuzzyRegexPatterns(search));

  const filtered = allProducts.filter((product) => {
    return (
      regex.test(product.name.toLowerCase()) ||
      regex.test(product.description.toLowerCase())
    );
  });

  if (sortOption.value === "name_asc") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption.value === "name_desc") {
    filtered.sort((a, b) => b.name.localeCompare(a.name));
  }

  products.value = filtered;
}
</script>
