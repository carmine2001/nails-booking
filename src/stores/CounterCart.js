import { defineStore } from "pinia";
import { ref } from "vue";

export const storeCart = defineStore('serviceCart', {
    state: () => {
        const cart = [];
        const deletedId = ref(null);
        const count = ref(0);

        return {
            cart,
            deletedId,
            count
        }
    },

    actions: {
        addCart(service){
            this.cart.push(service);
        },

        removeServiceAtCart(id){
            this.cart = this.cart.filter((c) => c.id !== id)
        },

        setDeletedId(id){
            this.deletedId = id;
        },

        incrementCount(){
            this.count++
        }
    },

    getters: {
        getCart(){
            return this.cart;
        },

        getDeletedId(){
            return this.deletedId;
        },

        getCount(){
            return this.count;
        }
    }
})