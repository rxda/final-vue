<template>
  <div class='talk'>
    <button @click="getOne">来一句</button>
    <ul>
      <li v-for="s in sentences" :key="s.id">{{ s.sentence }}</li>
    </ul>
  </div>
</template>

<script setup lang='ts'>
  import axios from 'axios';
  import { computed } from 'vue';
  import { useSentencesStore } from './store/love';

  const sentencesStore = useSentencesStore()

  const index = computed(()=>sentencesStore.sentences.length)

  const getOne = async ()=>{
    let sentenceResult = await axios.get('https://api.uomg.com/api/rand.qinghua')
    sentencesStore.sentences.unshift({id:index.value+1, sentence:sentenceResult.data.content })
 }
</script>

<style lang="css" scoped>

.talk{
  background-color: yellowgreen;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>