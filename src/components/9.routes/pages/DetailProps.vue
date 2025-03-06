<script setup lang="ts">

const { id, title, content } = defineProps<{ id: string, title:string, content:string }>()


</script>
<template>
  <h1>Detail-Props</h1>
  <h1>id: {{id}}</h1>
  <h1>title: {{title}}</h1>
  <h1>content: {{content}}</h1>
</template>