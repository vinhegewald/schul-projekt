<script setup lang="ts">
defineProps<{ items: any[] }>()
</script>

<template>
  <ul>
    <li v-for="item in items" :key="item.slug">
      <NuxtLink :to="`/archiv/${item.slug}`">
        {{ item.title }} — {{ item.date }}
      </NuxtLink>
    </li>
  </ul>
</template>
