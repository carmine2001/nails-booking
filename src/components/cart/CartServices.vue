<template>

    <div class="fixed top-0 left-0 w-full h-full bg-gray-600 opacity-50" @click="onVisibleCart">

    </div>

    <div class="fixed w-full bg-fuchsia-300 px-[20px] py-[10px] bottom-0 left-0 text-center">
        <h1 class="text-white text-2xl font-bold">I servizi che hai scelto</h1>

        <div class="flex my-[30px] justify-center flex-wrap gap-3">
            <singleProductCart v-for="service in storeServices.getCart" :key="service.id" :servive="service"></singleProductCart>
        </div>

        <div>
            <button class="text-[1.1rem] text-white bg-blue-600 rounded-md w-full py-[10px]">Prenota</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import singleProductCart from './singleProductCart.vue';
import { storeCart } from '@/stores/CounterCart';

export default {
    emits: ['onVisibleCart'],
    components: {
        singleProductCart
    },
    setup(_,emits){

        const isVisible = ref(true);
        
        const onVisibleCart = () => {
            isVisible.value = false;
            emits.emit('onVisibleCart', isVisible.value);
        }
        
        const storeServices = storeCart();

        return {
            onVisibleCart,
            storeServices
        }
    }
}
</script>