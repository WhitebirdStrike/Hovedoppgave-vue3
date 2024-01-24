<template>
  <!-- <main></main> -->
  <main class="container mx-auto px-4 s">
    <!-- <pre>{{ myProducts[0] }}</pre> -->
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
        npm
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

      <button
        @click="closeModal()"
        type="button"
        class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
      >
        {{ $t('myProductSite.myProductSiteButton') }}
      </button>
      <button
        @click="openToast(modalData)"
        type="button"
        class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
      >
        {{ $t('myProductSite.myProductSiteButton1') }}
      </button>
    </div>
    <!-- ToastIsOpen -->
    <div v-if="ToastIsOpen" class="toast toast-end">
      <div class="alert alert-success">
        <span>{{ $t('myProductSite.myProductSiteToastButton') }}</span>
      </div>
    </div>
  </main>
</template>

<script setup>
  import { onMounted, ref } from 'vue';

  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();

  // Imported pictures for the array
  import HopePerk from '@/assets/pictures/IconPerks_hope.webp';
  import ResiliencePerk from '@/assets/pictures/IconPerks_resilience.webp';
  import AdrenalinePerk from '@/assets/pictures/IconPerks_adrenaline.webp';
  import SprintBurstPerk from '@/assets/pictures/IconPerks_sprintBurst.webp';
  import OffTheRecordPerk from '@/assets/pictures/IconPerks_offTheRecord.webp';

  // Array for the perks
  const myProducts = ref([
    {
      Title: t('perks.hope.perkname'),
      productDescription: t('perks.hope.perkDescription'),
      productImage: HopePerk,
      shortDescription: t('perks.hope.perkShortDescription'),
    },
    {
      Title: t('perks.Resilience.perkname'),
      productDescription: t('perks.Resilience.perkDescription'),
      productImage: ResiliencePerk,
      shortDescription: t('perks.Resilience.perkShortDescription'),
    },
    {
      Title: t('perks.Adrenaline.perkname'),
      productDescription: t('perks.Adrenaline.perkDescription'),
      productImage: AdrenalinePerk,
      shortDescription: t('perks.Adrenaline.perkShortDescription'),
    },
    {
      Title: t('perks.Sprint Burst.perkname'),
      productDescription: t('perks.Sprint Burst.perkDescription'),
      productImage: SprintBurstPerk,
      shortDescription: t('perks.Sprint Burst.perkShortDescription'),
    },
    {
      Title: t('perks.Off The Record.perkname'),
      productDescription: t('perks.Off The Record.perkDescription'),
      productImage: OffTheRecordPerk,
      shortDescription: t('perks.Off The Record.perkShortDescription'),
    },
  ]);

  // Code for opening and closing the modal
  const modalIsOpen = ref(false);

  const modalData = ref([]);
  const openModal = (ProductData) => {
    modalData.value = ProductData;
    modalIsOpen.value = true;
  };

  const closeModal = () => {
    modalData.value = [];
    modalIsOpen.value = false;
  };

  // Toast for confirmation of bought product
  const ToastIsOpen = ref(false);

  const openToast = (selectedItem) => {
    // Retrieve existing items from localStorage
    const existingItemsJSON = localStorage.getItem('items');

    // Check if the array already exists in localStorage
    const itemsArray = existingItemsJSON ? JSON.parse(existingItemsJSON) : [];

    // Push the new selectedItem object into the array
    itemsArray.push(selectedItem);

    // Store the updated array back in localStorage
    localStorage.setItem('items', JSON.stringify(itemsArray));

    // Set the value of ToastIsOpen to true
    ToastIsOpen.value = true;

    // Use setTimeout to close the toast after 5 seconds
    setTimeout(() => {
      ToastIsOpen.value = false;
    }, 5000);
  };

  const sortByProducts = () => {
    myProducts.value.sort((a, b) => {
      const productNameA = a.Title.toUpperCase();
      const productNameB = b.Title.toUpperCase();
      if (productNameA < productNameB) {
        return -1;
      }
      if (productNameA < productNameB) {
        return 1;
      }
      return 0;
    });
  };

  onMounted(() => {
    sortByProducts();
  });
</script>
