

<template>
  <button
    type="button"
    class="relative grid place-items-center w-[42px] h-[42px] rounded-full
           border border-[rgb(var(--border)/0.1)]
           text-[rgb(var(--text-muted))]
           hover:text-leaf-500 hover:border-leaf-500 hover:rotate-[15deg]
           transition-all duration-250"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    :title="isDark ? 'Light mode' : 'Dark mode'"
    @click="toggle"
  >
    <ClientOnly>
      <!-- Moon (shown in light mode) -->
      <svg
        v-if="!isDark"
        width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="animate-fade-in"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>

      <!-- Sun (shown in dark mode) -->
      <svg
        v-else
        width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="animate-fade-in"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    </ClientOnly>

    <!-- Fallback before hydration -->
    <template v-if="!mounted">
      <span class="sr-only">Toggle theme</span>
    </template>
  </button>
</template>


<script setup lang="ts">
const { isDark, toggle } = useTheme()

// Hydration-safe render: don't show anything until mounted
const mounted = ref(false)
onMounted(() => (mounted.value = true))
</script>