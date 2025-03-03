<script setup lang="ts">
import useCat from './useCat';


let {catList, getCat} = useCat()


</script>


<template>
  <div v-for="cat in catList" :key="cat.id">
    <h1>id: {{cat.id}}</h1>
    <img :src="cat.url" class="cat"/>
  </div>

  <button @click="getCat">来一只</button>
</template>

<style>
button{
  background: greenyellow;
}
.cat{
  width: 150px;
}
</style>