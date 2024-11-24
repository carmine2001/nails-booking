import Home from '@/pages/Home.vue'
import Reservation from '@/pages/Reservation.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: '/reservation',
      component: Reservation
    }
  ],
})

export default router
