<template>
  <div>
    <LandingHero />
    <LandingAbout />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const baseUrl = config.public.siteUrl
useSeoMeta({
  title: 'Print4Future',
  ogTitle: 'Print4Future',
  description: 'Print4Future ist ein Schülerfirma der HA25B der einjährigen Berufsfachschule Wirtschaft mit den Schwerpunkten Handel und IT an den Berufsbildenden Schulen I Lüneburg.',
  ogDescription: 'Print4Future ist ein Schülerfirma der HA25B der einjährigen Berufsfachschule Wirtschaft mit den Schwerpunkten Handel und IT an den Berufsbildenden Schulen I Lüneburg.',
  ogImage: `${baseUrl}/image.png`,
})
</script>
