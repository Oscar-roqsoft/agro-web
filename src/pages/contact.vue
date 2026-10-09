<template>
    <div>
      <ContactHero />
      <ContactIntent />
      <ContactMain />
      <ContactMap />
      <ContactMiniFaq />
      <ContactBottomCta />
    </div>
  </template>
  
  <script setup lang="ts">
  useHead({
    title: 'Contact Us — Chrismek Agri Estates',
    meta: [
      {
        name: 'description',
        content:
          'Talk to our team about produce, investment, or partnership opportunities. We reply within 24 hours — by phone, email, or WhatsApp.',
      },
    ],
  })
  </script>