<template>
    <div class="flex justify-between border-b-[1px] border-gray-300 text-xl">
            <div class="flex w-full gap-5 cursor-pointer">
                <input type="checkbox" :id="singleService.name" ref="inputService" class="w-[1.4rem] ml-[20px] cursor-pointer" @click="addCartServices">
                <label :for="singleService.name" class="block w-full py-[20px] cursor-pointer text-[1.3rem]">{{ name }}</label>
            </div>
            <div>
                <label :for="singleService.name" class="block py-[5px] pr-5 cursor-pointer">{{ price }}</label>
                <p class="text-base text-slate-500 cursor-pointer">{{ singleService.time }}</p>
            </div>
        </div>
</template>

<script>
import { computed,ref,watch } from 'vue';
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
                name: props.singleService.name,
            }
            if(inputService.value.checked){
                storeCartServices.addCart(objCartService);
            }
            else {
                storeCartServices.removeServiceAtCart(props.singleService.id);
            }
        }

        const deletedId = computed(() => {
            return storeCartServices.getDeletedId;
        })

        watch(deletedId, (newValue) => {
            const idSplitted = newValue.split('-');
            const id = +idSplitted[idSplitted.length-1];
            if(props.singleService.id === id){
                inputService.value.checked = false;
            }
        },)

        return {
            price,
            name,
            addCartServices,
            inputService
        }
    }
}
</script>