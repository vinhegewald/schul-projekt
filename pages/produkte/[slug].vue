<template>
  <div v-if="product" class="mt-[120px] w-full flex flex-col items-center px-6">
    <div class="max-w-4xl w-full bg-[#DFDAD1] p-8 rounded-2xl border border-[#C1BBB1]">

      <h1 class="text-4xl font-bold mb-6">{{ product.name }}</h1>

      <div v-if="product.image" class="mb-6">
        <img :src="product.image" class="w-full h-auto rounded-xl shadow" />
      </div>

      <p class="text-neutral-600 mb-3">
        {{ content.products.categoryLabel }}: <b>{{ product.category }}</b>
      </p>

      <p class="text-lg leading-7 mb-6">{{ product.description }}</p>

      <button @click="navigateBack" class="bg-[#c9c4bb] hover:bg-[#d3cec5] transition-all rounded-md border border-[#b8b3aa] px-4 py-2">
        {{ content.products.back }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useProducts } from '@/composables/useProducts';
import { useSiteContent } from '@/composables/useSiteContent';

const router = useRouter();
const route = useRoute();
const { content } = useSiteContent();
const { getProductBySlug } = useProducts();

const product = computed(() => getProductBySlug(route.params.slug as string));

function navigateBack() {
  router.back();
}

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: content.value.products.notFound });
}
</script>