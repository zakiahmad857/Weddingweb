import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Welcome from '../views/Welcome.vue';
import LiveWedding from '../views/LiveWedding.vue';
import PreWedding from '../views/PreWedding.vue';
import BeforeEvent from '../views/BeforeEvent.vue';
import Gallery from '../views/Gallery.vue';
import Siraman from '../views/Siraman.vue';
import Pengajian from '../views/Pengajian.vue';

const routes = [
  {
    path: '/id',
    name: 'Login',
    component: Login
  },
  {
    path: '/en',
    name: 'Login-en',
    component: Login
  },
  {
    path: '/id/welcome',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/en/welcome',
    name: 'Welcome-en',
    component: Welcome
  },
  {
    path: '/id/live-wedding',
    name: 'LiveWedding',
    component: LiveWedding
  },
  {
    path: '/en/live-wedding',
    name: 'LiveWedding-en',
    component: LiveWedding
  },
  {
    path: '/id/gallery/pre-wedding',
    name: 'PreWedding',
    component: PreWedding
  },
  {
    path: '/en/gallery/pre-wedding',
    name: 'PreWedding-en',
    component: PreWedding
  },
  {
    path: '/id/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/en/gallery',
    name: 'Gallery-en',
    component: Gallery
  },
  {
    path: '/id/gallery/siraman',
    name: 'Siraman',
    component: Pengajian
  },
  {
    path: '/en/gallery/siraman',
    name: 'Siraman-en',
    component: Pengajian
  },
  {
    path: '/id/gallery/pengajian',
    name: 'Pengajian',
    component: Siraman
  },
  {
    path: '/en/gallery/pengajian',
    name: 'Pengajian-en',
    component: Siraman
  },
  {
    path: '/before-event',
    name: 'BeforeEvent',
    component: BeforeEvent
  },
  { path: '/', redirect: '/id' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// router.beforeEach((to, from, next) => {
//   const weddingDate = new Date('Sun Dec 13 2020 08:00:00 GMT+0700');

//   if (new Date(Date.now()) < weddingDate && to.fullPath !== '/before-event') {
//     next({ path: '/before-event' });
//   } else {
//     next();
//   }
// });

router.beforeEach((to, from, next) => {
  if (!to.fullPath.includes('id') && !to.fullPath.includes('en')) {
    next({ path: '/id' + to.fullPath });
  } else next();
});

export default router;
