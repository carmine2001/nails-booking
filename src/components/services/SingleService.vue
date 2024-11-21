<template>
    <div class="flex justify-between border-b-[1px] border-gray-300 text-xl">
            <div class="flex w-full gap-5 cursor-pointer">
                <input type="checkbox" :id="singleService.name" ref="inputService" class="w-[1.1rem] ml-[20px] cursor-pointer" @change="addCartServices">
                <label :for="singleService.name" class="block w-full py-[20px] cursor-pointer">{{ name }}</label>
            </div>
            <div>
                <label for="semipermanente" class="block py-[5px] pr-5 cursor-pointer">{{ price }}</label>
                <p class="text-base text-slate-500 cursor-pointer">{{ singleService.time }}</p>
            </div>
        </div>
</template>

<script>
import { computed,ref } from 'vue';
import { storeCart } from '@/stores/CounterCart';

export default {
    props: ['singleService'],

    setup(props){
        const price = computed(() => {
            return props.singleService.price + ",00€";
        })

        

        const name = computed(() => {
            const nameSplitted = props.singleService.name.split(" ");

            let string = '';

            for(let i = 0; i < nameSplitted.length; i++){
            const nameString = nameSplitted[i];
            string += " " + nameString[0].toUpperCase();

            for(let j = 1; j < nameString.length; j++){
                string+=nameString[j];
            }
        }

        return string;

        })

        const storeCartServices = storeCart();
        const inputService = ref(null);

        const addCartServices = () => {
            const objCartService = {
                id: props.singleService.id,
                name: props.singleService.name
            }
            if(inputService.value.checked){
                storeCartServices.addCart(objCartService);
            }
            else {
                storeCartServices.removeServiceAtCart(props.singleService.id);
            }
        }

        return {
            price,
            name,
            addCartServices,
            inputService
        }
    }
}
</script>