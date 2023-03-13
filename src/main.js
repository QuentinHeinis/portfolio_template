import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()
AOS.refresh()


const pinia = createPinia()



const app = createApp(App)

app.use(router, pinia)

app.mount('#app')
