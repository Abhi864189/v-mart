import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import './style.css'
import 'vue3-carousel/dist/carousel.css'
import { createPinia } from 'pinia'
import i18n from './i18n'

loadFonts()

createApp(App).use(createPinia()).use(router).use(vuetify).use(i18n).mount('#app')
