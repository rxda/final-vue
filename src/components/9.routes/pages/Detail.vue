<script setup lang="ts">
import {useRoute} from 'vue-router'

let route = useRoute();


</script>
<template>
  <h1>id: {{route.query.id}}</h1>
  <h1>title: {{route.query.title}}</h1>
  <h1>content: {{route.query.content}}</h1>
</template>