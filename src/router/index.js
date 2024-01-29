import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProductView from '../views/ProductSite.vue';
import MinSideView from '../views/Min side.vue';
import OmOssView from '../views/Om oss.vue';
import Page404 from '../components/Global/Page404.vue';

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
      component: ProductView,
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
    {
      path: '/:pathName(.*)',
      name: 'Page404',
      component: Page404,
    },
  ],
});

export default router;
