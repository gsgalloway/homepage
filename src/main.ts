import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueTermynalPlugin from '@lehoczky/vue-termynal'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueTermynalPlugin)

app.mount('#app')
