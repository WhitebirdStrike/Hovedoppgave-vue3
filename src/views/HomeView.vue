<template>
  <!-- <main></main> -->
  <main class="md:flex container mx-auto px-4">
    <div class="h-10 w-full bg-red-400 lg:bg-yellow-400"></div>
    <div class="h-10 w-full bg-blue-400"></div>
    <div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
      <div>
        <span
          class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg"
        >
          <svg
            class="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <!-- ... -->
          </svg>
        </span>
      </div>
    </div>
    <p>{{ $t('greetings') }}</p>

    <!-- Dark mode not enabled -->
    <html>
      <body>
        <!-- Will be white -->
        <div class="bg-white dark:bg-black">
          <!-- ... -->
        </div>
      </body>
    </html>

    <!-- Dark mode enabled -->
    <html class="dark">
      <body>
        <!-- Will be black -->
        <div class="bg-white dark:bg-black">
          <!-- ... -->
        </div>
      </body>
    </html>
    <div v-if="getSelectedItems.length > 0" class="mt-8">
      <h2 class="text-xl font-bold mb-4">{{ $t('productListTitle') }}</h2>
      <div v-for="(perk, perkIndex) in getSelectedItems" :key="perkIndex" class="mb-4">
        <div class="bg-white dark:bg-black rounded-lg p-6 ring-1 ring-slate-900/5 shadow-xl">
          <h3 class="text-lg font-semibold">{{ perk.title }}</h3>
          <p>{{ perk.productDescription }}</p>
          <img :src="perk.productImage" alt="" class="mt-4" style="max-width: 100%" />
        </div>
      </div>
    </div>
    <div v-else>
      <p>{{ $t('noProductsMessage') }}</p>
    </div>
  </main>
</template>

<script setup>
  import { ref } from 'vue';
  // import { usei18n } from 'vue-i18n';
  // const { t } = usei18n();
  // data = objects, arrays, strings, numbers, booleans, and null values.
  const getSelectedItems = ref([]);
  const getSelectedItemsFromLocalstorage = () => {
    getSelectedItems.value = JSON.parse(localStorage.getItem('items')) || [];
    getSelectedItems.value.reverse();
    getSelectedItems.value = getSelectedItems.value.slice(0, 3);
    console.log('array from localstorage', getSelectedItems.value);
  };

  getSelectedItemsFromLocalstorage();

  // onMounted(() => {
  //   sortByProducts();
  // });
</script>
