<script setup lang="ts">
import { defineProps } from 'vue';
import type { PersonListType, PersonType } from '.';


const {personList} = defineProps<{personList:Array<PersonType>}>()

</script>

<template>
  <div v-for="item in personList">
    <span>姓名：{{ item.name }}</span>
    <span>性别：{{ item.gender }}</span>
    <span>年龄：{{ item.age }}</span>
    
  </div>


</template>

<style>
button{
  background: greenyellow;
}
</style>