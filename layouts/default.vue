<template>
  <div class="min-h-screen flex flex-col">
    <GenericSidebar />
    <main class="flex-1 p4">
      <slot />
    </main>
    <LandingFooter />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "DefaultLayout",
});
</script>
