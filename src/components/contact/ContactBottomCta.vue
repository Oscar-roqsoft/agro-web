<template>
    <section class="relative py-20 lg:py-24 bg-[rgb(var(--bg-alt))]">
      <div class="container-page">
        <div
          class="relative overflow-hidden
                 rounded-3xl
                 bg-gradient-to-br from-leaf-600 via-leaf-700 to-leaf-800
                 p-8 lg:p-12
                 text-center"
        >
          <!-- Decorative circles -->
          <div class="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5" />
          <div class="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/5" />
  
          <div class="relative z-10 max-w-2xl mx-auto">
            <div class="text-harvest-300 text-[0.78rem] font-bold
                        uppercase tracking-[0.2em] mb-4">
              Prefer to talk?
            </div>
            <h2
              class="font-display font-extrabold text-white
                     text-[clamp(1.5rem,3vw,2.25rem)] leading-tight
                     tracking-[-0.025em] mb-5"
            >
              Skip the form. Call us directly.
            </h2>
            <p class="text-white/75 text-[1.02rem] leading-relaxed mb-8">
              Our team is available Monday through Friday, 8am – 6pm WAT.
              For urgent buyer enquiries, WhatsApp is fastest.
            </p>
            <div class="flex flex-wrap justify-center gap-3">
              <a
                href="tel:+2340000000000"
                class="btn !px-6 !py-3.5
                       bg-white text-leaf-700 font-semibold
                       hover:bg-white/95 hover:-translate-y-0.5
                       shadow-[0_10px_24px_rgba(0,0,0,0.25)]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2.4"
                     stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/>
                </svg>
                Call +234 000 000 0000
              </a>
              <a
                href="https://wa.me/0000000000"
                target="_blank"
                rel="noopener"
                class="btn !px-6 !py-3.5
                       bg-[#25D366] text-white font-semibold
                       hover:bg-[#1FB855] hover:-translate-y-0.5
                       shadow-[0_10px_24px_-8px_rgba(37,211,102,0.6)]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01a1.1 1.1 0 0 0-.8.37c-.27.3-1.05 1.03-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.5 9.5 0 0 1-4.83-1.32l-.35-.2-3.6.94.96-3.5-.23-.36a9.5 9.5 0 1 1 8.06 4.44zm8.07-17.55A11.4 11.4 0 0 0 12.04.5 11.5 11.5 0 0 0 2.1 17.85L.5 23.5l5.8-1.52a11.5 11.5 0 0 0 5.74 1.52h.01a11.5 11.5 0 0 0 8.06-19.55z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>