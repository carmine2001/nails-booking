import { defineStore } from "pinia";
import { loaderStore } from "./loader";


export const storeNailServices = defineStore('nailServices', {
    state: () => {
        const services = [];
        const apiUrl = 'https://booking-nails-e90ff-default-rtdb.firebaseio.com/services.json';
        return {
            services,
            apiUrl
        }
    },

    actions: {
        async setServices(){
            const storeLoader = loaderStore();
            storeLoader.setLoader(true);
            const res = await fetch(this.apiUrl);
            const data = await res.json();
            this.services = data;
            storeLoader.setLoader(false);
        }
    },

    getters: {
        getServices(){
            return this.services;
        }
    }
})