import { computed, watch } from 'vue';
import type { Locale } from '@/utils/localized';

export function useLocale() {
  const localeCookie = useCookie<Locale>('locale', {
    default: () => 'de',
    sameSite: 'lax',
  });

  const locale = useState<Locale>('locale', () => localeCookie.value ?? 'de');

  watch(
    locale,
    (value) => {
      localeCookie.value = value;
    },
    { immediate: true },
  );

  const isGerman = computed(() => locale.value === 'de');

  const setLocale = (value: Locale) => {
    locale.value = value;
  };

  const toggleLocale = () => {
    setLocale(isGerman.value ? 'en' : 'de');
  };

  return {
    locale,
    isGerman,
    setLocale,
    toggleLocale,
  };
}