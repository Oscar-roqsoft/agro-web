<template>
    <section class="relative py-20 lg:py-24 bg-[rgb(var(--bg))]">
      <div class="container-page">
  
        <div class="text-center max-w-xl mx-auto mb-12">
          <div
            class="inline-flex items-center gap-2.5 mb-5
                   px-3.5 py-1.5 rounded-full
                   bg-harvest-500/10 border border-harvest-500/20
                   text-harvest-700 dark:text-harvest-400
                   text-[0.78rem] font-semibold tracking-wider uppercase"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-harvest-500" />
            Quick Answers
          </div>
          <h2
            class="font-display font-extrabold
                   text-[clamp(1.5rem,3vw,2.25rem)] leading-tight
                   tracking-[-0.025em] text-[rgb(var(--text))]"
          >
            Before you write to us.
          </h2>
        </div>
  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto">
          <div
            v-for="item in items"
            :key="item.q"
            class="p-6 rounded-2xl
                   bg-[rgb(var(--surface))]
                   border border-[rgb(var(--border)/0.08)]"
          >
            <div class="font-display font-bold text-[rgb(var(--text))]
                        text-[1rem] leading-snug mb-3">
              {{ item.q }}
            </div>
            <p class="text-[rgb(var(--text-muted))] text-[0.88rem] leading-relaxed">
              {{ item.a }}
            </p>
          </div>
        </div>
  
        <div class="text-center mt-10">
          <NuxtLink
            to="/faq"
            class="group inline-flex items-center gap-2
                   text-leaf-600 dark:text-leaf-400
                   font-semibold text-[0.95rem]
                   hover:gap-3 transition-all duration-200"
          >
            See the full FAQ
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2.4"
                 stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  const items = [
    {
      q: 'How quickly will I hear back?',
      a: 'Buyers: under 24 hours. Investors: under 12 hours. Partnerships and press: under 48 hours. WhatsApp chats are usually answered within an hour.',
    },
    {
      q: 'Can I visit a plantation before buying?',
      a: 'Yes — estate tours are by appointment. Book at least one week in advance and we\'ll arrange transport, access, and a guide.',
    },
    {
      q: 'Do you ship internationally?',
      a: 'Yes. We export to Europe, Asia, and North America with full documentation, traceability, and cold-chain where required.',
    },
  ]
  </script>