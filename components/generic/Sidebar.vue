<template>
  <nav
    class="fixed top-0 left-0 w-full bg-[#E6E2DC] border-b-[#BCB5AA] h-[117px] border-2 p-4 z-[999] shadow-md"
  >
    <div class="flex items-center justify-between h-full">
      <button
        aria-label="Toggle menu"
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

      <a href="/" class="absolute left-1/2 transform -translate-x-1/2">
        <img
          src="/images/transparent_logo.png"
          alt="Logo"
          class="h-[110px] w-auto"
        />
      </a>

      <div class="w-12"></div>
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
      <template v-for="(item, index) in menuItems" :key="index">
        <!-- Einfacher Link ohne Unterkategorien -->
        <a
          v-if="!item.children"
          :href="item.href"
          class="font-medium hover:underline"
        >
          {{ item.label }}
        </a>

        <!-- Kategorie mit Dropdown -->
        <div v-else class="flex flex-col gap-2">
          <button
            @click="toggleCategory(getCategoryId(item.label))"
            class="flex items-center justify-between font-medium hover:underline text-left"
          >
            <span>{{ item.label }}</span>
            <svg
              :class="[
                'w-5 h-5 transition-transform duration-200',
                openCategories[getCategoryId(item.label)] ? 'rotate-180' : '',
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
            v-if="openCategories[getCategoryId(item.label)]"
            class="flex flex-col gap-2 pl-4 border-l-2 border-[#BCB5AA]"
          >
            <a
              v-for="(child, childIndex) in item.children"
              :key="childIndex"
              :href="child.href"
              class="text-sm hover:underline"
            >
              {{ child.label }}
            </a>
          </div>
        </div>
      </template>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

defineOptions({
  name: "GenericNavbar",
});

interface MenuItem {
  label: string;
  href?: string;
  children?: MenuItem[];
}

interface NavbarProps {
  menuItems?: MenuItem[];
}

const props = withDefaults(defineProps<NavbarProps>(), {
  menuItems: () => [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Produkte",
      children: [
        { label: "Alle Produkte", href: "/produkte/" },
        { label: "Spiele", href: "/produkte/spiele" },
        { label: "Deko", href: "/produkte/deko" },
        { label: "Pokale", href: "/produkte/pokale" },
        { label: "Alltagshelfer", href: "/produkte/alltagshelfer" },
      ],
    },
    {
      label: "Events",
      children: [
        { label: "Summer Sale", href: "/events/summer-sale" },
        {
          label: "Wirtschafts Live Messe",
          href: "/events/wirtschafts-live-messe",
        },
      ],
    },
    {
      label: "Archiv",
      href: "/archiv",
    },
  ],
});

const isMenuOpen = ref(false);
const openCategories = reactive<Record<string, boolean>>({});

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (!isMenuOpen.value) {
    // Alle Kategorien schließen wenn Menü geschlossen wird
    Object.keys(openCategories).forEach((key) => {
      openCategories[key] = false;
    });
  }
};

const toggleCategory = (categoryId: string) => {
  openCategories[categoryId] = !openCategories[categoryId];
};

const getCategoryId = (label: string) => {
  return label.toLowerCase().replace(/\s+/g, "-");
};
</script>
