<template>
    <section
      ref="sectionRef"
      class="relative py-20 lg:py-28 bg-[rgb(var(--bg))]"
    >
      <div class="container-page">
  
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
  
          <!-- LEFT: Heading + description -->
          <div class="lg:col-span-5 lg:sticky lg:top-28">
            <div
              ref="eyebrowRef"
              class="inline-flex items-center gap-2.5 mb-5
                     px-3.5 py-1.5 rounded-full
                     bg-leaf-500/10 border border-leaf-500/20
                     text-leaf-600 dark:text-leaf-400
                     text-[0.78rem] font-semibold tracking-wider uppercase"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-leaf-500" />
              Logistics & Access
            </div>
            <h2
              ref="headingRef"
              class="font-display font-extrabold
                     text-[clamp(1.5rem,3vw,2.25rem)] leading-tight
                     tracking-[-0.025em] text-[rgb(var(--text))] mb-5"
            >
              How produce gets<br />
              <span class="text-leaf-500">from field to port.</span>
            </h2>
            <p
              ref="descRef"
              class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed"
            >
              Every estate is strategically located for efficient export. Our
              logistics team handles documentation, customs, and cold-chain when
              required.
            </p>
          </div>
  
          <!-- RIGHT: Logistics grid -->
          <div class="lg:col-span-7">
            <div
              ref="gridRef"
              class="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              <div
                v-for="(item, i) in items"
                :key="item.label"
                :ref="(el) => { if (el) cardRefs[i] = el as HTMLElement }"
                class="logistics-card rounded-2xl p-6
                       bg-[rgb(var(--surface))]
                       border border-[rgb(var(--border)/0.08)]
                       transition-all duration-500
                       hover:border-leaf-500/25
                       hover:-translate-y-1"
              >
                <div
                  class="grid place-items-center w-11 h-11 rounded-xl mb-5
                         bg-leaf-500/10 text-leaf-600 dark:text-leaf-400"
                  v-html="item.icon"
                />
                <div class="text-[0.72rem] uppercase tracking-wider
                            font-bold text-[rgb(var(--text-muted))] mb-1.5">
                  {{ item.label }}
                </div>
                <div class="font-display font-bold text-[rgb(var(--text))]
                            text-[1.05rem] leading-snug mb-1">
                  {{ item.value }}
                </div>
                <div v-if="item.detail"
                     class="text-[rgb(var(--text-muted))] text-[0.85rem]">
                  {{ item.detail }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import type { Estate } from '~/data/estates'
  
  gsap.registerPlugin(ScrollTrigger)
  
  const props = defineProps<{ estate: Estate }>()
  
  const icons = {
    ship: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 21h20M5 21V10l7-5 7 5v11M12 10v11M9 13h6"/></svg>`,
    road: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14M8 12h8M10 8h4M10 16h4"/></svg>`,
    city: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/></svg>`,
    truck: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 17h4V5H2v12h3M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h3"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>`,
  }
  
  const items = computed(() => [
    { label: 'Nearest Port',    value: props.estate.logistics.nearestPort,   detail: props.estate.logistics.distanceToPort + ' away', icon: icons.ship },
    { label: 'Road Access',     value: props.estate.logistics.roadAccess,    detail: 'Year-round, all-weather', icon: icons.road },
    { label: 'Nearest City',    value: props.estate.logistics.nearestCity,   detail: 'For supplies & logistics', icon: icons.city },
    { label: 'Transport',       value: 'Own fleet + partners',               detail: 'Cold-chain available', icon: icons.truck },
  ])
  
  const sectionRef = ref<HTMLElement | null>(null)
  const eyebrowRef = ref<HTMLElement | null>(null)
  const headingRef = ref<HTMLElement | null>(null)
  const descRef    = ref<HTMLElement | null>(null)
  const gridRef    = ref<HTMLElement | null>(null)
  const cardRefs: HTMLElement[] = []
  
  let ctx: gsap.Context | null = null
  
  onMounted(async () => {
    await nextTick()
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
  
    ctx = gsap.context(() => {
      gsap.from(eyebrowRef.value, {
        y: 20, autoAlpha: 0, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: eyebrowRef.value, start: 'top 88%' },
      })
      gsap.from(headingRef.value, {
        y: 40, autoAlpha: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.value, start: 'top 85%' },
      })
      gsap.from(descRef.value, {
        y: 24, autoAlpha: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: descRef.value, start: 'top 88%' },
      })
  
      const cards = cardRefs.filter(Boolean)
      if (cards.length) {
        gsap.from(cards, {
          y: 30, autoAlpha: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.value, start: 'top 84%' },
        })
      }
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => ctx?.revert())
  </script>