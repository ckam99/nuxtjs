import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt 3 is the best ' }
        ],
        style: [
            { rel: "preconnect", href: "https://fonts.googleapis.com", crossorigin: true },
            { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700&display=swap" }
        ]
    },
    css: [
        '@/assets/css/app.css'
    ]
})
