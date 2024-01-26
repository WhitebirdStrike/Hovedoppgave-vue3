<div
  class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
  role="menu"
  aria-orientation="vertical"
  aria-labelledby="user-menu-button"
  tabindex="-1"
>
<!-- Active: "bg-gray-100", Not Active: "" -->
<a
  href="#"
  class="block px-4 py-2 text-sm text-gray-700"
  role="menuitem"
  tabindex="-1"
  id="user-menu-item-0"
  >Your Profile</a
>
<a
  href="#"
  class="block px-4 py-2 text-sm text-gray-700"
  role="menuitem"
  tabindex="-1"
  id="user-menu-item-1"
  >Settings</a
>
<a
  href="#"
  class="block px-4 py-2 text-sm text-gray-700"
  role="menuitem"
  tabindex="-1"
  id="user-menu-item-2"
  >Sign out</a
>
</div>

<footer class="footer p-10 bg-neutral text-neutral-content bottom-0 absolute right-0 h-16">

<nav>
      <header class="footer-title">Company</header>
      <a class="link link-hover">About us</a>
      <a class="link link-hover">Contact</a>
      <a class="link link-hover">Jobs</a>
      <a class="link link-hover">Press kit</a>
    </nav>
    <nav>
      <header class="footer-title">Legal</header>
      <a class="link link-hover">Terms of use</a>
      <a class="link link-hover">Privacy policy</a>
      <a class="link link-hover">Cookie policy</a>
    </nav>
    <nav>
      <header class="footer-title">Services</header>
      <a class="link link-hover">Branding</a>
      <a class="link link-hover">Design</a>
      <a class="link link-hover">Marketing</a>
      <a class="link link-hover">Advertisement</a>
    </nav>

    <template>
  <div class="flex flex-col min-h-screen"></div>
  <footer
    class="footer p-10 bg-neutral text-neutral-content bottom-0 absolute right-0 mt-auto"
  ></footer>
</template>

<div v-for="(product, productIndex) in myProducts" :key="productIndex" class="flex">
      <div class="card w-96 bg-base-100 shadow-x1" style="border: solid hotpink 2px">
        <img :src="product.productImage" alt="" />
        <div class="card-body">
          <h2 class="card-title">{{ product.Title }}</h2>
          <div class="card-actions justify-end"></div>
        </div>
      </div>
    </div>
    <span class="absolute -inset-1.5"></span>
    <button @click="closeModal() ">Close</button>

    <svg
                class="h-6 w-6 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
              // onMounted(() => {
  //   // sortByProducts();
  //   getSelectedItemsFromLocalstorage();
  // });

  // const existingProducts = JSON.parse(localStorage.getItem('boughtProducts')) || [];
  // let day;
  // switch (new Date().getDay()) {
  //   case 0:
  //     day = 'Sunday';
  //     break;
  //   case 1:
  //     day = 'Monday';
  //     break;
  //   case 2:
  //     day = 'Tuesday';
  //     break;
  //   case 3:
  //     day = 'Wednesday';
  //     break;
  //   case 4:
  //     day = 'Thursday';
  //     break;
  //   case 5:
  //     day = 'Friday';
  //     break;
  //   case 6:
  //     day = 'Saturday';
  //     break;
  // }
  // document.getElementById('date').innerHTML = 'Today is' + day;

  // const getSelectedItems = computed(() => {
  //   return JSON.parse(localStorage.getItem('items'));
  // });

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
      <div
        v-for="(product, productIndex) in sortByProducts"
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

  <script setup>
  // imports
  import { computed, ref, onMounted } from 'vue';

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

  const getSelectedItems = ref([]);
  const formattedDate = ref('');
  const searchInput = ref('');



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




  /* XXXXX Search Bar XXXXX */
  const itemsFiltered = computed(() => {
    const searchTerm = searchInput.value.toLowerCase();
    return getSelectedItems.value.filter((item) => item.Title.toLowerCase().includes(searchTerm));
  });

  const getSelectedItemsFromLocalstorage = () => {
    getSelectedItems.value = JSON.parse(localStorage.getItem('items'));
  };
  // current date and time (updates when you refresh the site)

  const deleteItem = (index) => {
    //Remove the item at the specified index from the array
    getSelectedItems.value.splice(index, 1);

    // Update the local storage
    localStorage.setItem('items', JSON.stringify(getSelectedItems.value));
  };
  
</script>

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
  </main>
</template>


<script setup>
  import { computed, ref, onMounted } from 'vue';

  const getSelectedItems = ref([]);
  const formattedDate = ref('');
  const searchInput = ref('');

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

  const itemsFiltered = computed(() => {
    const searchTerm = searchInput.value.toLowerCase();
    return getSelectedItems.value.filter((item) => item.Title.toLowerCase().includes(searchTerm));
  });

  const getSelectedItemsFromLocalstorage = () => {
    getSelectedItems.value = JSON.parse(localStorage.getItem('items')) || [];
  };

  const deleteItem = (index) => {
    getSelectedItems.value.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(getSelectedItems.value));
  };

  onMounted(() => {
    updateFormattedDate();
    getSelectedItemsFromLocalstorage();
  });
</script>

<template>
  <div v-for="item in itemsArray" :key="item.name">
    <p>{{ item.name }}</p>
  </div>
  <div>
    <input v-model="searchTerm" placeholder="Enter search term" />
    <ul>
      <li v-for="item in filteredItems" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
  <div>
    <ul>
      <li v-for="(itemTest, index) in items" :key="index">
        {{ itemTest }}
        <button @click="deleteItemTest(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>
<script setup>
  import { onMounted, ref, computed } from 'vue';
  // array for items
  const itemsArray = ref([
    { name: 'Edvard', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 },
  ]);
  // Sort name by alphabet
  const sortByName = () => {
    itemsArray.value.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      return 0;
    });
  };

  onMounted(() => {
    sortByName();
  });

  // Sample array of objects
  const items = ref([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    // ... more items
  ]);

  // Input model
  const searchTerm = ref('');

  // Computed function to filter items based on searchTerm
  const filteredItems = computed(() => {
    const term = searchTerm.value.toLowerCase();
    return items.value.filter((item) => item.name.toLowerCase().includes(term));
  });

  const itemTest = ref(['Item 1', 'Item 2', 'Item 3']);

  const deleteItemTest = (index) => {
    console.log();
    itemTest.value.splice(index, 1);
  };
</script>

  <!-- class="footer footer-center p-10 container mx-auto px-4" -->
  <!-- <footer class="footer p-10 bg-neutral text-neutral-content "></footer> -->
  <footer class="footer footer-center p-10 container mx-auto px-4 bg-neutral mt-auto"></footer>