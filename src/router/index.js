import { createRouter, createWebHashHistory } from 'vue-router'
// @ts-ignore
import CarDetailsPage from '../pages/CarDetailsPage.vue'
// @ts-ignore
import CarsPage from '../pages/CarsPage.vue'
// @ts-ignore
import HousesPage from '../pages/HousesPage.vue'

const routes = [
  {
    path: '/cars',
    name: 'Cars',
    component: CarsPage
  }, {
    path: '/cars/:id',
    name: 'CarDetails',
    component: CarDetailsPage
  }, {
    path: '/houses',
    name: 'Houses',
    component: HousesPage
  }, {
    path: '/:catchAll(.*)*',
    redirect: '/cars',
    component: null
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
