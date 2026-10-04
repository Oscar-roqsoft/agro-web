<template>
    <section
      ref="sectionRef"
      class="relative py-20 lg:py-28 bg-[rgb(var(--bg-alt))]"
    >
      <div class="container-page">
  
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <div
              ref="eyebrowRef"
              class="inline-flex items-center gap-2.5 mb-4
                     px-3.5 py-1.5 rounded-full
                     bg-leaf-500/10 border border-leaf-500/20
                     text-leaf-600 dark:text-leaf-400
                     text-[0.78rem] font-semibold tracking-wider uppercase"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-leaf-500" />
              Explore More
            </div>
            <h2
              ref="headingRef"
              class="font-display font-extrabold
                     text-[clamp(1.5rem,3vw,2.25rem)] leading-tight
                     tracking-[-0.025em] text-[rgb(var(--text))]"
            >
              Other estates<br />
              <span class="text-leaf-500">you might like.</span>
            </h2>
          </div>
          <NuxtLink
            to="/plantations"
            class="inline-flex items-center gap-2
                   text-leaf-600 dark:text-leaf-400
                   font-semibold text-[0.95rem]
                   hover:gap-3 transition-all duration-200"
          >
            View all estates
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2.4"
                 stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </NuxtLink>
        </div>
  
        <!-- Related grid -->
        <div
          ref="gridRef"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          <NuxtLink
            v-for="(rel, i) in related"
            :key="rel.slug"
            :to="`/plantations/${rel.slug}`"
            :ref="(el) => { if (el) cardRefs[i] = el as HTMLElement }"
            class="related-card group relative overflow-hidden rounded-2xl
                   aspect-[4/3]
                   border border-[rgb(var(--border)/0.08)]
                   transition-all duration-500
                   hover:border-leaf-500/30
                   hover:shadow-[0_25px_50px_-20px_rgba(46,125,50,0.3)]"
          >
            <!-- Image -->
            <img
              :src="rel.image"
              :alt="rel.name"
              loading="lazy"
              class="absolute inset-0 w-full h-full object-cover
                     transition-transform duration-[900ms] ease-[cubic-bezier(0.2,0.9,0.3,1)]
                     group-hover:scale-[1.08]"
            />
  
            <!-- Overlay -->
            <div
              class="absolute inset-0
                     bg-gradient-to-t from-black/85 via-black/30 to-transparent"
            />
  
            <!-- Content -->
            <div class="absolute inset-x-0 bottom-0 p-5">
              <div class="text-white/75 text-[0.72rem] uppercase
                          tracking-wider font-semibold mb-1.5">
                {{ rel.state }}
              </div>
              <div class="font-display font-bold text-white
                          text-[1.15rem] leading-tight mb-2">
                {{ rel.name }}
              </div>
              <div class="text-white/70 text-[0.8rem]">
                {{ rel.size }} ha · {{ rel.crops.slice(0, 2).join(' · ') }}
              </div>
            </div>
  
            <!-- Arrow (on hover) -->
            <div
              class="absolute top-4 right-4
                     grid place-items-center w-10 h-10 rounded-full
                     bg-white/15 backdrop-blur-md border border-white/25
                     text-white
                     opacity-0 -translate-y-2
                     group-hover:opacity-100 group-hover:translate-y-0
                     transition-all duration-300"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2.4"
                   stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 17 17 7M7 7h10v10"/>
              </svg>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import { estatesData, type Estate } from '~/data/estates'
  
  gsap.registerPlugin(ScrollTrigger)
  
  const props = defineProps<{ estate: Estate }>()
  
  const related = computed(() => {
    const others = estatesData.filter((e) => e.slug !== props.estate.slug)
    // Prefer estates that share a crop, else just take 3
    const sharingCrop = others.filter((e) =>
      e.crops.some((c) => props.estate.crops.includes(c))
    )
    const rest = others.filter((e) => !sharingCrop.includes(e))
    return [...sharingCrop, ...rest].slice(0, 3)
  })
  
  const sectionRef = ref<HTMLElement | null>(null)
  const eyebrowRef = ref<HTMLElement | null>(null)
  const headingRef = ref<HTMLElement | null>(null)
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
  
      const cards = cardRefs.filter(Boolean)
      if (cards.length) {
        gsap.from(cards, {
          y: 40, autoAlpha: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.value, start: 'top 84%' },
        })
      }
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => ctx?.revert())
  </script>