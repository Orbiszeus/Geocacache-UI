import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';

// Import your components for the routes
import Geocaching from './components/Geocaching.vue';
import Cache from './components/Cache.vue';
import Login from './components/Login.vue';
import GamePanel from './components/GamePanel.vue';
import Game from './components/Game.vue';

const routes = [
  { path: '/login', component: Login },
  { path: '/map', component: Geocaching },
  { path: '/caches', component: Cache },
  { path: '/game_panel', component: GamePanel },
  { path: '/game', component: Game },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(router)
  .mount('#app');
