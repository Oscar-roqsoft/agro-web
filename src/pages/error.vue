<!-- error.vue (root) -->
<template>
    <div class="min-h-screen flex items-center justify-center
                bg-[rgb(var(--bg))] px-6">
      <div class="text-center max-w-lg">
        <div class="font-display font-extrabold text-leaf-500
                    text-[clamp(4rem,12vw,8rem)] leading-none mb-6">
          {{ error?.statusCode || 404 }}
        </div>
        <h1 class="font-display font-bold text-[rgb(var(--text))]
                   text-[1.75rem] mb-4">
          {{ error?.statusCode === 404 ? 'Page not found' : 'Something went wrong' }}
        </h1>
        <p class="text-[rgb(var(--text-muted))] mb-8">
          {{ error?.statusMessage || 'The page you are looking for doesn\'t exist.' }}
        </p>
        <NuxtLink to="/" class="btn btn-primary !px-6 !py-3.5">
          Back to Home
        </NuxtLink>
      </div>
    </div>
  </template>