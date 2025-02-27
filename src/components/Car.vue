<script setup lang="ts">
import { ref } from 'vue';

    let car = ref({brand:'奔驰', price: 40})

    let depreciate = () => {
        car.value.price-=1;
    }

</script>

<template>
    <div>
            <h2>
                汽车信息： 一辆 {{ car.brand }}, 价值： {{ car.price }} 万
            </h2>
            <button @click="depreciate">贬值</button>
    </div>


</template>