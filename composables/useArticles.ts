import { computed } from 'vue';
import { useLocale } from '@/composables/useLocale';
import {
  getLocalizedArray,
  getLocalizedText,
  type LocalizedText,
  type LocalizedTextArray,
} from '@/utils/localized';

interface ArticleRecord {
  id: number;
  image: string;
  slug: string;
  title: string | LocalizedText;
  description: string | LocalizedText;
  date: string;
  excerpt: string | LocalizedText;
  content: string[] | LocalizedTextArray;
}

export function useArticles() {
  const { locale } = useLocale();

  const articleFiles = import.meta.glob('/data/articles/*.json', { eager: true });
  const rawArticles = Object.values(articleFiles).map((module) => module.default as ArticleRecord);

  const articles = computed(() =>
    rawArticles.map((article) => ({
      ...article,
      title: getLocalizedText(article.title, locale.value),
      description: getLocalizedText(article.description, locale.value),
      excerpt: getLocalizedText(article.excerpt, locale.value),
      content: getLocalizedArray(article.content, locale.value),
    })),
  );

  const getArticleBySlug = (slug: string) =>
    articles.value.find((article) => article.slug === slug);

  return { articles, getArticleBySlug };
}
