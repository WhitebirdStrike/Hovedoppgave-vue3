<template>
  <div class="flex flex-col min-h-screen">
    <!-- Page content here -->
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>
<script setup>
  import { RouterLink, RouterView } from 'vue-router';

  import Navbar from '@/components/Global/Navbar.vue';
  import Footer from '@/components/Global/Footer.vue';
</script>
