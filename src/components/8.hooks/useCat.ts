import axios from "axios"
import { reactive } from "vue"

export default ()=>{
  let catList = reactive<Array<{id:string,url:string}>>([

  ])

  async function getCat() {
    const result = await axios.get('https://api.thecatapi.com/v1/images/search')
    catList.push({id:result.data[0].id, url: result.data[0].url})
    
  }

  return {catList, getCat}
}