<template>
    <div class="bg-white border rounded-full p-[10px] relative">
        <p>{{ nameService }}</p>
        <div class="rounded-full absolute bg-red-600 w-[25px] h-[25px] text-center text-white -top-3 -right-2 cursor-pointer"><p>-</p></div>
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    props: ['servive'],
    setup(props){
        
        const nameService = computed(() => {
            return props.servive.name.toUpperCase();
        })

        return {
            nameService
        }
    }
}
</script>