<template>
    <div>
      <HarvestHero />
      <HarvestCalendarGrid />
      <HarvestUpcoming />
      <HarvestFaq />
      <!-- More sections below -->
    </div>
  </template>
  
  <script setup lang="ts">
  useHead({
    title: 'Harvest Calendar — Chrismek Agri Estates',
    meta: [
      {
        name: 'description',
        content:
          'Live harvest calendar showing what\'s in season now, what\'s coming up, and the full multi-year harvest schedule across our six estates in Nigeria.',
      },
    ],
  })
  </script>