<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import router from './router';
import Footer from './components/Footer.vue';

</script>

<template>
  <Navbar />
  <div class="mx-5">
    <RouterView :key="router.currentRoute.value.fullPath" />
  </div>
<Footer />
</template>

<style scoped>
</style>
