<template>
    <section
      ref="sectionRef"
      class="relative py-24 lg:py-32 bg-[rgb(var(--bg-alt))] overflow-hidden"
    >
      <!-- Ambient blobs -->
      <div
        class="absolute -top-40 -right-32 w-[420px] h-[420px] rounded-full
               bg-leaf-500/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        class="absolute -bottom-40 -left-32 w-[420px] h-[420px] rounded-full
               bg-harvest-500/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
  
      <div class="container-page relative">
  
        <!-- ============ HEADER ============ -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-14 lg:mb-20 items-end">
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
              Leadership
            </div>
  
            <h2
              ref="headingRef"
              class="font-display font-extrabold
                     text-[clamp(1.75rem,4vw,3rem)] leading-[1.1]
                     tracking-[-0.025em] text-[rgb(var(--text))]"
            >
              The people who farm<br />
              <span class="text-leaf-500">with the long view.</span>
            </h2>
          </div>
  
          <div ref="descRef" class="lg:col-span-5 lg:pb-2">
            <p class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed mb-5">
              Between them, our leadership team brings over 70 years of
              agronomy, finance, and community development experience across
              West Africa.
            </p>
            <NuxtLink
              to="/careers"
              class="group inline-flex items-center gap-2
                     text-leaf-600 dark:text-leaf-400
                     font-semibold text-[0.95rem]
                     hover:gap-3 transition-all duration-200"
            >
              View open roles
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2.4"
                   stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </NuxtLink>
          </div>
        </div>
  
        <!-- ============ FEATURED LEADER ============ -->
        <article
          ref="featuredRef"
          class="relative mb-6 lg:mb-8
                 rounded-3xl overflow-hidden
                 bg-[rgb(var(--surface))]
                 border border-[rgb(var(--border)/0.1)]
                 grid grid-cols-1 lg:grid-cols-12"
        >
          <!-- Featured photo -->
          <div class="lg:col-span-5 relative aspect-[4/5] lg:aspect-auto">
            <img
              :src="featured.photo"
              :alt="featured.name"
              loading="lazy"
              class="absolute inset-0 w-full h-full object-cover"
            />
            <div
              class="absolute inset-0
                     bg-gradient-to-t from-black/40 via-transparent to-transparent
                     lg:bg-gradient-to-r lg:from-transparent lg:to-[rgb(var(--surface)/0.15)]"
            />
  
            <!-- LinkedIn -->
            <a
              :href="featured.linkedin"
              target="_blank"
              rel="noopener"
              :aria-label="`${featured.name} on LinkedIn`"
              class="absolute top-5 right-5
                     grid place-items-center w-10 h-10 rounded-full
                     bg-white/15 backdrop-blur-md border border-white/25
                     text-white
                     hover:bg-white/25 hover:scale-105
                     transition-all duration-300"
              v-html="linkedinIcon"
            />
          </div>
  
          <!-- Featured content -->
          <div class="lg:col-span-7 p-7 lg:p-10 flex flex-col justify-center">
            <div class="flex items-center gap-2.5 mb-5">
              <span
                class="inline-flex items-center gap-2 px-3 py-1 rounded-full
                       bg-harvest-500/15 border border-harvest-500/25
                       text-harvest-700 dark:text-harvest-400
                       text-[0.72rem] font-bold tracking-wider uppercase"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-harvest-500 animate-pulse" />
                Founder
              </span>
              <span class="text-[rgb(var(--text-muted))] text-[0.82rem] font-medium">
                {{ featured.tenure }} with the company
              </span>
            </div>
  
            <h3
              class="font-display font-extrabold
                     text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.1]
                     tracking-[-0.025em] text-[rgb(var(--text))] mb-3"
            >
              {{ featured.name }}
            </h3>
  
            <div class="text-leaf-600 dark:text-leaf-400
                        font-semibold text-[1rem] mb-6">
              {{ featured.role }}
            </div>
  
            <!-- Signature quote -->
            <blockquote
              class="relative pl-5 border-l-2 border-harvest-500/40
                     text-[rgb(var(--text))] text-[1.05rem] leading-relaxed italic mb-7"
            >
              "{{ featured.quote }}"
            </blockquote>
  
            <!-- Mini facts -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6
                        border-t border-[rgb(var(--border)/0.08)]">
              <div v-for="fact in featured.facts" :key="fact.label">
                <div class="font-display font-bold text-leaf-500
                            text-[1.15rem] leading-none mb-1.5">
                  {{ fact.value }}
                </div>
                <div class="text-[rgb(var(--text-muted))] text-[0.75rem]
                            uppercase tracking-wider font-semibold">
                  {{ fact.label }}
                </div>
              </div>
            </div>
          </div>
        </article>
  
        <!-- ============ TEAM GRID ============ -->
        <div
          ref="gridRef"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          <article
            v-for="(member, i) in team"
            :key="member.name"
            :ref="(el) => { if (el) cardRefs[i] = el as HTMLElement }"
            class="team-card group relative overflow-hidden
                   rounded-2xl
                   bg-[rgb(var(--surface))]
                   border border-[rgb(var(--border)/0.08)]
                   transition-all duration-500
                   hover:-translate-y-1.5
                   hover:border-leaf-500/25
                   hover:shadow-[0_25px_50px_-20px_rgba(46,125,50,0.28)]"
          >
            <!-- Photo -->
            <div class="relative aspect-[4/5] overflow-hidden">
              <img
                :src="member.photo"
                :alt="member.name"
                loading="lazy"
                class="absolute inset-0 w-full h-full object-cover
                       transition-transform duration-[900ms] ease-[cubic-bezier(0.2,0.9,0.3,1)]
                       group-hover:scale-[1.06]"
              />
              <div
                class="absolute inset-0
                       bg-gradient-to-t from-black/70 via-black/10 to-transparent"
              />
  
              <!-- LinkedIn (top-right, appears on hover) -->
              <a
                :href="member.linkedin"
                target="_blank"
                rel="noopener"
                :aria-label="`${member.name} on LinkedIn`"
                class="absolute top-4 right-4
                       grid place-items-center w-9 h-9 rounded-full
                       bg-white/15 backdrop-blur-md border border-white/25
                       text-white
                       opacity-0 translate-y-2
                       group-hover:opacity-100 group-hover:translate-y-0
                       hover:bg-white/25 hover:scale-105
                       transition-all duration-300"
                v-html="linkedinIcon"
              />
  
              <!-- Name overlay at bottom -->
              <div class="absolute inset-x-0 bottom-0 p-5">
                <div class="text-[0.7rem] uppercase tracking-wider font-bold
                            text-harvest-400 mb-1.5">
                  {{ member.department }}
                </div>
                <h3
                  class="font-display font-bold text-white
                         text-[1.15rem] leading-tight mb-1"
                >
                  {{ member.name }}
                </h3>
                <div class="text-white/75 text-[0.85rem] leading-tight">
                  {{ member.role }}
                </div>
              </div>
            </div>
  
            <!-- Footer meta -->
            <div class="p-5 pt-4">
              <div class="flex items-center justify-between
                          text-[0.78rem] text-[rgb(var(--text-muted))]">
                <div class="flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2"
                       stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                  {{ member.tenure }}
                </div>
                <div class="flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2"
                       stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  {{ member.location }}
                </div>
              </div>
            </div>
  
            <!-- Bottom accent on hover -->
            <div
              class="absolute bottom-0 left-0 right-0 h-1 origin-left scale-x-0
                     bg-gradient-to-r from-leaf-500 to-harvest-500
                     group-hover:scale-x-100 transition-transform duration-500"
            />
          </article>
        </div>
  
        <!-- ============ JOIN THE TEAM STRIP ============ -->
        <div
          ref="joinRef"
          class="mt-14 lg:mt-20 rounded-3xl
                 bg-gradient-to-br from-leaf-600 via-leaf-700 to-leaf-800
                 relative overflow-hidden
                 p-7 lg:p-10
                 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <!-- Decorative circles -->
          <div class="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-white/[0.06]" />
          <div class="absolute -right-6 top-1/2 w-24 h-24 rounded-full bg-white/[0.06]" />
          <div class="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-white/[0.06]" />
  
          <div class="relative z-10 max-w-xl">
            <div class="text-harvest-300 text-[0.75rem] font-bold
                        uppercase tracking-[0.2em] mb-3">
              Careers at GreenField
            </div>
            <h3
              class="font-display font-extrabold text-white
                     text-[clamp(1.35rem,2.5vw,1.85rem)] leading-tight
                     tracking-[-0.02em] mb-3"
            >
              Grow your career alongside<br />crops that outlive us all.
            </h3>
            <p class="text-white/75 text-[0.95rem] leading-relaxed">
              We're hiring across agronomy, operations, finance, and community
              programs — 12 open roles across our estates.
            </p>
          </div>
  
          <div class="relative z-10 flex flex-wrap gap-3 shrink-0">
            <NuxtLink
              to="/careers"
              class="btn !px-6 !py-3.5
                     bg-white text-leaf-700 font-semibold
                     hover:bg-white/95 hover:-translate-y-0.5
                     shadow-[0_10px_24px_rgba(0,0,0,0.25)]"
            >
              See All Openings
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2.4"
                   stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </NuxtLink>
          </div>
        </div>
  
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  
  gsap.registerPlugin(ScrollTrigger)
  
  /* -------- Icons -------- */
  const linkedinIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.13 1.45-2.13 2.94v5.66H9.35V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>`
  
  /* -------- Refs -------- */
  const sectionRef   = ref<HTMLElement | null>(null)
  const eyebrowRef   = ref<HTMLElement | null>(null)
  const headingRef   = ref<HTMLElement | null>(null)
  const descRef      = ref<HTMLElement | null>(null)
  const featuredRef  = ref<HTMLElement | null>(null)
  const gridRef      = ref<HTMLElement | null>(null)
  const joinRef      = ref<HTMLElement | null>(null)
  const cardRefs: HTMLElement[] = []
  
  /* -------- Featured leader -------- */
  const featured = {
    name: 'Mrs Uche Lucy Okeke',
    role: 'Co-Founder & Managing Director',
    photo: '/about/founder3.jpeg',
    linkedin: 'https://linkedin.com',
    tenure: '8 years',
    quote:
      'Agriculture is the only business I know where patience compounds into legacy. That\'s what we\'re building here.',
    facts: [
      { value: '8 yrs', label: 'Leadership' },
      { value: '1,200+ ha', label: 'Under Management' },
      { value: '34+', label: 'People Employed' },
    ],
  }
  
  /* -------- Team members -------- */
  interface TeamMember {
    name: string
    role: string
    department: string
    photo: string
    linkedin: string
    tenure: string
    location: string
  }
  
  const team: TeamMember[] = [
    {
      name: 'Ejike Wilfred Okeke',
      role: 'Head of Operations',
      department: 'Operations',
      photo: '/about/founder2.jpeg',
      linkedin: 'https://linkedin.com',
      tenure: '7 years',
      location: 'Anambra',
    },
    {
      name: 'Uche Lucy Okeke',
      role: 'Head of Sustainability',
      department: 'Sustainability',
      photo: '/about/founder3.jpeg',
      linkedin: 'https://linkedin.com',
      tenure: '8 years',
      location: 'Anambra',
    },
    {
      name: 'Emeka Christian Okeke',
      role: 'Chief Financial Officer',
      department: 'Finance',
      photo: '/about/founder1.jpeg',
      linkedin: 'https://linkedin.com',
      tenure: '8 years',
      location: 'Lagos',
    },

    // {
    //   name: 'Tunde Bakare',
    //   role: 'Head of Sustainability',
    //   department: 'Sustainability',
    //   photo: '',
    //   linkedin: 'https://linkedin.com',
    //   tenure: '6 years',
    //   location: 'Ogun',
    // },
    // {
    //   name: 'Blessing Ekanem',
    //   role: 'Community Programs Lead',
    //   department: 'Community',
    //   photo: '',
    //   linkedin: 'https://linkedin.com',
    //   tenure: '4 years',
    //   location: 'Akwa Ibom',
    // },
    // {
    //   name: 'Ahmed Suleiman',
    //   role: 'Head of Export & Logistics',
    //   department: 'Trade',
    //   photo: '',
    //   linkedin: 'https://linkedin.com',
    //   tenure: '6 years',
    //   location: 'Lagos',
    // },
  ]
  
  /* ---------------------------------------------------------------
     GSAP
     --------------------------------------------------------------- */
  let ctx: gsap.Context | null = null
  
  onMounted(async () => {
    await nextTick()
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
    if (prefersReduced) {
      gsap.set(
        [eyebrowRef.value, headingRef.value, descRef.value,
         featuredRef.value, ...cardRefs, joinRef.value].filter(Boolean),
        { autoAlpha: 1, y: 0 }
      )
      return
    }
  
    ctx = gsap.context(() => {
      /* --- Header --- */
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
  
      /* --- Featured leader --- */
      gsap.from(featuredRef.value, {
        y: 50, autoAlpha: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: featuredRef.value, start: 'top 82%' },
      })
  
      /* --- Team grid --- */
      const cards = cardRefs.filter(Boolean)
      if (cards.length) {
        gsap.from(cards, {
          y: 40, autoAlpha: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.value, start: 'top 78%' },
        })
      }
  
      /* --- Join strip --- */
      gsap.from(joinRef.value, {
        y: 40, autoAlpha: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: joinRef.value, start: 'top 88%' },
      })
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => {
    ctx?.revert()
  })
  </script>
  
  <style scoped>
  .team-card {
    will-change: transform;
  }
  </style>