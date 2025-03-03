<script setup lang="ts">
import Compute from './components/2.Compute.vue'
import Watch from './components/3.Watch.vue'
import WatchEffect from './components/4.WatchEffect.vue'
import TagRef from './components/5.TagRef.vue';
import PersonList from './components/6.Pros/PersonList.vue';
import LifeCycle from './components/7.LifeCycle.vue';
import Cat from './components/8.hooks/Cat.vue';
</script>


<template>
  <Cat/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
