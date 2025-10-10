<template>
  <nav class="border-b-[#BCB5AA] h-[117px] border-2 p-4">
    <div class="flex items-center justify-between h-full">
      <!-- Burger menu button (always visible) -->
      <button
        @click="isMenuOpen = !isMenuOpen"
        class="pl-10 text-black focus:outline-none"
        aria-label="Toggle menu"
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

      <!-- Centered logo -->
      <a href="/" class="absolute left-1/2 transform -translate-x-1/2">
        <img
          src="/images/transparent_logo.png"
          alt="Logo"
          class="h-[110px] w-auto"
        />
      </a>

      <!-- Spacer to balance the layout -->
      <div class="w-12"></div>
    </div>

    <!-- Menu (toggleable) -->
    <ul v-if="isMenuOpen" class="flex flex-col gap-4 mt-4 m-0 p-0 list-none">
      <li>
        <a href="/" class="text-white font-medium hover:underline">Home</a>
      </li>
      <li>
        <a href="/about" class="text-white font-medium hover:underline"
          >About</a
        >
      </li>
      <li>
        <a href="/contact" class="text-white font-medium hover:underline"
          >Contact</a
        >
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineOptions({
  name: "GenericNavbar",
});

const isMenuOpen = ref(false);
</script>
