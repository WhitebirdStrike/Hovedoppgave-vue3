<template>
  <!-- <main></main> -->
  <main class="container mx-auto px-4 s">
    <div class="md:mt-10">Hallo dette er en side</div>

    <pre>{{ myProducts }}</pre>

    <div v-for="(product, productIndex) in myProducts" :key="productIndex">
      <img :src="product.productImage" alt="" />
    </div>

    <button
      class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
    >
      Save Changes
    </button>
    <span class="relative flex h-3 w-3">
      <span
        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"
      ></span>
      <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
    </span>
    <div class="card w-96 bg-base-100 shadow-x1">
      <img />
      <div class="card-body">
        <h2 class="card-title"></h2>
        <div class="card-actions justify-end"></div>
      </div>
    </div>
  </main>
</template>

<script setup>
  import { ref } from 'vue';

  import HopePerk from '@/assets/pictures/IconPerks_hope.webp';

  const myProducts = ref([
    {
      productTitle: 'Sko',
      productDescription: 'En sko',
      productImage: HopePerk,
    },
  ]);
</script>
