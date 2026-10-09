<template>
    <div>
      <HomeHero />
      <HomePlantations />
      <HomeHarvestTimeline />
      <HomeSustainability />
      <HomeProcess />
      <!-- <HomeInvestment /> -->
      <HomeTestimonials />
      <HomeFaq />
    </div>
  </template>

<script setup>
  useSeoMeta({
  title: 'Chrismek Technology | Technology & Digital Solutions',

  description:
    'Chrismek Technology provides innovative technology, software and digital solutions for businesses and organizations.',

  robots: 'index, follow',

  ogTitle: 'Chrismek Technology | Technology & Digital Solutions',

  ogDescription:
    'Innovative technology, software and digital solutions for businesses and organizations.',

  ogType: 'website',

  ogUrl: 'https://www.chrismektechnology.com'
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.chrismektechnology.com/'
    }
  ]
})
</script>