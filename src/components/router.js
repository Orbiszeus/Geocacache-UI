import Vue from 'vue';
import VueRouter from 'vue-router';
import Geocaching from './components/Geocaching.vue';
import Cache from './components/Cache.vue';
import Login from './components/Login.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/login', component: Login },
  { path: '/map', component: Geocaching }, // Set the root path to Geocaching
  { path: '/caches', component: Cache },
  // ... other routes
];

const router = new VueRouter({
  routes,
  mode: 'history', // This removes the hash from the URL (optional)
});

export default router;
