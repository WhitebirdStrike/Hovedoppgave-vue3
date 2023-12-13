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
      <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
        Writes Upside-Down
      </h3>
      <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even
        works in outer space.
      </p>
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
    <button type="button" class="bg-indigo-500 ..." disabled>
      <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
        <!-- ... -->
      </svg>
      Processing...
    </button>
  </main>
</template>

<script setup>
  // import { usei18n } from 'vue-i18n';
  // const { t } = usei18n();
  // data = objects, arrays, strings, numbers, booleans, and null values.
</script>
