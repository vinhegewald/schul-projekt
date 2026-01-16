<template>
  <footer class="bg-gray-900 text-white py-12 mt-16">
    <div class="max-w-6xl mx-auto px-6">
      <div class="relative flex flex-col md:flex-row justify-between items-center gap-8">
        <!-- Company Name -->
        <div>
          <h3 class="font-bold text-xl">Print 4 Future</h3>
          <p class="text-gray-400 text-sm mt-2">
            Schülerfirma der BBS1 Lüneburg
          </p>
        </div>

        <!-- Links -->
        <div class="flex gap-8 md:absolute md:left-1/2 md:-translate-x-1/2">
          <NuxtLink to="/impressum" class="text-gray-400 hover:text-white transition">
            Impressum
          </NuxtLink>
          <NuxtLink to="/datenschutz" class="text-gray-400 hover:text-white transition">
            Datenschutz
          </NuxtLink>
        </div>
      </div>

      <!-- FIXME an Team wollen/brauchen wir sowas überhaupt ?
      <!-- Copyright -->
      <!-- <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
        <p>&copy; {{ new Date().getFullYear() }} Print 4 Future. Alle Rechte vorbehalten.</p>
      </div> -->
    </div>
  </footer>
</template>

<script lang="ts" setup>
defineOptions({
  name: "LandingFooter",
});
</script>

