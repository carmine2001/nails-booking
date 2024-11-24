<template>
    <div class="grid grid-cols-1 md:grid-cols-2 md:w-[80%] md:m-auto gap-10">

        <div class="md:order-1 md:mb-[20px]">
            <img src="../assets/img-home.jpg" alt="img-workstation" class="md:min-w-full md:min-h-full">
        </div>

        <Services class="md:order-3 md:w-full md:m-auto"></Services>
        <Cart v-if="isCartVisible"></Cart>
        <OpeningHours class="md:order-2"></OpeningHours>
        <Loader v-if="loader"></Loader>



    </div>

</template>


<script>
import Services from '@/components/services/Services.vue';
import Cart from '@/components/cart/Cart.vue';
import { computed } from 'vue';
import { storeCart } from '@/stores/CounterCart';
import OpeningHours from '@/components/OpeningHours.vue';
import Loader from '@/components/Loader.vue';
import { loaderStore } from '@/stores/loader';
export default {
    components: {
        Services,
        Cart,
        OpeningHours,
        Loader
    },

    setup(){

        const storeCartServices = storeCart();

        const isCartVisible = computed(() => {
            return storeCartServices.getCart.length > 0;
        })

        const storeLoader = loaderStore();

        const loader = computed(() => {
            return storeLoader.getLoader;
        })

        return {
            isCartVisible,
            loader
        }
    }
}
</script>