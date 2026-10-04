<template>
    <section
      ref="sectionRef"
      class="relative -mt-8 lg:-mt-12 z-20 px-4 lg:px-6"
    >
      <div
        class="container-page
               rounded-2xl
               bg-[rgb(var(--surface))]
               border border-[rgb(var(--border)/0.08)]
               shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)]"
      >
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6
                    divide-x divide-y md:divide-y-0 divide-[rgb(var(--border)/0.08)]">
          <div
            v-for="(fact, i) in facts"
            :key="fact.label"
            :ref="(el) => { if (el) itemRefs[i] = el as HTMLElement }"
            class="p-5 lg:p-6 text-center"
          >
            <div
              class="grid place-items-center w-10 h-10 rounded-xl mx-auto mb-3
                     bg-leaf-500/10 text-leaf-600 dark:text-leaf-400"
              v-html="fact.icon"
            />
            <div
              class="font-display font-extrabold
                     text-[clamp(1.15rem,1.8vw,1.5rem)] leading-none
                     text-[rgb(var(--text))] mb-1.5 tabular-nums"
            >
              {{ fact.value }}
            </div>
            <div
              class="text-[rgb(var(--text-muted))] text-[0.68rem]
                     uppercase tracking-wider font-semibold leading-tight"
            >
              {{ fact.label }}
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
    ruler: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 8.7 8.7 21.3c-.4.4-1 .4-1.4 0L2.7 16.7c-.4-.4-.4-1 0-1.4L15.3 2.7c.4-.4 1-.4 1.4 0l4.6 4.6c.4.4.4 1 0 1.4Z"/><path d="m7.5 10.5 2 2M10.5 7.5l2 2M13.5 4.5l2 2M4.5 13.5l2 2"/></svg>`,
    calendar: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="3"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`,
    users: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    drop: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>`,
    mountain: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>`,
    seedling: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/></svg>`,
  }
  
  const facts = computed(() => [
    { label: 'Estate Size',    value: `${props.estate.size} ha`,          icon: icons.ruler },
    { label: 'Year Planted',   value: props.estate.planted,               icon: icons.calendar },
    { label: 'Partner Farmers',value: `${props.estate.farmers}`,          icon: icons.users },
    { label: 'Annual Rainfall',value: props.estate.rainfall,              icon: icons.drop },
    { label: 'Elevation',      value: props.estate.elevation,             icon: icons.mountain },
    { label: 'Soil Type',      value: props.estate.soilType,              icon: icons.seedling },
  ])
  
  const sectionRef = ref<HTMLElement | null>(null)
  const itemRefs: HTMLElement[] = []
  
  let ctx: gsap.Context | null = null
  
  onMounted(async () => {
    await nextTick()
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
  
    ctx = gsap.context(() => {
      const items = itemRefs.filter(Boolean)
      if (items.length) {
        gsap.from(items, {
          y: 30, autoAlpha: 0, duration: 0.7, stagger: 0.06, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.value, start: 'top 85%' },
        })
      }
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => ctx?.revert())
  </script>