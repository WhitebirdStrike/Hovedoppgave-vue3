<template>
  <div class="dropdown dropdown-end">
    <label
      tabindex="0"
      class="btn inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white sm:ml-3 sm:w-auto mx-4"
      >{{ $t('language.Change Language') }}</label
    >
    <ul
      tabindex="0"
      class="menu dropdown-content p-2 shadow bg base-100 rounded-box bg-black w-52 mt-4 z-20 text-sm font-semibold text-white sm:ml-3 sm:w-auto mx-4"
    >
      <template v-for="language in languages">
        <li @click="($event) => setLanguage(language.code)">
          <a>{{ language.name }}</a>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  //   import norwegianFlag from '../../assets/flags/norway.png';
  //   import englishFlag from '../../assets/flags/england.png';

  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();

  //languages to select from
  const languages = ref([
    { name: t('navbar.pageEnglish'), code: 'en' },
    { name: t('navbar.pageNorwegian'), code: 'nb' },
  ]);

  // Get language from local storage
  const selectedLanguage = ref(localStorage.getItem('locale') || 'en');

  // Set language in local storage
  const setLanguage = (lang) => {
    localStorage.setItem('locale', lang);
    selectedLanguage.value = lang;
    location.reload();
  };
</script>
