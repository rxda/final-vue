<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue';

let temp = ref(10);
let watermark = ref(0.1);

let addTemp = ()=>{
  temp.value += 10;
}

let addWatermark = ()=>{
  watermark.value +=0.1;
}


// watch([temp, watermark], (newValue)=>{
//   let [newTemp, newWatermark] = newValue;
//   if(newTemp>40 || newWatermark > 2){
//     alert('1111');
//   }
// })
// 用watchEffect实现,自动监听
watchEffect(()=>{
  if(temp.value>40 || watermark.value > 2){
    alert('1111');
  }
})

</script>

<template>
  <div>
    <h2>当水温 > 40 或 水位 > 2m时, 进行操作xxx</h2>
    <span>当前水温： {{ temp }}</span>
    <span>当前水位：{{ watermark }}</span>
    <button @click="addTemp">增加水温</button>
    <button @click="addWatermark">增加水位</button>
  </div>


</template>

<style>
button{
  background: greenyellow;
}
</style>