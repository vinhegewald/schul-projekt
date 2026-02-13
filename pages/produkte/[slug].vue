

<template>
  <div v-if="product" class="mt-[120px] w-full flex flex-col items-center px-6">
    <div class="max-w-4xl w-full bg-[#DFDAD1] p-8 rounded-2xl border border-[#C1BBB1]">

      <h1 class="text-4xl font-bold mb-6">{{ product.name }}</h1>

      <div v-if="product.image" class="mb-6">
        <img :src="product.image" class="w-full h-auto rounded-xl shadow" />
      </div>

      <p class="text-neutral-600 mb-3">
        Kategorie: <b>{{ product.category }}</b>
      </p>

      <p class="text-lg leading-7 mb-6">{{ product.description }}</p>

      <button @click="navigateBack" class="bg-[#c9c4bb] hover:bg-[#d3cec5] transition-all rounded-md border border-[#b8b3aa] px-4 py-2">
        Zurück
      </button>
    </div>
  </div>
</template>


<script setup lang="ts">
import productsData from "@/data/products.json";

const router = useRouter();

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

const allProducts = (productsData as Category[]).flatMap((cat) =>
    cat.products.map((p) => ({ ...p, category: cat.category }))
);

const product = computed(() =>
    allProducts.find((p) => p.slug === route.params.slug)
);

function navigateBack() {
  router.back()
}

const config = useRuntimeConfig()
const baseUrl = config.public.siteUrl

useSeoMeta({
  title: computed(() => product?.value?.name ?? "Products"),
  ogTitle: computed(() => product?.value?.name ?? "Products"),
  description: 'Produkte von Print4Future',
  ogDescription: 'Produkte von Print4Future',
  ogImage: `${baseUrl}/image.png`,
})

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: "Produkt nicht gefunden" });
}
</script>