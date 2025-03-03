<script setup lang="ts">
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, } from 'vue';

  const sum = ref(0)

  // vue3中没有创建hook
  console.log("create")
  onBeforeMount(()=>{
    console.log("beforeMount")
  })
  onMounted(()=>{
    console.log("mounted")
  })
  onBeforeUpdate(()=>{
    console.log("beforeUpdate")
  })
  onUpdated(()=>{
    console.log("updated")
  })
  onBeforeUnmount(()=>{
    console.log("beforeUnmount")
  })
  onUnmounted(()=>{
    console.log("unmounted")
  })

  

</script>


<template>
  <h1>sum = {{ sum }}</h1>
  <button @click="sum++">+1</button>
</template>