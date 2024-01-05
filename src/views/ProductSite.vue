<template>
  <!-- <main></main> -->
  <main class="container mx-auto px-4 s">
    <div class="md:mt-10">Hallo dette er en side</div>

    <button
      class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
    >
      Save Changes
    </button>
    <span class="relative flex h-3 w-3">
      <span
        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"
      ></span>
      <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
    </span>

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
        Close
      </button>
      <button
        @click="openToast(modalData)"
        type="button"
        class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
      >
        Buy
      </button>
    </div>
    <!-- ToastIsOpen -->
    <div v-if="ToastIsOpen" class="toast toast-end">
      <div class="alert alert-success">
        <span>Product bought</span>
      </div>
    </div>
  </main>
</template>

<script setup>
  import { onMounted, ref } from 'vue';

  import HopePerk from '@/assets/pictures/IconPerks_hope.webp';
  import ResiliencePerk from '@/assets/pictures/IconPerks_resilience.webp';
  import AdrenalinePerk from '@/assets/pictures/IconPerks_adrenaline.webp';
  import SprintBurstPerk from '@/assets/pictures/IconPerks_sprintBurst.webp';
  import OffTheRecordPerk from '@/assets/pictures/IconPerks_offTheRecord.webp';

  const myProducts = ref([
    {
      Title: 'Hope',
      productDescription:
        'Hope is a perk that gives you 7% haste status effect when the exit gates are open. This perk is really good because of how much faster you get with it and the fact that some slower killers cant catch you if you use it',
      productImage: HopePerk,
    },
    {
      Title: 'Resilience',
      productDescription:
        'This perk gives you a 9% boost to everything exept haste if you are injured. This perk is just great by the fact that you will be injured at some point in the match',
      productImage: ResiliencePerk,
    },
    {
      Title: 'Adrenaline',
      productDescription:
        'Adrenaline is a perk that gives you one healthstate and sprint for 150% for 5 seconds when the exit gates are powered. The reason for this being so powerfull is simply because it heals you and makes you get away if the killer is chasing you. If you are carried while the effect goes off it makes it so that it activates when you get unhooked which basicly grants you a free escape',
      productImage: AdrenalinePerk,
    },
    {
      Title: 'Sprint Burst',
      productDescription:
        'Sprint Burst is a perk that makes you run at 150% of your normal running speed when you start running and makes you exhausted for 40 sec. It is the best exhaustion perk in the whole game because it can be used everywhere and in so many situations.',
      productImage: SprintBurstPerk,
    },
    {
      Title: 'Off The Record',
      productDescription:
        'Off The Record is the best anti tunneling perk in the game. When you get unhooked or unhook yourself you get 80 seconds of no grunts of pain, killer not being able to see you with any kind of aurareading, and you have endurance. The endurance will be removed if you do a conspicious action though, which basicly boils down to actions that progress the game or improves your survival. One wierd trivia is that it does not get turned off by Any Means Nessesary, even though that would be a thing to improve your survival',
      productImage: OffTheRecordPerk,
    },
  ]);

  const modalIsOpen = ref(false);

  const modalData = ref([]);
  const openModal = (ProductData) => {
    console.log('hallo', ProductData);
    modalData.value = ProductData;
    modalIsOpen.value = true;
  };

  const closeModal = () => {
    modalData.value = [];
    modalIsOpen.value = false;
  };

  const ToastIsOpen = ref(false);
  const toastData = ref([]);

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
  const closeToast = () => {
    toastData.value = [];
    toastIsOpen.value = false;
  };
  const pushToBoughtProducts = (product) => {
    // Hent alle eksisterende produkter fra localstorage eller ett tomt array om det ikke er noen.
    const existingProducts = JSON.parse(localStorage.getItem('boughtProducts')) || [];

    // Legg det nye produktet til arrayet
    existingProducts.push(product);

    // Lagre det oppdaterte produktet til Localstorage
    localStorage.setItem('boughtProducts', JSON.stringify(existingProducts));
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
