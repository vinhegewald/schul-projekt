<template>
  <footer class="bg-gray-900 text-white py-12 mt-16">
    <div class="max-w-6xl mx-auto px-6">
      <div class="relative flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h3 class="font-bold text-xl">Print 4 Future</h3>
          <p class="text-gray-400 text-sm mt-2">
            {{ content.footer.schoolCompany }}
          </p>
        </div>

        <div class="flex gap-8 md:absolute md:left-1/2 md:-translate-x-1/2">
          <NuxtLink to="/impressum" class="text-gray-400 hover:text-white transition">
            {{ content.footer.imprint }}
          </NuxtLink>
          <NuxtLink to="/datenschutz" class="text-gray-400 hover:text-white transition">
            {{ content.footer.privacy }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { useSiteContent } from '@/composables/useSiteContent';

defineOptions({
  name: 'LandingFooter',
});

const { content } = useSiteContent();
</script>

