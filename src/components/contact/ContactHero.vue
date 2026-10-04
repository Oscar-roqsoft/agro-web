<template>
    <section
      ref="sectionRef"
      class="relative pt-14 lg:pt-20 pb-16 lg:pb-20
             bg-[rgb(var(--bg))] overflow-hidden"
    >
      <!-- Ambient blobs -->
      <div
        class="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full
               bg-leaf-500/6 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        class="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full
               bg-harvest-500/6 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
  
      <div class="container-page relative">
  
        <!-- ============ BREADCRUMB ============ -->
        <nav
          ref="breadcrumbRef"
          aria-label="Breadcrumb"
          class="flex items-center gap-2 mb-8
                 text-[0.82rem] font-medium
                 text-[rgb(var(--text-muted))]"
        >
          <NuxtLink
            to="/"
            class="hover:text-leaf-600 dark:hover:text-leaf-400
                   transition-colors duration-200"
          >
            Home
          </NuxtLink>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2.4"
               stroke-linecap="round" stroke-linejoin="round"
               class="text-[rgb(var(--text-muted)/0.5)]">
            <path d="m9 18 6-6-6-6"/>
          </svg>
          <span class="text-[rgb(var(--text))] font-semibold">Contact</span>
        </nav>
  
        <!-- ============ HEADER ============ -->
        <div class="max-w-2xl">
          <div
            ref="eyebrowRef"
            class="inline-flex items-center gap-2.5 mb-6
                   px-3.5 py-1.5 rounded-full
                   bg-leaf-500/10 border border-leaf-500/20
                   text-leaf-600 dark:text-leaf-400
                   text-[0.78rem] font-semibold tracking-wider uppercase"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-leaf-500 animate-pulse" />
            We reply within 24 hours
          </div>
  
          <h1
            ref="headingRef"
            class="font-display font-extrabold
                   text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.08]
                   tracking-[-0.03em] text-[rgb(var(--text))] mb-6"
          >
            Let's start a<br />
            <span class="text-leaf-500">conversation.</span>
          </h1>
  
          <p
            ref="descRef"
            class="text-[rgb(var(--text-muted))] text-[1.08rem] leading-relaxed max-w-xl"
          >
            Whether you're sourcing produce, exploring investment, or partnering
            with our outgrower program — tell us what you need and we'll route
            your message to the right person.
          </p>
  
          <!-- Quick channels -->
          <div
            ref="channelsRef"
            class="flex flex-wrap items-center gap-3 mt-8"
          >
            <a
              href="tel:+2340000000000"
              class="inline-flex items-center gap-2.5
                     px-4 py-2.5 rounded-xl
                     bg-[rgb(var(--surface))]
                     border border-[rgb(var(--border)/0.12)]
                     text-[rgb(var(--text))] text-[0.88rem] font-medium
                     hover:border-leaf-500 hover:-translate-y-0.5
                     transition-all duration-300"
            >
              <span class="text-leaf-500" v-html="icons.phone" />
              +234 000 000 0000
            </a>
            <a
              href="mailto:hello@greenfieldagri.com"
              class="inline-flex items-center gap-2.5
                     px-4 py-2.5 rounded-xl
                     bg-[rgb(var(--surface))]
                     border border-[rgb(var(--border)/0.12)]
                     text-[rgb(var(--text))] text-[0.88rem] font-medium
                     hover:border-leaf-500 hover:-translate-y-0.5
                     transition-all duration-300"
            >
              <span class="text-leaf-500" v-html="icons.mail" />
              hello@greenfieldagri.com
            </a>
            <a
              href="https://wa.me/0000000000"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2.5
                     px-4 py-2.5 rounded-xl
                     bg-leaf-500 text-white text-[0.88rem] font-semibold
                     hover:bg-leaf-600 hover:-translate-y-0.5
                     shadow-[0_8px_20px_-8px_rgba(46,125,50,0.5)]
                     transition-all duration-300"
            >
              <span v-html="icons.whatsapp" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import gsap from 'gsap'
  
  const sectionRef     = ref<HTMLElement | null>(null)
  const breadcrumbRef  = ref<HTMLElement | null>(null)
  const eyebrowRef     = ref<HTMLElement | null>(null)
  const headingRef     = ref<HTMLElement | null>(null)
  const descRef        = ref<HTMLElement | null>(null)
  const channelsRef    = ref<HTMLElement | null>(null)
  
  const icons = {
    phone: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>`,
    mail: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m2 7 10 7 10-7"/></svg>`,
    whatsapp: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01a1.1 1.1 0 0 0-.8.37c-.27.3-1.05 1.03-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.5 9.5 0 0 1-4.83-1.32l-.35-.2-3.6.94.96-3.5-.23-.36a9.5 9.5 0 1 1 8.06 4.44zm8.07-17.55A11.4 11.4 0 0 0 12.04.5 11.5 11.5 0 0 0 2.1 17.85L.5 23.5l5.8-1.52a11.5 11.5 0 0 0 5.74 1.52h.01a11.5 11.5 0 0 0 8.06-19.55z"/></svg>`,
  }
  
  let ctx: gsap.Context | null = null
  
  onMounted(async () => {
    await nextTick()
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
    if (prefersReduced) {
      gsap.set(
        [breadcrumbRef.value, eyebrowRef.value, headingRef.value, descRef.value, channelsRef.value].filter(Boolean),
        { autoAlpha: 1, y: 0 }
      )
      return
    }
  
    ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.1 })
  
      tl
        .from(breadcrumbRef.value, { y: 16, autoAlpha: 0, duration: 0.5 })
        .from(eyebrowRef.value,    { y: 20, autoAlpha: 0, duration: 0.6 }, '-=0.2')
        .from(headingRef.value,    { y: 40, autoAlpha: 0, duration: 0.9, ease: 'power4.out' }, '-=0.4')
        .from(descRef.value,       { y: 24, autoAlpha: 0, duration: 0.7 }, '-=0.5')
        .from(channelsRef.value?.children ?? [], {
          y: 16, autoAlpha: 0, duration: 0.5, stagger: 0.1,
        }, '-=0.4')
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => ctx?.revert())
  </script>