<template>
    <section
      id="enquire"
      ref="sectionRef"
      class="relative py-20 lg:py-28 bg-[rgb(var(--bg))]"
    >
      <div class="container-page">
  
        <div
          class="relative overflow-hidden
                 rounded-3xl
                 bg-gradient-to-br from-leaf-600 via-leaf-700 to-leaf-800
                 p-8 lg:p-14
                 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
        >
          <!-- Decorative circles -->
          <div class="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5" />
          <div class="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/5" />
  
          <!-- LEFT: Copy -->
          <div class="lg:col-span-7 relative z-10">
            <div
              class="inline-flex items-center gap-2.5 mb-5
                     px-3.5 py-1.5 rounded-full
                     bg-white/10 backdrop-blur-md border border-white/20
                     text-harvest-300
                     text-[0.78rem] font-semibold tracking-wider uppercase"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-harvest-400 animate-pulse" />
              Ready to buy?
            </div>
  
            <h2
              class="font-display font-extrabold text-white
                     text-[clamp(1.5rem,3vw,2.25rem)] leading-tight
                     tracking-[-0.025em] mb-5"
            >
              Enquire about produce from<br />
              {{ estate.name }}.
            </h2>
  
            <p class="text-white/75 text-[1.02rem] leading-relaxed mb-8 max-w-lg">
              Request samples, schedule a site visit, or discuss bulk pricing.
              Our team typically responds to buyer enquiries within 24 hours.
            </p>
  
            <!-- Quick facts -->
            <div class="grid grid-cols-3 gap-5 max-w-md">
              <div>
                <div class="text-harvest-400 font-display font-extrabold
                            text-[1.5rem] leading-none mb-1">
                  {{ estate.ready ? 'Now' : estate.harvestYear }}
                </div>
                <div class="text-white/60 text-[0.72rem] uppercase
                            tracking-wider font-semibold">
                  {{ estate.ready ? 'Available' : 'Harvest' }}
                </div>
              </div>
              <div>
                <div class="text-harvest-400 font-display font-extrabold
                            text-[1.5rem] leading-none mb-1">
                  {{ estate.size }}ha
                </div>
                <div class="text-white/60 text-[0.72rem] uppercase
                            tracking-wider font-semibold">
                  Estate Size
                </div>
              </div>
              <div>
                <div class="text-harvest-400 font-display font-extrabold
                            text-[1.5rem] leading-none mb-1">
                  {{ estate.crops.length }}
                </div>
                <div class="text-white/60 text-[0.72rem] uppercase
                            tracking-wider font-semibold">
                  Crops
                </div>
              </div>
            </div>
          </div>
  
          <!-- RIGHT: Actions -->
          <div class="lg:col-span-5 relative z-10 space-y-4">
            <NuxtLink
              :to="`/contact?type=buyer&estate=${estate.slug}`"
              class="btn w-full justify-center !px-6 !py-4 !text-[0.95rem]
                     bg-white text-leaf-700 font-semibold
                     hover:bg-white/95 hover:-translate-y-0.5
                     shadow-[0_15px_35px_-12px_rgba(0,0,0,0.4)]"
            >
              Send Buyer Enquiry
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2.4"
                   stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </NuxtLink>
  
            <a
              href="https://wa.me/0000000000"
              target="_blank"
              rel="noopener"
              class="btn w-full justify-center !px-6 !py-4 !text-[0.95rem]
                     bg-[#25D366] text-white font-semibold
                     hover:bg-[#1FB855] hover:-translate-y-0.5
                     shadow-[0_10px_24px_-8px_rgba(37,211,102,0.6)]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01a1.1 1.1 0 0 0-.8.37c-.27.3-1.05 1.03-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.5 9.5 0 0 1-4.83-1.32l-.35-.2-3.6.94.96-3.5-.23-.36a9.5 9.5 0 1 1 8.06 4.44zm8.07-17.55A11.4 11.4 0 0 0 12.04.5 11.5 11.5 0 0 0 2.1 17.85L.5 23.5l5.8-1.52a11.5 11.5 0 0 0 5.74 1.52h.01a11.5 11.5 0 0 0 8.06-19.55z"/>
              </svg>
              Chat on WhatsApp
            </a>
  
            <div
              class="flex items-center justify-center gap-2
                     text-white/60 text-[0.82rem] pt-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2"
                   stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              Typical reply: under 24 hours
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import type { Estate } from '~/data/estates'
  
  defineProps<{ estate: Estate }>()
  
  const sectionRef = ref<HTMLElement | null>(null)
  </script>