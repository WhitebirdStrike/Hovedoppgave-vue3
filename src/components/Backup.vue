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
        <!-- Modal for delete confirmation -->
        <div v-if="deleteConfirmationModalVisible">
      <div class="modal-overlay" @click="closeDeleteConfirmation"></div>
      <div class="modal">
        <p>Are you sure you want to remove the product?</p>
        <button @click="confirmDelete">Yes</button>
        <button @click="closeDeleteConfirmation">No</button>
      </div>
    </div>
      </tbody>
    </table>
  </main>
</template>

const deleteConfirmationModalVisible = ref(false);
let itemIndexToDelete = null;

const openDeleteConfirmation = (index) => {
  itemIndexToDelete = index;
  deleteConfirmationModalVisible.value = true;
};

const confirmDelete = () => {
  if (itemIndexToDelete !== null) {
    deleteItem(itemIndexToDelete);
    closeDeleteConfirmation();
  }
};

const closeDeleteConfirmation = () => {
  deleteConfirmationModalVisible.value = false;
  itemIndexToDelete = null;
};
<td><button @click="deleteItem(perkIndex)">Delete</button></td>

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
          <td>
            <button class="btn" @click="isShowing = !isShowing">Delete</button>
            <dialog id="my_modal_1" class="modal">
              <div class="modal-box">
                <h3 class="font-bold text-lg">Hello!</h3>
                <p class="py-4">Press ESC key or click the button below to close</p>
                <div class="modal-action">
                  <form method="dialog">
                    <!-- if there is a button in form, it will close the modal -->
                    <button class="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </td>
        </tr>

        <!-- Modal for delete confirmation -->
      </tbody>
    </table>
    <div class="h-20 w-full bg-red-400 p-4" v-if="isShowing">
      <button @click="deleteItem(perkIndex)">Delete</button>
      <button class="btn" @click="closeModal">Cancel</button>
    </div>
  </main>
</template>

<script setup>
  import { computed, ref, onMounted } from 'vue';

  const getSelectedItems = ref([]);
  const formattedDate = ref('');
  const searchInput = ref('');

  const isShowing = ref(false);

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

  const deleteConfirmationModalVisible = ref(false);
  let itemIndexToDelete = null;

  const openDeleteConfirmation = (index) => {
    itemIndexToDelete = index;
    deleteConfirmationModalVisible.value = true;
  };

  const confirmDelete = () => {
    if (itemIndexToDelete !== null) {
      deleteItem(itemIndexToDelete);
      closeDeleteConfirmation();
    }
  };

  const closeDeleteConfirmation = () => {
    deleteConfirmationModalVisible.value = false;
    itemIndexToDelete = null;
  };
  const closeModal = () => {
    state.modalVisible.value = false;
  };
</script>
<button type="button" class="bg-indigo-500 ..." disabled>
  <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
    <!-- ... -->
  </svg>
  Processing...
</button>
<h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
  Writes Upside-Down
</h3>
<p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
  The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even
  works in outer space.
</p>

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
    console.log('array from localstorage', getSelectedItems.value);
  };

  getSelectedItemsFromLocalstorage();

  // onMounted(() => {
  //   sortByProducts();
  // });
</script>
