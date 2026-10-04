<template>
    <section
      ref="sectionRef"
      class="relative py-20 lg:py-28 bg-[rgb(var(--bg))]"
    >
      <div class="container-page">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
  
          <!-- LEFT: About text -->
          <div class="lg:col-span-7">
            <div
              ref="eyebrowRef"
              class="inline-flex items-center gap-2.5 mb-5
                     px-3.5 py-1.5 rounded-full
                     bg-leaf-500/10 border border-leaf-500/20
                     text-leaf-600 dark:text-leaf-400
                     text-[0.78rem] font-semibold tracking-wider uppercase"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-leaf-500" />
              About This Estate
            </div>
  
            <h2
              ref="headingRef"
              class="font-display font-extrabold
                     text-[clamp(1.5rem,3vw,2.25rem)] leading-tight
                     tracking-[-0.025em] text-[rgb(var(--text))] mb-6"
            >
              The story behind<br />
              <span class="text-leaf-500">{{ estate.name }}.</span>
            </h2>
  
            <p
              ref="para1Ref"
              class="text-[rgb(var(--text-muted))] text-[1.02rem]
                     leading-relaxed mb-5"
            >
              {{ estate.longDescription }}
            </p>
  
            <p
              ref="para2Ref"
              class="text-[rgb(var(--text-muted))] text-[1.02rem]
                     leading-relaxed"
            >
              The estate operates as a hybrid model: our own agronomy team manages
              the core plantation, while 145 partner families cultivate adjacent
              plots under our outgrower program. Every harvest is aggregated,
              quality-checked, and processed at the on-site facility — ensuring
              consistent quality and fair pricing for every participant.
            </p>
  
            <!-- Certifications -->
            <div
              ref="certsRef"
              class="mt-10 pt-8 border-t border-[rgb(var(--border)/0.1)]"
            >
              <div class="text-[rgb(var(--text-muted))] text-[0.72rem]
                          uppercase tracking-wider font-bold mb-4">
                Certifications
              </div>
              <div class="flex flex-wrap gap-2.5">
                <div
                  v-for="cert in estate.certifications"
                  :key="cert"
                  class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl
                         bg-[rgb(var(--surface))]
                         border border-[rgb(var(--border)/0.12)]"
                >
                  <span class="text-leaf-500" v-html="shieldIcon" />
                  <span class="text-[rgb(var(--text))] text-[0.85rem] font-semibold">
                    {{ cert }}
                  </span>
                </div>
              </div>
            </div>
          </div>
  
          <!-- RIGHT: Highlights card -->
          <aside class="lg:col-span-5">
            <div
              ref="highlightsRef"
              class="lg:sticky lg:top-28
                     rounded-2xl p-7 lg:p-8
                     bg-gradient-to-br from-leaf-500/8 to-harvest-500/8
                     border border-leaf-500/20"
            >
              <div class="flex items-center gap-3 mb-6">
                <span
                  class="grid place-items-center w-11 h-11 rounded-xl
                         bg-leaf-500 text-white"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2"
                       stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </span>
                <div>
                  <div class="font-display font-bold text-[rgb(var(--text))]
                              text-[1.05rem] leading-tight">
                    Estate Highlights
                  </div>
                  <div class="text-[rgb(var(--text-muted))] text-[0.82rem]">
                    What sets this estate apart
                  </div>
                </div>
              </div>
  
              <ul class="space-y-4">
                <li
                  v-for="(h, i) in estate.highlights"
                  :key="i"
                  class="flex items-start gap-3"
                >
                  <span
                    class="shrink-0 grid place-items-center w-6 h-6 rounded-full mt-0.5
                           bg-leaf-500 text-white"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="3"
                         stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </span>
                  <span class="text-[rgb(var(--text))] text-[0.92rem] leading-relaxed">
                    {{ h }}
                  </span>
                </li>
              </ul>
            </div>
          </aside>
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
  
  const shieldIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>`
  
  const sectionRef    = ref<HTMLElement | null>(null)
  const eyebrowRef    = ref<HTMLElement | null>(null)
  const headingRef    = ref<HTMLElement | null>(null)
  const para1Ref      = ref<HTMLElement | null>(null)
  const para2Ref      = ref<HTMLElement | null>(null)
  const certsRef      = ref<HTMLElement | null>(null)
  const highlightsRef = ref<HTMLElement | null>(null)
  
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
      gsap.from([para1Ref.value, para2Ref.value], {
        y: 24, autoAlpha: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: para1Ref.value, start: 'top 88%' },
      })
      gsap.from(certsRef.value, {
        y: 20, autoAlpha: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: certsRef.value, start: 'top 92%' },
      })
      gsap.from(highlightsRef.value, {
        x: 30, autoAlpha: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: highlightsRef.value, start: 'top 82%' },
      })
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => ctx?.revert())
  </script>