<template>
    <div class="min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--text))]">
      <AppNavbar />
      <main class="pt-[76px]">
        <slot />
      </main>
      <AppFooter />
    </div>
</template>