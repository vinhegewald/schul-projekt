<template>
  <section
    class="relative h-[600px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
    style="background-image: url('/images/background-hero.png')"
  >
    <div class="relative z-10 flex flex-col items-center gap-10">
      <h1
        class="text-white text-3xl md:text-7xl lg:text-8xl font-bold text-center px-4"
      >
        Print 4 Future
      </h1>
      <a
        href="/products"
        class="border-2 border-white mt-5 text-white px-9 py-4 text-xl rounded-md font-medium hover:bg-white hover:text-black transition-colors"
      >
        Alle Produkte
      </a>
    </div>

    <p
      class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm z-10"
    >
      Ein Schuelerunternehmen der BBS1 Lueneburg
    </p>
  </section>
</template>

<script setup lang="ts">
defineOptions({
  name: "LandingHero",
});
</script>
