<template>
  <div class="mt-[117px]">
    <div class="flex flex-col items-center justify-center space-y-6">
      <h1 class="mt-24 text-7xl font-bold text-center">{{ content.products.title }}</h1>
      <div class="w-full max-w-2xl">
        <input
          v-model="searchParams"
          :placeholder="content.products.searchPlaceholder"
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
          {{ (products?.length || 0) === 1 ? content.products.countSingular : content.products.countPlural }}
        </p>
        <select
          v-model="sortOption"
          class="h-12 w-64 px-4 py-2 bg-[#DFDAD1] rounded-md border border-[#C1BBB1] outline-none text-black cursor-pointer"
        >
          <option value="default">{{ content.products.sortDefault }}</option>
          <option value="name_asc">{{ content.products.sortNameAsc }}</option>
          <option value="name_desc">{{ content.products.sortNameDesc }}</option>
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
          <img :src="product.image" class="w-full" />
          <div class="flex flex-col gap-12 p-4">
            <div>
              <h2 class="text-xl font-semibold">{{ product.name }}</h2>
              <p class="text-md">{{ product.description }}</p>
            </div>
            <NuxtLink
                :to="`/produkte/${product.slug}`"
                class="bg-[#c9c4bb] hover:bg-[#d3cec5] transition-all rounded-md border border-[#b8b3aa] px-4 py-2"
            >
              {{ content.products.learnMore }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useProducts } from '@/composables/useProducts';
import { useSiteContent } from '@/composables/useSiteContent';
import { generateFuzzyRegexPatterns } from '@/utils/fuzzySearch';

const { content } = useSiteContent();
const { allProducts } = useProducts();

const searchParams = ref('');
const sortOption = ref('default');

const products = computed(() => {
  const search = searchParams.value.trim().toLowerCase();

  const filtered = !search
    ? [...allProducts.value]
    : allProducts.value.filter((product) => {
      const regex = new RegExp(generateFuzzyRegexPatterns(search));

      return (
        regex.test(product.name.toLowerCase())
        || regex.test(product.description.toLowerCase())
      );
    });

  if (sortOption.value === 'name_asc') {
    return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortOption.value === 'name_desc') {
    return [...filtered].sort((a, b) => b.name.localeCompare(a.name));
  }

  return filtered;
});
</script>
