<script setup lang="ts">
import { ref,watch } from 'vue'

defineProps<{ msg: string }>()

const count = ref(899011)

watch(count, (newValue,oldValue)=>{
  console.log(newValue, oldValue, count.value)
})

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
