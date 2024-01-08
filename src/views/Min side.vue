<template>
  <!-- <p id="date"></p> -->
  <p>{{ searchInput }}</p>
  <div class="grid-cols-1 flex justify-end items-center pt-6 pr-6">
    <input v-model="searchInput" placeholder="Search" />
  </div>
  <main class="mt-10 container mx-auto px-4">
    <p>{{ formattedDate }}</p>
    <button @click="sortByProducts()">Sort alphabetically</button>
    <table class="table-fixed">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(perk, perkIndex) in itemsFiltered" :key="perkIndex">
          <td class="p-5">{{ perk.Title }}</td>
          <td>{{ perk.productDescription }}</td>
          <td><img :src="perk.productImage" alt="" style="object-fit: cover" /></td>
          <td><button @click="deleteItem(perkIndex)">Delete</button></td>
        </tr>
      </tbody>
    </table>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
      <div
        v-for="(product, productIndex) in myProducts"
        :key="productIndex"
        class="max-w-96 flex-1 card-container"
      >
        <div @click="openModal(product)" class="card bg-base-100 shadow-x1 border-hotpink-2">
          <img :src="product.productImage" alt="" class="w-full h-16 object-contain" />
          <div class="card-body p-4">
            <h2 class="text-center text-1xl">{{ product.Title }}</h2>
            <div class="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="modalIsOpen">
      <div
        class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
      >
        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div
              class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
            ></div>
            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">
                {{ modalData.Title }}
              </h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">{{ modalData.productDescription }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      @click="closeModal()"
      type="button"
      class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
    >
      Close
    </button>
  </main>
</template>
<script setup>
  // imports
  import { computed, ref, onMounted } from 'vue';

  const getSelectedItems = ref([]);

  const getSelectedItemsFromLocalstorage = () => {
    getSelectedItems.value = JSON.parse(localStorage.getItem('items'));
  };
  // current date and time (updates when you refresh the site)
  const formattedDate = ref('');

  onMounted(() => {
    updateFormattedDate();
    getSelectedItemsFromLocalstorage();
  });

  const updateFormattedDate = () => {
    const now = new Date();

    const day = now.getDate();
    const month = now.getMonth() + 1; // Months are zero-based
    const year = now.getFullYear();
    const hour = now.getHours();
    const minute = now.getMinutes();

    formattedDate.value = `${formatNumber(day)} ${formatNumber(month)} ${year} ${formatNumber(
      hour
    )} ${formatNumber(minute)}`;
  };

  const formatNumber = (number) => {
    return number < 10 ? `0${number}` : `${number}`;
  };
  // Sort of products alphabetically
  const sortByProducts = () => {
    getSelectedItems.value.sort((a, b) => {
      const productNameA = a.Title.toUpperCase();
      const productNameB = b.Title.toUpperCase();
      if (productNameA < productNameB) {
        return -1;
      }
      if (productNameA > productNameB) {
        return 1;
      }
      return 0;
    });
  };

  const searchInput = ref('');

  /* XXXXX Search Bar XXXXX */
  const itemsFiltered = computed(() => {
    const searchTerm = searchInput.value.toLowerCase();
    return getSelectedItems.value.filter((item) => item.Title.toLowerCase().includes(searchTerm));
  });

  const deleteItem = (index) => {
    //Remove the item at the specified index from the array
    getSelectedItems.value.splice(index, 1);

    // Update the local storage
    localStorage.setItem('items', JSON.stringify(getSelectedItems.value));
  };
  const modalIsOpen = ref(false);

  const modalData = ref([]);
  const openModal = (ProductData) => {
    console.log('hallo', ProductData);
    modalData.value = ProductData;
    modalIsOpen.value = true;
  };

  const closeModal = () => {
    modalData.value = [];
    modalIsOpen.value = false;
  };
</script>
