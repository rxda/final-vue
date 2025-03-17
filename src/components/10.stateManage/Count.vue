<template>
  <div class='count'>
    <h2>当前计数为：{{countStore.count}}</h2>
    <select v-model.number="step">
      <option v-for="i in 5" :value='i' :key="i">{{ i }}</option>
    </select>
    <button @click="add">add</button>
    <button @click="minus">minus</button>
  </div>
</template>

<script setup lang='ts'>
  import { ref } from 'vue';
  import { useCountStore } from './store/count';

  const countStore = useCountStore()
  const step = ref(1)


  const add = ()=>{
    countStore.count += step.value
  }

  const minus = ()=>{
    countStore.count -= step.value
  }
</script>

<style scoped>
.count{
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

</style>