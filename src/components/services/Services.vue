<template>
    <div class="mt-[30px] w-[80%] m-auto text-[1.1rem]">

        <h1 class="text-3xl">Servizi</h1>

        <Service v-for="groupService in services" :key="groupService.title" :groupService="groupService"></Service>

    </div>
</template>

<script>
import { storeNailServices } from '@/stores/services';
import { computed, onMounted } from 'vue';
import Service from './GroupService.vue';
export default {
    components: {
        Service
    },
    setup(){

        const storeServices = storeNailServices();

        onMounted(async () => {
            await storeServices.setServices();
        })

        const services = computed(() => {
            return storeServices.getServices;
        })

        return {
            services
        }

    }
}
</script>