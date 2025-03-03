<script setup lang="ts">
import { useTemplateRef } from 'vue';


let city = useTemplateRef('city');

let getCity = ()=>{
  console.log(city.value)
}

</script>

<template>
  <div>
    <h1>中国</h1>
    <h2 ref="city">北京</h2>
    <h3>回龙观</h3>
    <button @click="getCity">增加水位</button>
  </div>


</template>

<style>
button{
  background: greenyellow;
}
</style>