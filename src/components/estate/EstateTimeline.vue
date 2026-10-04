<template>
    <section
      ref="sectionRef"
      class="relative py-20 lg:py-28 bg-[rgb(var(--bg-alt))] overflow-hidden"
    >
      <div class="container-page">
  
        <!-- Header -->
        <div class="text-center max-w-2xl mx-auto mb-14 lg:mb-20">
          <div
            ref="eyebrowRef"
            class="inline-flex items-center gap-2.5 mb-5
                   px-3.5 py-1.5 rounded-full
                   bg-harvest-500/10 border border-harvest-500/20
                   text-harvest-700 dark:text-harvest-400
                   text-[0.78rem] font-semibold tracking-wider uppercase"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-harvest-500" />
            Estate Timeline
          </div>
          <h2
            ref="headingRef"
            class="font-display font-extrabold
                   text-[clamp(1.5rem,3vw,2.25rem)] leading-tight
                   tracking-[-0.025em] text-[rgb(var(--text))] mb-4"
          >
            From bare land<br />
            <span class="text-leaf-500">to what you see today.</span>
          </h2>
          <p
            ref="descRef"
            class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed"
          >
            Every year of this estate is documented. Here's how it grew.
          </p>
        </div>
  
        <!-- Horizontal timeline scroll -->
        <div
          ref="trackWrapRef"
          class="relative
                 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
        >
          <div
            ref="trackRef"
            class="flex gap-5 lg:gap-6
                   overflow-x-auto lg:overflow-visible
                   snap-x snap-mandatory lg:snap-none
                   pb-6 lg:pb-0
                   [-ms-overflow-style:none] [scrollbar-width:none]
                   [&::-webkit-scrollbar]:hidden"
          >
            <div
              v-for="(event, i) in estate.timeline"
              :key="i"
              :ref="(el) => { if (el) cardRefs[i] = el as HTMLElement }"
              class="timeline-card group relative shrink-0 snap-start
                     w-[280px] sm:w-[320px] lg:w-[340px]
                     rounded-2xl p-6
                     bg-[rgb(var(--surface))]
                     border border-[rgb(var(--border)/0.08)]
                     transition-all duration-500
                     hover:-translate-y-1
                     hover:border-leaf-500/25
                     hover:shadow-[0_25px_50px_-20px_rgba(46,125,50,0.25)]"
            >
              <!-- Year -->
              <div
                class="font-display font-extrabold
                       text-[2.5rem] leading-none
                       tracking-[-0.03em]
                       text-leaf-500 mb-3"
              >
                {{ event.year }}
              </div>
  
              <!-- Marker line -->
              <div class="relative h-px bg-[rgb(var(--border)/0.15)] mb-5">
                <span
                  class="absolute -top-1 left-0 w-2 h-2 rounded-full
                         bg-harvest-500"
                />
              </div>
  
              <!-- Label -->
              <div
                class="inline-block px-2.5 py-1 rounded-md mb-3
                       bg-leaf-500/10 text-leaf-600 dark:text-leaf-400
                       text-[0.7rem] font-bold uppercase tracking-wider"
              >
                {{ event.label }}
              </div>
  
              <!-- Description -->
              <p class="text-[rgb(var(--text-muted))] text-[0.9rem] leading-relaxed">
                {{ event.description }}
              </p>
  
              <!-- Step number -->
              <div
                class="absolute top-5 right-5
                       font-display font-bold text-[0.75rem]
                       text-[rgb(var(--text-muted)/0.4)] tabular-nums"
              >
                {{ String(i + 1).padStart(2, '0') }}
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
  
  defineProps<{ estate: Estate }>()
  
  const sectionRef  = ref<HTMLElement | null>(null)
  const eyebrowRef  = ref<HTMLElement | null>(null)
  const headingRef  = ref<HTMLElement | null>(null)
  const descRef     = ref<HTMLElement | null>(null)
  const trackWrapRef = ref<HTMLElement | null>(null)
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
          y: 40, autoAlpha: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: trackWrapRef.value, start: 'top 82%' },
        })
      }
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => ctx?.revert())
  </script>