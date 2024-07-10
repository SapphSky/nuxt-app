// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/supabase",
  ],
  app: {
    layoutTransition: {
      name: "layout",
      mode: "out-in",
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  supabase: {
    redirect: false,
    url: "https://wfhlthnoutzskcvkjsnz.supabase.co",
    key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmaGx0aG5vdXR6c2tjdmtqc256Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM4MTI3NTQsImV4cCI6MjAyOTM4ODc1NH0.tPSyxVwCJ-5Bgcb1HATyq4UkjpAarmPrRDb7AonLo3o",
  },
});
