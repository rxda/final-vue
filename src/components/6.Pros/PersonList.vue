<script setup lang="ts">
import type { PersonType } from '.';
import Person from './Person.vue';
const persons:PersonType[] = [
{
    name: 'name1',
    age: 10,
    gender: '男'
  },
  {
    name: 'name2',
    age: 20,
    gender: '男'
  },
  {
    name: 'name3',
    age: 30,
    gender: '女'
  },
  
]

</script>

<template>
  <h1>this is parent</h1>
  <Person :personList="persons"></Person>
</template>

<style>
button{
  background: greenyellow;
}
</style>