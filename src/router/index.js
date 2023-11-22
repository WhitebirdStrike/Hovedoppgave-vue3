import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Test from '../views/AboutView.vue';
import MinSideView from '../views/Min side.vue';
import OmOssView from '../views/Om oss.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/testSite',
      name: 'aboutTest',
      component: Test,
    },
    {
      path: '/minside',
      name: 'minsSide',
      component: MinSideView,
    },
    {
      path: '/omoss',
      name: 'omOss',
      component: OmOssView,
    },
  ],
});

export default router;
