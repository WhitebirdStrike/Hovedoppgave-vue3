<template>
  <main class="px-10">
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
    <div v-if="myProducts.length > 0" class="mt-8">
      <h2 class="text-xl font-bold mb-4">{{ $t('myDashboardSite.myDashboardSiteHeadline') }}</h2>
      <div
        v-for="(perk, perkIndex) in myProducts.slice(-3).reverse()"
        :key="perkIndex"
        class="mb-4"
      >
        <div class="bg-black dark:bg-black rounded-lg p-6 ring-1 ring-slate-900/5 shadow-xl">
          <h3 class="text-lg font-semibold">{{ perk.Title }}</h3>
          <p>{{ perk.productDescription }}</p>
          <img :src="perk.productImage" alt="" class="mt-4" style="max-width: 100%" />
          <button @click="openBuyModal(perk)" class="btn mt-4 bg-indigo-500">
            {{ $t('myDashboardSite.myDashboardSiteButton') }}
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <p>{{ $t('noProductsMessage') }}</p>
    </div>

    <!-- <div v-for="(perk, perkIndex) in myProducts.slice(-3).reverse()" :key="perkIndex" class="mb-4">
      <div class="bg-white dark:bg-black rounded-lg p-6 ring-1 ring-slate-900/5 shadow-x1">
        <button @click="openBuyModal" class="btn mt-4"></button>
      </div>
    </div> -->

    <dialog :open="buyModalVisible" class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Confirm Purchase</h3>
        <div class="modal-action">
          <form method="dialog">
            <button
              class="btn inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
              @click="confirmPurchase(perkData)"
            >
              Confirm
            </button>
            <button
              class="btn inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white sm:ml-3 sm:w-auto"
              @click="closeBuyModal"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </dialog>
  </main>
</template>

<script setup>
  import { ref } from 'vue';
  // import { usei18n } from 'vue-i18n';
  // const { t } = usei18n();
  // data = objects, arrays, strings, numbers, booleans, and null values.

  // Imports for the perks
  import HopePerk from '@/assets/pictures/IconPerks_hope.webp';
  import ResiliencePerk from '@/assets/pictures/IconPerks_resilience.webp';
  import AdrenalinePerk from '@/assets/pictures/IconPerks_adrenaline.webp';
  import SprintBurstPerk from '@/assets/pictures/IconPerks_sprintBurst.webp';
  import OffTheRecordPerk from '@/assets/pictures/IconPerks_offTheRecord.webp';

  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();

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

  // Putting the perks from the array into localstorage, slicing and reversing them so the newest ones get displayed
  const getSelectedItems = ref([]);
  const getSelectedItemsFromLocalstorage = () => {
    getSelectedItems.value = JSON.parse(localStorage.getItem('items')) || [];
    getSelectedItems.value.reverse();
    getSelectedItems.value = getSelectedItems.value.slice(0, 3).reverse();
  };
  getSelectedItemsFromLocalstorage();

  const buyModalVisible = ref(false);

  const perkData = ref({});

  const openBuyModal = (perk) => {
    buyModalVisible.value = true;
    perkData.value = perk;
  };

  const confirmPurchase = (selectedItem) => {
    // Retrieve existing items from localStorage
    const existingItemsJSON = localStorage.getItem('items');

    // Check if the array already exists in localStorage
    const itemsArray = existingItemsJSON ? JSON.parse(existingItemsJSON) : [];

    // Push the new selectedItem object into the array
    itemsArray.push(selectedItem);

    // Store the updated array back in localStorage
    localStorage.setItem('items', JSON.stringify(itemsArray));

    closeBuyModal();
  };

  const closeBuyModal = () => {
    buyModalVisible.value = false;
  };

  // onMounted(() => {
  //   sortByProducts();
  // });
</script>
