<template>
    <div class="border rounded-md mt-[20px]">

        <div class="bg-slate-200 py-[20px] pl-[10px]">
            <h2 class="text-2xl">{{ titleService }}</h2>
        </div>

        <SingleService v-for="singleService in groupService.body" :key="singleService.name" :singleService="singleService"></SingleService>

    </div>
</template>

<script>
import SingleService from './SingleService.vue';
import { computed } from 'vue';
export default {
    components: {
        SingleService
    },
    props: ['groupService'],
    setup(props){

        const titleService = computed(() => {
            return props.groupService.title.toUpperCase()
        })

        return {
            titleService
        }

    }
}
</script>