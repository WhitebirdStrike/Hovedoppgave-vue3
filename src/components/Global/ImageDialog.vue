<template>
  <div>
    <img
      v-for="(image, index) in images"
      :key="index"
      :src="image"
      alt="Preview"
      @click="openModal(index)"
    />

    <Modal v-if="isModalOpen" :imageSource="modalImage" @close="closeModal" />
  </div>
</template>

<script setup></script>
