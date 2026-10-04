

<template>
  <NuxtLink to="/" class="group flex items-center gap-2.5 shrink-0" aria-label="GreenField Agri Home">
    <span
      class="grid place-items-center w-10 h-10 rounded-[11px]
             bg-gradient-to-br from-leaf-500 to-harvest-500 text-white
             shadow-[0_4px_12px_rgba(46,125,50,0.28)]
             transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105"
      aria-hidden="true"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 22V12" />
        <path d="M12 12C12 7 8 3 3 3c0 5 4 9 9 9z" />
        <path d="M12 12c0-5 4-9 9-9 0 5-4 9-9 9z" />
      </svg>
    </span>
    <span
      v-if="!compact"
      class="font-display font-extrabold text-[1.25rem] tracking-tight leading-none"
    >
      GreenField
      <span class="block text-[0.62rem] font-semibold tracking-[0.16em] uppercase text-leaf-500 -mt-0.5">
        Agri Estates
      </span>
    </span>
  </NuxtLink>
</template>


<script setup>
// defineProps<{ compact?: boolean }>()
</script>