<script setup lang="ts">
import { reactive, ref,watch } from 'vue'

// watch: ref基本类型
const count = ref(100)

const stopWatch = watch(count, (newValue,oldValue)=>{
  console.log(newValue, oldValue, count.value);
  if(newValue > 110){
    stopWatch();
  }
})

// watch2: ref对象类型
const person = ref({name:'斯巴鲁', age: 20})

function changePerson(){
  person.value = {name:'拉姆', age: 10};
}
  // 深度监视
  // 深度侦听需要遍历被侦听对象中的所有嵌套的属性，当用于大型数据结构时，开销很大。因此请只在必要时才使用它，并且要留意性能。
watch(person, (newValue,oldValue)=>{
  console.log(newValue, oldValue);
}, {deep: true})

// watch3: 深度监视reactive对象,相当于默认开启deep，且无法关闭
let reactivePerson = reactive({name:'斯巴鲁', age: 20, car: ['小米su7','路特斯']})
function changeReactivePerson(){
   Object.assign(reactivePerson, {name:'拉姆', age: 10, car: ['奔腾小马','剁椒鱼头']});
}

watch(reactivePerson, (newValue,oldValue)=>{
  console.log(newValue, oldValue);
})

// watch4: 监视ref或reactive定义的对象类型的某个属性
let person4 = reactive({name:'斯巴鲁', age: 20})
function changePerson4(){
   Object.assign(person4, {name:'拉姆', age: 10});
}

  // 不是对象类型需要改为getter函数,建议都改成getter函数
watch(()=> person4.name, (newValue,oldValue)=>{
  console.log(newValue, oldValue);
})

// watch5: 监视多个数据
let person5 = ref({name:'斯巴鲁', age: 20, car: ['小米su7','路特斯']})
function changePerson5(){
   person5.value = {name:'拉姆', age: 10, car: ['奔腾小马','剁椒鱼头']};
}

watch([()=> person5.value.name, ()=> person5.value.car[0]], (newValue,oldValue)=>{
  console.log(newValue, oldValue);
})

</script>

<template>
  <h5>watch: ref基本类型</h5>
  <button type="button" @click="count++">count is {{ count }}</button>

  <h5>watch2: ref对象类型</h5>
  {{person.name}}'s age is {{person.age}}
  <br/>
  <button type="button" @click="person.name+='😲'">修改名字(oldValue=newValue)</button>
  <button type="button" @click="person.age++">修改年龄(oldValue=newValue)</button>
  <button type="button" @click="changePerson">修改整个人</button>

  <h5>watch3: 深度监视reactive对象</h5>
  {{reactivePerson.name}}'s age is {{reactivePerson.age}}
  <br/>
  <button type="button" @click="reactivePerson.name+='😲'">修改名字</button>
  <button type="button" @click="reactivePerson.age++">修改年龄</button>
  <button type="button" @click="changeReactivePerson">修改整个人</button>

  <h5>watch4: 监视ref或reactive定义的对象类型的某个属性</h5>
  {{person4.name}}'s age is {{person4.age}}
  <br/>
  <button type="button" @click="person4.name+='😲'">修改名字</button>
  <button type="button" @click="person4.age++">修改年龄</button>
  <button type="button" @click="changePerson4">修改整个人</button>

  <h5>watch5: 监视多个数据</h5>
  {{person5.name}}'s age is {{person5.age}}, have car {{person5.car[0]}},{{person5.car[1]}}
  <br/>
  <button type="button" @click="person5.name+='😲'">修改名字</button>
  <button type="button" @click="person5.age++">修改年龄</button>
  <button type="button" @click="changePerson5">修改整个人</button>
  <button type="button" @click="person5.car[0] = '比亚迪'">修改整个人</button>
</template>

