<template>
  <!-- <main></main> -->
  <main class="md:flex container mx-auto px-4">
    <div class="h-10 w-full bg-red-400 lg:bg-yellow-400"></div>
    <div class="h-10 w-full bg-blue-400"></div>
    <div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
      <div>
        <span
          class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg"
        >
          <svg
            class="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <!-- ... -->
          </svg>
        </span>
      </div>
    </div>
    <p>{{ $t('greetings') }}</p>

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
      <h2 class="text-xl font-bold mb-4">{{ $t('productListTitle') }}</h2>
      <div
        v-for="(perk, perkIndex) in myProducts.slice(-3).reverse()"
        :key="perkIndex"
        class="mb-4"
      >
        <div class="bg-white dark:bg-black rounded-lg p-6 ring-1 ring-slate-900/5 shadow-xl">
          <h3 class="text-lg font-semibold">{{ perk.Title }}</h3>
          <p>{{ perk.productDescription }}</p>
          <img :src="perk.productImage" alt="" class="mt-4" style="max-width: 100%" />
        </div>
      </div>
    </div>
    <div v-else>
      <p>{{ $t('noProductsMessage') }}</p>
    </div>
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

  // Array for the perks
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

  // Putting the perks from the array into localstorage, slicing and reversing them so the newest ones get displayed
  const getSelectedItems = ref([]);
  const getSelectedItemsFromLocalstorage = () => {
    getSelectedItems.value = JSON.parse(localStorage.getItem('items')) || [];
    getSelectedItems.value.reverse();
    getSelectedItems.value = getSelectedItems.value.slice(0, 3).reverse();
    console.log('array from localstorage', getSelectedItems.value);
  };
  getSelectedItemsFromLocalstorage();

  // onMounted(() => {
  //   sortByProducts();
  // });
</script>
