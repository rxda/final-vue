import {defineStore} from 'pinia'

export const useSentencesStore = defineStore('sentences',{
  state: () => {
    return { sentences: [] }
  },
})