<template>
    <footer
      ref="footerRef"
      class="relative bg-[rgb(var(--bg-alt))]
             border-t border-[rgb(var(--border)/0.1)]
             overflow-hidden"
    >
      <!-- Top accent line -->
      <div
        class="absolute top-0 left-0 right-0 h-px
               bg-gradient-to-r from-transparent via-leaf-500/40 to-transparent"
      />
  
      <div class="container-page relative pt-16 lg:pt-20 pb-8 lg:pb-10">
  
        <!-- ============ NEWSLETTER BLOCK ============ -->
        <div
          ref="newsletterRef"
          class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12
                 pb-14 lg:pb-16
                 border-b border-[rgb(var(--border)/0.1)]"
        >
          <div class="lg:col-span-6">
            <div class="inline-flex items-center gap-2.5 mb-5
                       px-3.5 py-1.5 rounded-full
                       bg-leaf-500/10 border border-leaf-500/20
                       text-leaf-600 dark:text-leaf-400
                       text-[0.72rem] font-semibold tracking-wider uppercase">
              <span class="w-1.5 h-1.5 rounded-full bg-leaf-500 animate-pulse" />
              Harvest Updates
            </div>
  
            <h2
              class="font-display font-extrabold
                     text-[clamp(1.5rem,3vw,2rem)] leading-[1.15]
                     tracking-[-0.025em] text-[rgb(var(--text))] mb-3"
            >
              Get progress reports<br />from our estates.
            </h2>
            <p class="text-[rgb(var(--text-muted))] text-[0.98rem] leading-relaxed max-w-md">
              Monthly field updates, harvest announcements, and investment
              opportunities — straight to your inbox. No spam, ever.
            </p>
          </div>
  
          <div class="lg:col-span-6 lg:pt-6">
            <form
              class="flex flex-col sm:flex-row gap-3"
              @submit.prevent="subscribe"
            >
              <div class="relative flex-1">
                <span class="absolute left-4 top-1/2 -translate-y-1/2
                             text-[rgb(var(--text-muted))] pointer-events-none">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="3"/>
                    <path d="m2 7 10 7 10-7"/>
                  </svg>
                </span>
                <input
                  v-model="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  class="w-full h-[52px] pl-12 pr-4 rounded-xl
                         bg-[rgb(var(--surface))]
                         border border-[rgb(var(--border)/0.15)]
                         text-[rgb(var(--text))] placeholder:text-[rgb(var(--text-muted))]
                         focus:outline-none focus:border-leaf-500
                         focus:ring-4 focus:ring-leaf-500/15
                         transition-all duration-200"
                />
              </div>
  
              <button
                type="submit"
                :disabled="submitting"
                class="btn !h-[52px] !px-6
                       bg-leaf-500 text-white font-semibold
                       hover:bg-leaf-600 hover:-translate-y-0.5
                       shadow-[0_8px_20px_-8px_rgba(46,125,50,0.5)]
                       disabled:opacity-70 disabled:cursor-not-allowed
                       whitespace-nowrap"
              >
                <span v-if="!submitting">Subscribe</span>
                <span v-else class="flex items-center gap-2">
                  <svg class="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" opacity="0.25"/>
                    <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                  </svg>
                  Sending...
                </span>
              </button>
            </form>
  
            <!-- Success / error state -->
            <div
              v-if="subscribeState === 'success'"
              class="flex items-center gap-2 mt-3 text-leaf-600 dark:text-leaf-400 text-[0.88rem] font-medium"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
              You're in. Watch your inbox for the first update.
            </div>
            <div
              v-if="subscribeState === 'error'"
              class="mt-3 text-red-500 text-[0.88rem] font-medium"
            >
              Something went wrong. Please try again.
            </div>
  
            <p class="text-[0.78rem] text-[rgb(var(--text-muted))] mt-4 leading-relaxed">
              By subscribing you agree to our
              <NuxtLink to="/legal/privacy" class="underline decoration-dotted hover:text-leaf-600 dark:hover:text-leaf-400">
                privacy policy
              </NuxtLink>.
              Unsubscribe anytime.
            </p>
          </div>
        </div>
  
        <!-- ============ MAIN FOOTER GRID ============ -->
        <div
          ref="mainRef"
          class="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-6
                 pt-14 lg:pt-16 pb-12 lg:pb-14"
        >
          <!-- Brand column -->
          <div class="col-span-2 md:col-span-4">
            <AppLogo />
  
            <p class="text-[rgb(var(--text-muted))] text-[0.92rem] leading-relaxed mt-5 mb-6 max-w-xs">
              A West African agribusiness growing premium palm, cocoa, rubber, and
              plantain across six estates — sustainably, transparently, and for the long term.
            </p>
  
            <!-- Contact list -->
            <ul class="space-y-3">
              <li>
                <a
                  href="tel:+2340000000000"
                  class="inline-flex items-start gap-2.5
                         text-[rgb(var(--text-muted))] text-[0.88rem]
                         hover:text-leaf-600 dark:hover:text-leaf-400
                         transition-colors duration-200"
                >
                  <span class="mt-0.5 text-leaf-500" v-html="icons.phone" />
                  <span>+234 000 000 0000</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@greenfieldagri.com"
                  class="inline-flex items-start gap-2.5
                         text-[rgb(var(--text-muted))] text-[0.88rem]
                         hover:text-leaf-600 dark:hover:text-leaf-400
                         transition-colors duration-200"
                >
                  <span class="mt-0.5 text-leaf-500" v-html="icons.mail" />
                  <span>hello@greenfieldagri.com</span>
                </a>
              </li>
              <li>
                <div class="inline-flex items-start gap-2.5
                            text-[rgb(var(--text-muted))] text-[0.88rem]">
                  <span class="mt-0.5 text-leaf-500" v-html="icons.pin" />
                  <span>12 Estate Road, Victoria Island<br />Lagos, Nigeria</span>
                </div>
              </li>
            </ul>
  
            <!-- Socials -->
            <div class="flex items-center gap-2.5 mt-6">
              <a
                v-for="s in socials"
                :key="s.name"
                :href="s.href"
                target="_blank"
                rel="noopener"
                :aria-label="s.name"
                class="grid place-items-center w-9 h-9 rounded-lg
                       bg-[rgb(var(--surface))]
                       border border-[rgb(var(--border)/0.12)]
                       text-[rgb(var(--text-muted))]
                       hover:text-white hover:bg-leaf-500 hover:border-leaf-500
                       hover:-translate-y-0.5
                       transition-all duration-300"
                v-html="s.icon"
              />
            </div>
          </div>
  
          <!-- Link columns -->
          <nav
            v-for="col in linkColumns"
            :key="col.title"
            class="md:col-span-2"
            :aria-label="col.title"
          >
            <h3
              class="font-display font-bold text-[0.78rem] uppercase tracking-wider
                     text-[rgb(var(--text))] mb-5"
            >
              {{ col.title }}
            </h3>
            <ul class="space-y-3">
              <li v-for="link in col.links" :key="link.label">
                <NuxtLink
                  :to="link.href"
                  class="text-[rgb(var(--text-muted))] text-[0.9rem]
                         hover:text-leaf-600 dark:hover:text-leaf-400
                         transition-colors duration-200
                         inline-flex items-center gap-1.5
                         hover:gap-2.5 transition-all"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
  
        <!-- ============ BOTTOM BAR ============ -->
        <div
          ref="bottomRef"
          class="pt-6 lg:pt-7
                 border-t border-[rgb(var(--border)/0.1)]
                 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div class="text-[rgb(var(--text-muted))] text-[0.82rem] text-center md:text-left">
            © {{ currentYear }} GreenField Agri Estates Ltd. All rights reserved.
            <span class="hidden md:inline mx-1.5">·</span>
            <br class="md:hidden" />
            RC 1234567 · TIN 12345678-0001
          </div>
  
          <div class="flex flex-wrap items-center gap-x-5 gap-y-2 justify-center">
            <NuxtLink
              v-for="legal in legalLinks"
              :key="legal.label"
              :to="legal.href"
              class="text-[rgb(var(--text-muted))] text-[0.82rem]
                     hover:text-leaf-600 dark:hover:text-leaf-400
                     transition-colors duration-200"
            >
              {{ legal.label }}
            </NuxtLink>
          </div>
        </div>
      </div>
  
      <!-- ============ BACK TO TOP ============ -->
      <Transition
        enter-active-class="transition-all duration-300"
        enter-from-class="opacity-0 translate-y-3"
        leave-active-class="transition-all duration-200"
        leave-to-class="opacity-0 translate-y-3"
      >
        <button
          v-show="showBackToTop"
          type="button"
          aria-label="Back to top"
          class="fixed bottom-6 right-6 z-40
                 grid place-items-center w-11 h-11 rounded-full
                 bg-leaf-500 text-white
                 shadow-[0_10px_30px_-8px_rgba(46,125,50,0.55)]
                 hover:bg-leaf-600 hover:-translate-y-1
                 transition-all duration-300"
          @click="scrollToTop"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
            <path d="m18 15-6-6-6 6"/>
          </svg>
        </button>
      </Transition>
    </footer>
  </template>
  
  <script setup lang="ts">
  /* -------- Icons -------- */
  const icons = {
    phone: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>`,
    mail: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m2 7 10 7 10-7"/></svg>`,
    pin: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    linkedin: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.13 1.45-2.13 2.94v5.66H9.35V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.21 0 22.23 0z"/></svg>`,
    x: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2h3.68l-8.04 9.19L24 22h-7.41l-5.8-7.58L4.14 22H.45l8.6-9.83L0 2h7.59l5.24 6.93L18.9 2zm-1.29 17.8h2.04L6.49 4.08H4.29L17.61 19.8z"/></svg>`,
    instagram: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
    whatsapp: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01a1.1 1.1 0 0 0-.8.37c-.27.3-1.05 1.03-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.5 9.5 0 0 1-4.83-1.32l-.35-.2-3.6.94.96-3.5-.23-.36a9.5 9.5 0 1 1 8.06 4.44zm8.07-17.55A11.4 11.4 0 0 0 12.04.5 11.5 11.5 0 0 0 2.1 17.85L.5 23.5l5.8-1.52a11.5 11.5 0 0 0 5.74 1.52h.01a11.5 11.5 0 0 0 8.06-19.55z"/></svg>`,
  }
  
  /* -------- Socials -------- */
  const socials = [
    { name: 'LinkedIn',  href: 'https://linkedin.com',  icon: icons.linkedin },
    { name: 'X',         href: 'https://x.com',         icon: icons.x },
    { name: 'Instagram', href: 'https://instagram.com', icon: icons.instagram },
    { name: 'WhatsApp',  href: 'https://wa.me/0000000000', icon: icons.whatsapp },
  ]
  
  /* -------- Link columns -------- */
  const linkColumns = [
    {
      title: 'Company',
      links: [
        { label: 'About Us',      href: '/about' },
        { label: 'Our Process',   href: '/process' },
        { label: 'Sustainability', href: '/sustainability' },
        { label: 'Careers',       href: '/careers' },
        { label: 'Contact',       href: '/contact' },
      ],
    },
    {
      title: 'Estates',
      links: [
        { label: 'Palm Plantations', href: '/plantations/palm' },
        { label: 'Cocoa Farms',      href: '/plantations/cocoa' },
        { label: 'Rubber Estates',   href: '/plantations/rubber' },
        { label: 'Plantain Belt',    href: '/plantations/plantain' },
        { label: 'All Estates',      href: '/plantations' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Harvest Calendar', href: '/harvest-calendar' },
        { label: 'Blog & News',      href: '/blog' },
        { label: 'Impact Report',    href: '/impact-report' },
        { label: 'Case Studies',     href: '/case-studies' },
        { label: 'FAQ',              href: '/faq' },
      ],
    },
    {
      title: 'Investors',
      links: [
        { label: 'Invest Overview', href: '/invest' },
        { label: 'Packages',        href: '/invest/packages' },
        { label: 'Prospectus',      href: '/legal/prospectus' },
        { label: 'ROI Calculator',  href: '/invest/calculator' },
        { label: 'Book a Call',     href: '/contact?type=investor' },
      ],
    },
  ]
  
  const legalLinks = [
    { label: 'Privacy Policy', href: '/legal/privacy' },
    { label: 'Terms of Service', href: '/legal/terms' },
    { label: 'Cookie Policy', href: '/legal/cookies' },
  ]
  
  /* -------- State -------- */
  const email = ref('')
  const submitting = ref(false)
  const subscribeState = ref<'idle' | 'success' | 'error'>('idle')
  
  const currentYear = new Date().getFullYear()
  
  const subscribe = async () => {
    submitting.value = true
    subscribeState.value = 'idle'
  
    try {
      // Replace with your real endpoint
      // await $fetch('/api/newsletter', { method: 'POST', body: { email: email.value } })
  
      await new Promise((r) => setTimeout(r, 900)) // demo
  
      subscribeState.value = 'success'
      email.value = ''
    } catch (e) {
      subscribeState.value = 'error'
    } finally {
      submitting.value = false
    }
  }
  
  /* -------- Back to top -------- */
  const showBackToTop = ref(false)
  
  const onScroll = () => (showBackToTop.value = window.scrollY > 600)
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
  })
  
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
  })
  </script>