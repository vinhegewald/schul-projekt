import { computed } from 'vue';
import { siteContent } from '@/data/siteContent';
import { useLocale } from '@/composables/useLocale';

export function useSiteContent() {
  const { locale } = useLocale();

  const content = computed(() => siteContent[locale.value]);

  return {
    content,
  };
}