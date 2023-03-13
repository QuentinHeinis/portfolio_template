import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Lenis from '@studio-freight/lenis'

const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    direction: 'vertical', // vertical, horizontal
    gestureDirection: 'vertical', // vertical, horizontal, both
    smooth: true,
    mouseMultiplier: 1.2,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
})



function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

AOS.init()
AOS.refresh()




const app = createApp(App)

app.use(router)

app.mount('#app')
