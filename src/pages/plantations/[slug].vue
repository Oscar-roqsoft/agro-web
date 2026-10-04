<template>
    <div v-if="estate">
      <EstateHero :estate="estate" />
      <EstateQuickFacts :estate="estate" />
      <EstateAbout :estate="estate" />
      <EstateCrops :estate="estate" />
      <EstateGallery :estate="estate" />
      <EstateTimeline :estate="estate" />
      <EstateLogistics :estate="estate" />
      <EstateRelated :estate="estate" />
      <EstateEnquiry :estate="estate" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { estatesData } from '~/data/estates'
  
  const route = useRoute()
  const estate = computed(() =>
    estatesData.find((e) => e.slug === route.params.slug)
  )
  
  if (!estate.value) {
    throw createError({ statusCode: 404, statusMessage: 'Estate not found', fatal: true })
  }
  
  useHead(() => ({
    title: `${estate.value!.name} — GreenField Agri Estates`,
    meta: [
      {
        name: 'description',
        content: estate.value!.shortDescription,
      },
    ],
  }))
  </script>