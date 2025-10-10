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
        'fixed top-[117px] left-0 border-[#BCB5AA] border-l-0 border-t-0 border-2 w-[300px] h-full bg-[#E6E2DC] text-black shadow-2xl z-[1000] p-6 flex flex-col gap-6 transition-transform duration-300 ease-in-out',
        isMenuOpen
          ? 'translate-x-0 opacity-100'
          : '-translate-x-full opacity-100',
      ]"
    >
      <a href="/" class="font-medium hover:underline">Home</a>
      <a href="/about" class="font-medium hover:underline">About</a>
      <a href="/contact" class="font-medium hover:underline">Contact</a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineOptions({
  name: "GenericNavbar",
});

const isMenuOpen = ref(false);
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);
</script>
