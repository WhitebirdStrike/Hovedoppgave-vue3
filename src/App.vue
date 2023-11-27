<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>
<script setup>
  import { RouterLink, RouterView } from 'vue-router';

  import Navbar from '@/components/Global/Navbar.vue';
  import Footer from '@/components/Global/Footer.vue';
</script>
