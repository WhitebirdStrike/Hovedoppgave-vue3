<template>
  <!-- <main></main> -->
  <main class="container mx-auto px-4 s">
    <div class="md:mt-10">Hallo dette er en side</div>

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

    <!-- <pre>{{ myProducts[0] }}</pre> -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
      <div
        v-for="(product, productIndex) in myProducts"
        :key="productIndex"
        class="max-w-96 flex-1 card-container"
      >
        <div class="card bg-base-100 shadow-x1 border-hotpink-2">
          <img :src="product.productImage" alt="" class="w-full h-16 object-contain" />
          <div class="card-body p-4">
            <h2 class="text-center text-1xl">{{ product.Title }}</h2>
            <div class="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
  import { ref } from 'vue';

  import HopePerk from '@/assets/pictures/IconPerks_hope.webp';
  import ResiliencePerk from '@/assets/pictures/IconPerks_resilience.webp';
  import AdrenalinePerk from '@/assets/pictures/IconPerks_adrenaline.webp';
  import SprintBurstPerk from '@/assets/pictures/IconPerks_sprintBurst.webp';

  const myProducts = ref([
    {
      Title: 'Hope',
      productDescription: 'En sko',
      productImage: HopePerk,
    },
    {
      Title: 'Resilience',
      productDescription: 'Good perk',
      productImage: ResiliencePerk,
    },
    {
      Title: 'Adrenaline',
      productDescription: 'Description',
      productImage: AdrenalinePerk,
    },
    {
      Title: 'Sprint Burst',
      productDescription: 'Stuff',
      productImage: SprintBurstPerk,
    },
  ]);
</script>
