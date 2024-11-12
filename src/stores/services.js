import { defineStore } from "pinia";


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
            const res = await fetch(this.apiUrl);
            const data = await res.json();
            this.services = data;
        }
    },

    getters: {
        getServices(){
            return this.services;
        }
    }
})