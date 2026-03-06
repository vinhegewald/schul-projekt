<template>
  <div v-if="product" class="mt-[120px] w-full flex flex-col items-center px-6">
    <div
      class="max-w-4xl w-full bg-[#DFDAD1] p-8 rounded-2xl border border-[#C1BBB1]"
    >
      <h1 class="text-4xl font-bold mb-6">{{ product.name }}</h1>

      <div v-if="product.image" class="mb-6">
        <img
          :src="product.image"
          :alt="displayAlt"
          class="w-full h-auto rounded-xl shadow"
        />
      </div>

      <p class="text-neutral-600 mb-3">
        {{ t.category }}: <b>{{ displayCategory }}</b>
      </p>

      <p class="text-lg leading-7 mb-6">{{ displayDescription }}</p>

      <button
        @click="navigateBack"
        class="bg-[#c9c4bb] hover:bg-[#d3cec5] transition-all rounded-md border border-[#b8b3aa] px-4 py-2"
      >
        {{ t.back }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import productsData from "@/data/products.json";
import { useLanguage } from "@/composables/useLanguage";

const router = useRouter();
const route = useRoute();
const { currentLang } = useLanguage();

const translations = {
  de: { category: "Kategorie", back: "Zurück" },
  en: { category: "Category", back: "Back" },
};

const t = computed(() => translations[currentLang.value]);

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

const allProducts = (productsData as Category[]).flatMap((cat) =>
  cat.products.map((p) => ({
    ...p,
    category: cat.category,
    categoryEn: cat.categoryEn,
  })),
);

const product = computed(() =>
  allProducts.find((p) => p.slug === route.params.slug),
);

const displayDescription = computed(() =>
  product.value
    ? currentLang.value === "en"
      ? product.value.descriptionEn
      : product.value.description
    : "",
);

const displayAlt = computed(() =>
  product.value
    ? currentLang.value === "en"
      ? product.value.altEn
      : product.value.alt
    : "",
);

const displayCategory = computed(() =>
  product.value
    ? currentLang.value === "en"
      ? product.value.categoryEn
      : product.value.category
    : "",
);

function navigateBack() {
  router.back();
}

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage:
      currentLang.value === "en"
        ? "Product not found"
        : "Produkt nicht gefunden",
  });
}
</script>
