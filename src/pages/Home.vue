<template>
    <div class="grid grid-cols-1">

        <div>
            <img src="../assets/img-home.jpg" alt="img-workstation">
        </div>

        <Services></Services>

    </div>

</template>


<script>
import Services from '@/components/Services.vue';
export default {
    components: {
        Services
    }
}
</script>