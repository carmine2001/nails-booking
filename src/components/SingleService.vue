<template>
    <div class="flex justify-between border-b-[1px] border-gray-300 text-xl">
            <div class="flex w-full gap-5">
                <input type="checkbox" :id="singleService.name" class="w-[1.1rem] ml-[20px]">
                <label :for="singleService.name" class="block w-full py-[20px]">{{ name }}</label>
            </div>
            <div>
                <label for="semipermanente" class="block py-[5px] pr-5">{{ price }}</label>
                <p class="text-base text-slate-500">{{ singleService.time }}</p>
            </div>
        </div>
</template>

<script>
import { computed } from 'vue';

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

        return {
            price,
            name
        }
    }
}
</script>