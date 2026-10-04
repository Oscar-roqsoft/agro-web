<template>
    <section
      id="crops"
      ref="sectionRef"
      class="relative py-20 lg:py-28 bg-[rgb(var(--bg-alt))]"
    >
      <div class="container-page">
  
        <!-- Header -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 lg:mb-16 items-end">
          <div class="lg:col-span-7">
            <div
              ref="eyebrowRef"
              class="inline-flex items-center gap-2.5 mb-5
                     px-3.5 py-1.5 rounded-full
                     bg-harvest-500/10 border border-harvest-500/20
                     text-harvest-700 dark:text-harvest-400
                     text-[0.78rem] font-semibold tracking-wider uppercase"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-harvest-500" />
              Crops Grown Here
            </div>
            <h2
              ref="headingRef"
              class="font-display font-extrabold
                     text-[clamp(1.5rem,3vw,2.25rem)] leading-tight
                     tracking-[-0.025em] text-[rgb(var(--text))]"
            >
              What we're growing<br />
              <span class="text-harvest-500">and when it's ready.</span>
            </h2>
          </div>
          <div ref="descRef" class="lg:col-span-5 lg:pb-2">
            <p class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed">
              Every crop on this estate is planted, tended, and harvested to
              certified standards. Here's the current breakdown by area and
              harvest status.
            </p>
          </div>
        </div>
  
        <!-- Crops grid -->
        <div
          ref="gridRef"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          <div
            v-for="(crop, i) in estate.cropDetails"
            :key="crop.name"
            :ref="(el) => { if (el) cardRefs[i] = el as HTMLElement }"
            class="crop-card rounded-2xl p-7
                   bg-[rgb(var(--surface))]
                   border border-[rgb(var(--border)/0.08)]
                   transition-all duration-500
                   hover:-translate-y-1
                   hover:border-leaf-500/25
                   hover:shadow-[0_25px_50px_-20px_rgba(46,125,50,0.25)]"
          >
            <!-- Status pill -->
            <div class="flex items-start justify-between mb-6">
              <div
                class="grid place-items-center w-14 h-14 rounded-xl
                       bg-leaf-500/10 text-leaf-600 dark:text-leaf-400"
                v-html="cropIcon(crop.icon)"
              />
              <span
                class="px-2.5 py-1 rounded-full
                       text-[0.68rem] font-bold uppercase tracking-wider"
                :class="statusPill(crop.status)"
              >
                {{ statusLabel(crop.status) }}
              </span>
            </div>
  
            <!-- Name -->
            <h3 class="font-display font-bold text-[rgb(var(--text))]
                       text-[1.2rem] leading-tight mb-3">
              {{ crop.name }}
            </h3>
  
            <!-- Hectares -->
            <div class="flex items-baseline gap-2 mb-5">
              <span class="font-display font-extrabold
                           text-[1.85rem] leading-none text-leaf-500">
                {{ crop.hectares }}
              </span>
              <span class="text-[rgb(var(--text-muted))] text-[0.88rem] font-medium">
                hectares
              </span>
            </div>
  
            <!-- Progress bar -->
            <div class="h-1.5 rounded-full bg-[rgb(var(--bg-alt))] overflow-hidden">
              <div
                class="h-full rounded-full origin-left
                       bg-gradient-to-r from-leaf-500 to-harvest-500
                       transition-transform duration-1000"
                :style="{
                  width: `${(crop.hectares / estate.size) * 100}%`,
                }"
              />
            </div>
            <div class="flex items-center justify-between mt-2
                        text-[rgb(var(--text-muted))] text-[0.72rem]">
              <span>{{ Math.round((crop.hectares / estate.size) * 100) }}% of estate</span>
              <span>{{ crop.hectares }} / {{ estate.size }} ha</span>
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
  
  const cropIcons = {
    palm: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V12"/><path d="M12 12C12 7 8 3 3 3c0 5 4 9 9 9z"/><path d="M12 12c0-5 4-9 9-9 0 5-4 9-9 9z"/></svg>`,
    kernel: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/></svg>`,
    default: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/></svg>`,
  }
  
  const cropIcon = (name: string) => cropIcons[name as keyof typeof cropIcons] || cropIcons.default
  
  const statusPill = (status: string) =>
    ({
      ready:   'bg-leaf-500/15 text-leaf-700 dark:text-leaf-400',
      growing: 'bg-harvest-500/15 text-harvest-700 dark:text-harvest-400',
      planted: 'bg-blue-500/15 text-blue-600 dark:text-blue-400',
    }[status] || '')
  
  const statusLabel = (status: string) =>
    ({ ready: 'Ready', growing: 'Growing', planted: 'Planted' }[status] || '')
  
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
          y: 50, autoAlpha: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.value, start: 'top 80%' },
        })
      }
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => ctx?.revert())
  </script>