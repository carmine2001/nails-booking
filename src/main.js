import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import App from './App.vue'
import router from './router'

const app = createApp(App)
const store = createPinia()

app.use(store)

import { storeCart } from './stores/CounterCart';
const storeCartServices = storeCart();

router.beforeEach((to,_,next) => {
    if(to.path === '/reservation' && storeCartServices.getCart.length === 0){
        next(false)
    }
    next()
})

app.use(router)

app.mount('#app')
