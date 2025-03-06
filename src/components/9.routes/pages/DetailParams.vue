<script setup lang="ts">
import {useRoute} from 'vue-router'

let route = useRoute();


</script>
<template>
  <h1>Detail-Params</h1>
  <h1>id: {{route.params.id}}</h1>
  <h1>title: {{route.params.title}}</h1>
  <h1>content: {{route.params.content}}</h1>
</template>