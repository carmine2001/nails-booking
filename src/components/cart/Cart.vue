<template>
    <div class="w-[70px] h-[70px] fixed bottom-3 right-3 cursor-pointer" @click="onVisibleCart">
        <div class="flex">
            <img src="../../assets/icons-cart-64.png" alt="image-cart">
            <div class="rounded-full absolute bg-slate-700 w-[30px] h-[30px] text-center text-white top-0 right-0">{{ counterCart }}</div>
        </div>
    </div>

    <CartServices v-if="isVisible" @on-visible-cart="emitOnVisibleCart"></CartServices>

    
</template>

<script>
import { storeCart } from '@/stores/CounterCart';
import { computed, ref } from 'vue';
import CartServices from './CartServices.vue';
export default {
    components: {
        CartServices
    },
    setup(){

        const storeCartServices = storeCart();

        const counterCart = computed(() => {
            return storeCartServices.getCart.length;
        })

        const isVisible = ref(false);

        const onVisibleCart = () => {
            isVisible.value = true;
        }

        const emitOnVisibleCart = (value) => {
            isVisible.value = value;
        }

        return {
            counterCart,
            isVisible,
            onVisibleCart,
            emitOnVisibleCart
        }
    }
}
</script>