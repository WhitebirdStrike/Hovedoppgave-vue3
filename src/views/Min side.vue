<template>
  <!-- <p id="date"></p> -->
  <main class="mt-10 container mx-auto px-4">
    <p>{{ formattedDate }}</p>
    <table class="table-fixed">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(perk, perkIndex) in getSelectedItems" :key="perkIndex">
          <td class="p-5">{{ perk.Title }}</td>
          <td>{{ perk.productDescription }}</td>
          <td><img :src="perk.productImage" alt="" style="object-fit: cover" /></td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
<script setup>
  import { computed, ref, onMounted } from 'vue';

  const getSelectedItems = computed(() => {
    return JSON.parse(localStorage.getItem('items'));
  });
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
  const formattedDate = ref('');

  onMounted(() => {
    updateFormattedDate();
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
</script>
