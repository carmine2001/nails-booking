<template>

    <div class="fixed top-0 left-0 w-full h-full bg-gray-600 opacity-50" @click="onVisibleCart">

    </div>

    <div class="fixed w-full bg-fuchsia-300 px-[20px] py-[10px] bottom-0 left-0 text-center">
        <h1 class="text-white text-2xl font-bold">I servizi che hai scelto</h1>

        <div class="flex my-[30px] justify-center flex-wrap gap-3">
            <SingleProductCart v-for="service in storeServices.getCart" :key="service.id" :service="service"></SingleProductCart>
        </div>

        <div>
            <button class="text-[1.1rem] text-white bg-blue-600 rounded-md w-full py-[10px]" @click="onReservation">Prenota</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import SingleProductCart from './SingleProductCart.vue';
import { storeCart } from '@/stores/CounterCart';
import { useRouter } from 'vue-router';

export default {
    emits: ['onVisibleCart'],
    components: {
        SingleProductCart
    },
    setup(_,emits,){

        const isVisible = ref(true);
        
        const onVisibleCart = () => {
            isVisible.value = false;
            emits.emit('onVisibleCart', isVisible.value);
        }
        
        const storeServices = storeCart();
        const router = useRouter();

        const onReservation = () => {
            router.push('/reservation')
        }

        return {
            onVisibleCart,
            storeServices,
            onReservation
        }
    }
}
</script>