<script setup lang="ts">
import { computed, ref } from 'vue';

let firstName = ref('张');
let lastName = ref('三');
// 只读
let fullName = computed(() => firstName.value + lastName.value);

let fullNameRw = computed({
  get: () => firstName.value + lastName.value,
  set: (newName) => {
    firstName.value = newName[0];
    lastName.value = newName[1];
  }
})

function changeFullName(){
  fullNameRw.value = '李四';
}


</script>

<template>
  <div>
    姓： <input type="text" v-model = "firstName" /> <br/>
    名： <input type="text" v-model = "lastName"/> <br/>
    全名： <span>{{fullName}}</span> <br/>
    全名2:  <span>{{fullNameRw}}</span>
  
  
  </div>
  <button @click="changeFullName">修改</button>
</template>