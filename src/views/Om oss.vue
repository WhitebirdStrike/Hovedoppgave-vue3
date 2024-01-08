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
