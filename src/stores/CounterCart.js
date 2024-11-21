import { defineStore } from "pinia";

export const storeCart = defineStore('serviceCart', {
    state: () => {
        const cart = [];

        return {
            cart
        }
    },

    actions: {
        addCart(service){
            this.cart.push(service);
        },

        removeServiceAtCart(id){
            this.cart = this.cart.filter((c) => c.id !== id)
        }
    },

    getters: {
        getCart(){
            return this.cart;
        }
    }
})