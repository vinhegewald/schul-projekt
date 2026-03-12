<template>
  <nav
    class="fixed top-0 left-0 w-full bg-[#E6E2DC] border-b-[#BCB5AA] h-[117px] border-2 p-4 z-[999] shadow-md"
  >
    <div class="flex items-center justify-between h-full">
      <button
        :aria-label="content.sidebar.toggleMenuAria"
        :aria-expanded="isMenuOpen"
        class="pl-10 text-black focus:outline-none z-50"
        @click="toggleMenu"
      >
        <svg
          class="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          stroke-width="2"
        >
          <path
            v-if="!isMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <NuxtLink
        to="/"
        class="absolute left-1/2 transform -translate-x-1/2"
        @click="closeMenu"
      >
        <img
          src="/images/transparent_logo.png"
          :alt="content.sidebar.logoAlt"
          class="h-[110px] w-auto"
        />
      </NuxtLink>

      <button
        :aria-label="content.sidebar.toggleLanguageAria"
        class="min-w-[78px] rounded-md border border-[#BCB5AA] px-3 py-2 text-sm font-semibold text-black transition hover:bg-[#dcd5cb]"
        @click="toggleLocale"
      >
        <span :class="locale === 'de' ? 'text-black' : 'text-neutral-500'">DE</span>
        <span class="mx-1 text-neutral-500">/</span>
        <span :class="locale === 'en' ? 'text-black' : 'text-neutral-500'">EN</span>
      </button>
    </div>

    <div
      v-if="isMenuOpen"
      class="fixed inset-0 z-40 duration-300"
      @click="toggleMenu"
    ></div>

    <div
      :class="[
        'fixed top-[117px] left-0 border-[#BCB5AA] border-l-0 border-t-0 border-2 w-[300px] h-full bg-[#E6E2DC] text-black shadow-2xl z-[1000] p-6 flex flex-col gap-4 transition-transform duration-300 ease-in-out overflow-y-auto',
        isMenuOpen
          ? 'translate-x-0 opacity-100'
          : '-translate-x-full opacity-100',
      ]"
    >
      <template v-for="item in menuItems" :key="item.id">
        <NuxtLink
          v-if="!item.children"
          :to="item.href"
          class="font-medium hover:underline"
          @click="closeMenu"
        >
          {{ item.label }}
        </NuxtLink>

        <div v-else class="flex flex-col gap-2">
          <button
            class="flex items-center justify-between font-medium hover:underline text-left"
            @click="toggleCategory(item.id)"
          >
            <span>{{ item.label }}</span>
            <svg
              :class="[
                'w-5 h-5 transition-transform duration-200',
                openCategories[item.id] ? 'rotate-180' : '',
              ]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            v-if="openCategories[item.id]"
            class="flex flex-col gap-2 pl-4 border-l-2 border-[#BCB5AA]"
          >
            <NuxtLink
              v-for="child in item.children"
              :key="child.id"
              :to="child.href"
              class="text-sm hover:underline"
              @click="closeMenu"
            >
              {{ child.label }}
            </NuxtLink>
          </div>
        </div>
      </template>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { useLocale } from '@/composables/useLocale';
import { useSiteContent } from '@/composables/useSiteContent';

defineOptions({
  name: 'GenericNavbar',
});

interface MenuItem {
  id: string;
  label: string;
  href?: string;
  children?: MenuItem[];
}

const { content } = useSiteContent();
const { locale, toggleLocale } = useLocale();

const menuItems = computed<MenuItem[]>(() => content.value.sidebar.menuItems);

const isMenuOpen = ref(false);
const openCategories = reactive<Record<string, boolean>>({});

const resetCategories = () => {
  Object.keys(openCategories).forEach((key) => {
    openCategories[key] = false;
  });
};

const closeMenu = () => {
  isMenuOpen.value = false;
  resetCategories();
};

const toggleMenu = () => {
  if (isMenuOpen.value) {
    closeMenu();
    return;
  }

  isMenuOpen.value = true;
};

const toggleCategory = (categoryId: string) => {
  openCategories[categoryId] = !openCategories[categoryId];
};
</script>
