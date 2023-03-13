<script setup>
import Header from './component/layout/Header.vue';
</script>
<template>
  <Header />
  <main class="text-white min-h-screen mx-3">
      <RouterView />
  </main>
</template>
