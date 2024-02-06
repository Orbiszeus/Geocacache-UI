<script setup>
import Geocaching from './components/Geocaching.vue'
import Cache from './components/Cache.vue'
import Login from './components/Login.vue'
import GamePanel from './components/GamePanel.vue'
import Game from './components/Game.vue'

</script>

<template>
  <div id="app">
    <!-- Your other content -->
    <router-view></router-view>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
