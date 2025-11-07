<template>
  <div class="min-h-screen">
    <GenericSidebar />

    <slot />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "DefaultLayout",
});
</script>
