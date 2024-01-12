<template>
  <p>
    This website is made for displaying good survivor perks, and "selling them". They will have
    information about what they do. This website was made so that people could see perks that is
    worth getting.
  </p>
  <div class="fixed top-5 right-5 max-w-xs pt-20">
    <div role="alert" class="alert alert-info">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="stroke-current shrink-0 w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <span>New software update available.</span>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, ref, computed } from 'vue';
</script>
