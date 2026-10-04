<template>
    <section
      ref="sectionRef"
      class="relative py-20 lg:py-28 bg-[rgb(var(--bg))]"
    >
      <div class="container-page">
  
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
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
              Gallery
            </div>
            <h2
              ref="headingRef"
              class="font-display font-extrabold
                     text-[clamp(1.5rem,3vw,2.25rem)] leading-tight
                     tracking-[-0.025em] text-[rgb(var(--text))]"
            >
              A look inside<br />
              <span class="text-leaf-500">{{ estate.name }}.</span>
            </h2>
          </div>
          <div
            class="text-[rgb(var(--text-muted))] text-[0.88rem] font-medium"
          >
            {{ estate.gallery.length }} photos
          </div>
        </div>
  
        <!-- Grid: 1 large + thumbnails -->
        <div
          ref="gridRef"
          class="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5"
        >
          <!-- Main image -->
          <button
            type="button"
            class="lg:col-span-8 relative rounded-2xl overflow-hidden
                   aspect-[16/10] group
                   border border-[rgb(var(--border)/0.08)]"
            @click="openLightbox(activeIndex)"
          >
            <img
              :src="estate.gallery[activeIndex]"
              :alt="`${estate.name} photo ${activeIndex + 1}`"
              class="absolute inset-0 w-full h-full object-cover
                     transition-transform duration-700
                     group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div
              class="absolute top-4 right-4
                     grid place-items-center w-10 h-10 rounded-full
                     bg-white/15 backdrop-blur-md border border-white/25
                     text-white
                     opacity-0 group-hover:opacity-100
                     transition-all duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2.4"
                   stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.3-4.3M11 8v6M8 11h6"/>
              </svg>
            </div>
          </button>
  
          <!-- Thumbnails -->
          <div class="lg:col-span-4 grid grid-cols-3 lg:grid-cols-2 gap-4 lg:gap-5">
            <button
              v-for="(img, i) in estate.gallery.slice(0, 5)"
              :key="i"
              type="button"
              class="relative rounded-xl overflow-hidden
                     aspect-square
                     border-2 transition-all duration-300"
              :class="activeIndex === i
                ? 'border-leaf-500'
                : 'border-transparent hover:border-leaf-500/40'"
              @click="activeIndex = i"
            >
              <img
                :src="img"
                :alt="`${estate.name} thumbnail ${i + 1}`"
                loading="lazy"
                class="absolute inset-0 w-full h-full object-cover"
              />
              <div
                v-if="i === 4 && estate.gallery.length > 5"
                class="absolute inset-0
                       bg-black/60 backdrop-blur-sm
                       grid place-items-center
                       text-white font-display font-bold text-[1.15rem]"
              >
                +{{ estate.gallery.length - 4 }}
              </div>
            </button>
          </div>
        </div>
      </div>
  
      <!-- ============ LIGHTBOX ============ -->
      <Teleport to="body">
        <Transition
          enter-active-class="transition-opacity duration-300"
          enter-from-class="opacity-0"
          leave-active-class="transition-opacity duration-300"
          leave-to-class="opacity-0"
        >
          <div
            v-if="lightboxOpen"
            class="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm
                   flex items-center justify-center p-4 lg:p-8"
            @click.self="closeLightbox"
          >
            <!-- Close button -->
            <button
              type="button"
              class="absolute top-4 right-4 lg:top-6 lg:right-6
                     grid place-items-center w-11 h-11 rounded-full
                     bg-white/10 backdrop-blur-md border border-white/20
                     text-white
                     hover:bg-white/20"
              @click="closeLightbox"
              aria-label="Close"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2.4"
                   stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 6 6 18M6 6l12 12"/>
              </svg>
            </button>
  
            <!-- Prev / Next -->
            <button
              type="button"
              class="absolute left-4 lg:left-6 top-1/2 -translate-y-1/2
                     grid place-items-center w-12 h-12 rounded-full
                     bg-white/10 backdrop-blur-md border border-white/20
                     text-white
                     hover:bg-white/20"
              @click="prev"
              aria-label="Previous"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2.4"
                   stroke-linecap="round" stroke-linejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
            <button
              type="button"
              class="absolute right-4 lg:right-6 top-1/2 -translate-y-1/2
                     grid place-items-center w-12 h-12 rounded-full
                     bg-white/10 backdrop-blur-md border border-white/20
                     text-white
                     hover:bg-white/20"
              @click="next"
              aria-label="Next"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2.4"
                   stroke-linecap="round" stroke-linejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
  
            <!-- Image -->
            <div
              class="relative max-w-6xl w-full max-h-full
                     flex items-center justify-center"
            >
              <img
                :src="estate.gallery[lightboxIndex]"
                :alt="`${estate.name} photo ${lightboxIndex + 1}`"
                class="max-w-full max-h-[85vh] object-contain rounded-xl"
              />
              <div
                class="absolute -bottom-12 left-1/2 -translate-x-1/2
                       text-white/70 text-[0.85rem] font-medium"
              >
                {{ lightboxIndex + 1 }} / {{ estate.gallery.length }}
              </div>
            </div>
          </div>
        </Transition>
      </Teleport>
    </section>
  </template>
  
  <script setup lang="ts">
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import type { Estate } from '~/data/estates'
  
  gsap.registerPlugin(ScrollTrigger)
  
  const props = defineProps<{ estate: Estate }>()
  
  const activeIndex  = ref(0)
  const lightboxOpen = ref(false)
  const lightboxIndex = ref(0)
  
  const openLightbox = (i: number) => {
    lightboxIndex.value = i
    lightboxOpen.value = true
    document.body.style.overflow = 'hidden'
  }
  
  const closeLightbox = () => {
    lightboxOpen.value = false
    document.body.style.overflow = ''
  }
  
  const prev = () => {
    lightboxIndex.value = (lightboxIndex.value - 1 + props.estate.gallery.length) % props.estate.gallery.length
  }
  const next = () => {
    lightboxIndex.value = (lightboxIndex.value + 1) % props.estate.gallery.length
  }
  
  /* Keyboard controls */
  const onKey = (e: KeyboardEvent) => {
    if (!lightboxOpen.value) return
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
  }
  
  onMounted(() => {
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = ''
  })
  
  onBeforeUnmount(() => {
    document.removeEventListener('keydown', onKey)
    document.body.style.overflow = ''
  })
  
  /* GSAP */
  const sectionRef = ref<HTMLElement | null>(null)
  const eyebrowRef = ref<HTMLElement | null>(null)
  const headingRef = ref<HTMLElement | null>(null)
  const gridRef    = ref<HTMLElement | null>(null)
  
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
      gsap.from(gridRef.value, {
        y: 50, autoAlpha: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.value, start: 'top 82%' },
      })
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => ctx?.revert())
  </script>