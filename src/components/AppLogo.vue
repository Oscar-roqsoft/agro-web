<template>
  <NuxtLink
    to="/"
    class="group flex items-center shrink-0"
    aria-label="Chrismek Technology Home"
  >
    <img
      src="/favicon1.png"
      alt="Chrismek Technology"
      class="h-[80px] w-auto object-contain transition-transform duration-300
             group-hover:scale-[1.03]"
      width="160"
      height="60"
    />
  </NuxtLink>
</template>

<script setup>
defineProps({
  compact: {
    type: Boolean,
    default: false
  }
})
</script>