<template>
  <div class="overflow-x-auto">{{ getSelectedItem }}
  <table class="table">
  <thead>
    <tr>
      <th>
        <th>name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </th>
    </tr>
  </thead>
  <tbody>
<tr>
<th>1</th>
<td>Cy Ganderton</td>
<td>Quality Control Specialist</td>
<td>Blue</td>
</tr>

<tr>
<th>3</th>
<td>Brice Swyre</td>
<td>Tanx Accountant</td>
<td>Red</td>
</tr>
  </tbody>
</table>
</div>
</template>
<script setup>
  import { computed } from 'vue';
  const getSelectedItem = computed(() => {
    return JSON.parse(localStorage.getItem('selectedItem'));
  });
  // const existingProducts = JSON.parse(localStorage.getItem('boughtProducts')) || [];
</script>
