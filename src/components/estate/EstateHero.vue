<template>
    <section
      ref="sectionRef"
      class="relative isolate overflow-hidden
             min-h-[80svh] lg:min-h-[78svh]
             flex flex-col justify-end
             bg-[rgb(var(--bg-alt))]"
    >
      <!-- Background image -->
      <div class="absolute inset-0 -z-10">
        <img
          :src="estate.image"
          :alt="estate.name"
          fetchpriority="high"
          class="absolute inset-0 w-full h-full object-cover"
        />
        <div
          class="absolute inset-0
                 bg-gradient-to-b from-black/60 via-black/45 to-black/90"
        />
        <div
          class="absolute inset-0
                 bg-[radial-gradient(ellipse_at_bottom_left,rgba(46,125,50,0.3),transparent_65%)]"
        />
      </div>
  
      <!-- Content -->
      <div class="container-page relative z-10 pb-12 lg:pb-16 pt-32">
  
        <!-- Breadcrumb -->
        <nav
          ref="breadcrumbRef"
          aria-label="Breadcrumb"
          class="flex flex-wrap items-center gap-2 mb-8
                 text-[0.82rem] font-medium text-white/70"
        >
          <NuxtLink to="/" class="hover:text-white">Home</NuxtLink>
          <span class="text-white/40">›</span>
          <NuxtLink to="/plantations" class="hover:text-white">Plantations</NuxtLink>
          <span class="text-white/40">›</span>
          <span class="text-white font-semibold">{{ estate.name }}</span>
        </nav>
  
        <!-- Top row: badges -->
        <div
          ref="badgesRef"
          class="flex flex-wrap items-center gap-2.5 mb-6"
        >
          <span
            class="inline-flex items-center gap-2 px-3 py-1.5
                   rounded-full text-[0.72rem] font-semibold
                   backdrop-blur-md border"
            :class="estate.ready
              ? 'bg-leaf-500/25 border-leaf-400/40 text-leaf-100'
              : 'bg-harvest-500/25 border-harvest-400/40 text-harvest-100'"
          >
            <span
              class="w-1.5 h-1.5 rounded-full"
              :class="estate.ready ? 'bg-leaf-400 animate-pulse' : 'bg-harvest-400'"
            />
            {{ estate.ready ? 'Harvesting Now' : `Harvest ${estate.harvestYear}` }}
          </span>
  
          <span
            v-for="cert in estate.certifications.slice(0, 2)"
            :key="cert"
            class="inline-flex items-center gap-1.5 px-3 py-1.5
                   rounded-full text-[0.72rem] font-semibold
                   bg-white/10 backdrop-blur-md border border-white/20
                   text-white/90"
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 6 9 17l-5-5"/>
            </svg>
            {{ cert }}
          </span>
        </div>
  
        <!-- Name -->
        <h1
          ref="headlineRef"
          class="font-display font-extrabold text-white
                 text-[clamp(2rem,5.5vw,4rem)] leading-[1.05]
                 tracking-[-0.03em] mb-4 max-w-4xl"
        >
          {{ estate.name }}
        </h1>
  
        <!-- Location + quick facts -->
        <div
          ref="metaRef"
          class="flex flex-wrap items-center gap-x-6 gap-y-3
                 text-white/80 text-[0.92rem] mb-8"
        >
          <div class="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2.2"
                 stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>{{ estate.state }}, Nigeria</span>
          </div>
          <span class="text-white/30">•</span>
          <div class="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2.2"
                 stroke-linecap="round" stroke-linejoin="round">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
            </svg>
            <span>{{ estate.size }} hectares</span>
          </div>
          <span class="text-white/30">•</span>
          <div class="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2.2"
                 stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <span>{{ estate.farmers }} partner families</span>
          </div>
        </div>
  
        <!-- CTAs -->
        <div
          ref="ctaRef"
          class="flex flex-wrap items-center gap-3.5"
        >
          <a
            href="#enquire"
            class="btn btn-primary !px-6 !py-3.5 !text-[0.95rem]"
          >
            Enquire About This Estate
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2.4"
                 stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </a>
  
          <a
            :href="`https://maps.google.com/?q=${estate.coordinates.lat},${estate.coordinates.lng}`"
            target="_blank"
            rel="noopener"
            class="btn !px-6 !py-3.5 !text-[0.95rem]
                   bg-white/10 backdrop-blur-md
                   border border-white/25 text-white
                   hover:bg-white/20 hover:border-white/40"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2.4"
                 stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            View on Map
          </a>
        </div>
      </div>
  
      <!-- Bottom: crop strip -->
      <div
        class="relative z-10 border-t border-white/10
               bg-black/30 backdrop-blur-md"
      >
        <div class="container-page py-4">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <span class="text-white/55 text-[0.72rem] uppercase
                           tracking-wider font-bold hidden sm:block">
                Crops grown:
              </span>
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="crop in estate.crops"
                  :key="crop"
                  class="px-2.5 py-1 rounded-md
                         bg-white/10 border border-white/15
                         text-white/90 text-[0.78rem] font-medium"
                >
                  {{ crop }}
                </span>
              </div>
            </div>
  
            <a
              href="#crops"
              class="inline-flex items-center gap-2
                     text-white/80 hover:text-white
                     text-[0.82rem] font-semibold
                     transition-colors"
            >
              View crop breakdown
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2.4"
                   stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 5v14M19 12l-7 7-7-7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import gsap from 'gsap'
  import { SplitText } from 'gsap/SplitText'
  import type { Estate } from '~/data/estates'
  
  const props = defineProps<{ estate: Estate }>()
  
  const sectionRef    = ref<HTMLElement | null>(null)
  const breadcrumbRef = ref<HTMLElement | null>(null)
  const badgesRef     = ref<HTMLElement | null>(null)
  const headlineRef   = ref<HTMLElement | null>(null)
  const metaRef       = ref<HTMLElement | null>(null)
  const ctaRef        = ref<HTMLElement | null>(null)
  
  let ctx: gsap.Context | null = null
  
  onMounted(async () => {
    await nextTick()
    gsap.registerPlugin(SplitText)
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      gsap.set(
        [breadcrumbRef.value, badgesRef.value, headlineRef.value,
         metaRef.value, ctaRef.value].filter(Boolean),
        { autoAlpha: 1, y: 0 }
      )
      return
    }
  
    ctx = gsap.context(() => {
      let split: SplitText | null = null
      if (headlineRef.value) {
        split = new SplitText(headlineRef.value, { type: 'lines,words', linesClass: 'overflow-hidden' })
      }
  
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.15 })
      tl.from(breadcrumbRef.value, { y: 16, autoAlpha: 0, duration: 0.5 })
        .from(badgesRef.value?.children ?? [], { y: 14, autoAlpha: 0, duration: 0.5, stagger: 0.06 }, '-=0.2')
        .from(split?.words ?? [], { y: 60, autoAlpha: 0, duration: 0.9, stagger: 0.05, ease: 'power4.out' }, '-=0.3')
        .from(metaRef.value, { y: 20, autoAlpha: 0, duration: 0.6 }, '-=0.5')
        .from(ctaRef.value?.children ?? [], { y: 20, autoAlpha: 0, duration: 0.5, stagger: 0.1 }, '-=0.4')
  
      const bg = sectionRef.value?.querySelector('img')
      if (bg) {
        gsap.fromTo(bg, { scale: 1 }, { scale: 1.06, duration: 25, ease: 'sine.inOut', yoyo: true, repeat: -1 })
      }
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => ctx?.revert())
  </script>