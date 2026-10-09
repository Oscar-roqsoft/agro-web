<template>
    <div>
      <InvestHero />
      <InvestPackages/>
      <InvestWhy/>
      <InvestHowItWorks/>
      <!-- More sections below -->
    </div>
  </template>
  
  <script setup lang="ts">
  useHead({
    title: 'Invest — Chrismek Agri Estates',
    meta: [
      {
        name: 'description',
        content:
          'Backed by real hectares, audited yields, and 15 years of operating history. Explore investment packages from $5,000 — with quarterly reports and transparent risk disclosure.',
      },
    ],
  })
  </script>