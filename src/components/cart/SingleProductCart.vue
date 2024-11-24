<template>
    <div class="bg-white border rounded-full p-[10px] relative">
        <p class="m-0">{{ nameService }}</p>
        <div class="rounded-full absolute bg-red-600 w-[25px] h-[25px] text-center text-white -top-3 -right-2 cursor-pointer" @click="onDelete"><img src="../../assets//icons8-horizontal-line-25.png" alt="line horizontal"></div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { storeCart } from '@/stores/CounterCart';

export default {
    props: ['service'],
    setup(props){
        
        const nameService = computed(() => {
            return props.service.name.toUpperCase();
        })

        const storeCartServices = storeCart();

        const onDelete = () => {
            storeCartServices.removeServiceAtCart(props.service.id);
            storeCartServices.incrementCount()
            const count = storeCartServices.getCount;
            storeCartServices.setDeletedId(`${count}-`+props.service.id);
        }

        return {
            nameService,
            onDelete
        }
    }
}
</script>