<template>
    <h1>sono la reservation</h1>
</template>

<script>
import { storeCart } from '@/stores/CounterCart';
export default {
    setup(){
        const storeCartServices = storeCart();

        console.log(storeCartServices.getCart)
    }
}
</script>