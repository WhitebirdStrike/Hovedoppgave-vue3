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

</script>