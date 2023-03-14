<script setup>
import { ref, onMounted } from 'vue';
import Footer from './component/layout/Footer.vue';
import Header from './component/layout/Header.vue';
// const cursor = ref(null)
// onMounted(() => {
//   cursor.value.focus()
// })
// const positionElement = (e) => {
//   const mouseY = e.clientY;
//   const mouseX = e.clientX;
//   cursor.value.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
//   console.log(mouseX, mouseY)
// }

// window.addEventListener('mousemove', positionElement)
</script>
<template>
  <Header />
  <main class="text-white min-h-screen mx-3">
    <!-- <span ref="cursor" id="cursor"></span> -->
    <RouterView />
  </main>
  <Footer />
</template>
<style>
/* #cursor {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  background: white;
  transition: all .1s;
  border-radius: 50%;
} */
</style>