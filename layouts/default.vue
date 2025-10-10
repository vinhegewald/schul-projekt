<template>
  <div class="min-h-screen">
    <GenericNavbar />

    <slot />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "DefaultLayout",
});
</script>
