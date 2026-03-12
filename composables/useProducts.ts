import { computed } from 'vue';
import productsData from '@/data/products.json';
import { useLocale } from '@/composables/useLocale';
import { getLocalizedText, type LocalizedText } from '@/utils/localized';

interface ProductRecord {
  name: string | LocalizedText;
  slug: string;
  description: string | LocalizedText;
  image: string;
  alt?: string;
}

interface CategoryRecord {
  slug: string;
  category: string | LocalizedText;
  products: ProductRecord[];
}

export interface Product {
  name: string;
  slug: string;
  description: string;
  image: string;
  alt: string;
  category: string;
  categorySlug: string;
}

export interface ProductCategory {
  slug: string;
  category: string;
  products: Product[];
}

export function useProducts() {
  const { locale } = useLocale();

  const categories = computed<ProductCategory[]>(() =>
    (productsData as CategoryRecord[]).map((category) => {
      const localizedCategory = getLocalizedText(category.category, locale.value);

      return {
        slug: category.slug,
        category: localizedCategory,
        products: category.products.map((product) => ({
          name: getLocalizedText(product.name, locale.value),
          slug: product.slug,
          description: getLocalizedText(product.description, locale.value),
          image: product.image,
          alt: product.alt ?? getLocalizedText(product.name, locale.value),
          category: localizedCategory,
          categorySlug: category.slug,
        })),
      };
    }),
  );

  const allProducts = computed(() => categories.value.flatMap((category) => category.products));

  const getCategoryBySlug = (slug: string) =>
    categories.value.find((category) => category.slug === slug);

  const getProductBySlug = (slug: string) =>
    allProducts.value.find((product) => product.slug === slug);

  return {
    categories,
    allProducts,
    getCategoryBySlug,
    getProductBySlug,
  };
}