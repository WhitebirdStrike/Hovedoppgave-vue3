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
          <td>{{ perk.shortDescription }}</td>
          <td><img :src="perk.productImage" alt="" style="object-fit: cover" /></td>
          <td>
            <button
              class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              @click="openDeleteConfirmation(perkIndex, perk)"
            >
              Delete
            </button>
            <button
              class="btn inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white sm:ml-3 sm:w-auto mx-4"
              @click="moreInfoModal(perk)"
            >
              More info
            </button>
            <dialog :open="deleteConfirmationModalVisible" class="modal">
              <div class="modal-box">
                <h3 class="font-bold text-lg">{{ morePerkInfo.Title }}</h3>
                <p class="py-4">Press ESC key or click the button below to close</p>
                <div class="modal-action">
                  <form method="dialog">
                    <button
                      class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      @click="confirmDelete"
                    >
                      Delete
                    </button>
                    <button
                      class="btn inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white sm:ml-3 sm:w-auto"
                      @click="closeDialog"
                    >
                      Cancel
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
            <dialog :open="moreInfoModalVisible" class="modal">
              <div class="modal-box">
                <h3 class="font-bold text-lg">{{ morePerkInfo.Title }}</h3>
                <pre>{{ morePerkInfo.productDescription }}</pre>
                <button @click="closeDialog()">Close</button>
              </div>
            </dialog>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="h-20 w-full bg-red-400 p-4" v-if="isShowing">
      <button class="" @click="deleteItem(perkIndex)">Delete</button>
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

  // Getting the products bought through localstorage - The Data
  const getSelectedItemsFromLocalstorage = () => {
    getSelectedItems.value = JSON.parse(localStorage.getItem('items')) || [];
  };

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

  //Code for current date and time
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

  // Code for alphabetically setting up the perks
  const itemsFiltered = computed(() => {
    const searchTerm = searchInput.value.toLowerCase();
    return getSelectedItems.value.filter((item) => item.Title);
  });

  // Code for deleting perks
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
  const morePerkInfo = ref('');

  // Code for opening the modal for deletion of perks or closing the modal
  const openDeleteConfirmation = (index, moreInfo) => {
    itemIndexToDelete = index;
    morePerkInfo.value = moreInfo;
    deleteConfirmationModalVisible.value = true;
  };

  const confirmDelete = () => {
    if (itemIndexToDelete !== null) {
      deleteItem(itemIndexToDelete);
      closeDialog();
    }
  };

  const closeModal = () => {
    state.modalVisible.value = false;
  };

  const moreInfoModalVisible = ref(false);

  const moreInfoModal = (moreInfo) => {
    moreInfoModalVisible.value = true;
    morePerkInfo.value = moreInfo;
    console.log('dsff');
  };

  // Close the Dialog and Reset / Clean the data
  const closeDialog = () => {
    morePerkInfo.value = '';
    itemIndexToDelete = null;
    moreInfoModalVisible.value = false;
    deleteConfirmationModalVisible.value = false;
  };
</script>
