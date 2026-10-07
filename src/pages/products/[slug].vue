<template>
    <div v-if="product">
      <SingleProductHero :product="product" />
      <SingleProductMain :product="product" />
      <SingleProductPricing :product="product" />
      <SingleProductQuality :product="product" />
      <SingleProductShipping :product="product" />
      <SingleProductRelated :product="product" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { productsData } from '~/data/products'
  
  const route = useRoute()
  const product = computed(() =>
    productsData.find((p) => p.slug === route.params.slug)
  )
  
  if (!product.value) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Product not found',
      fatal: true,
    })
  }
  
  useHead(() => ({
    title: `${product.value!.name} — GreenField Agri Estates`,
    meta: [
      {
        name: 'description',
        content: product.value!.shortDescription,
      },
    ],
  }))
  </script>