import { defineStore } from "pinia";
import { ref } from "vue";

export const loaderStore = defineStore('loaderStore', {
    state: () => {
        const loader = ref(true);

        return {
            loader
        }
    },

    actions: {
        setLoader(value){
            this.loader = value;
        }
    },

    getters: {
        getLoader(){
            return this.loader;
        }
    }
})