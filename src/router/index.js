import { createRouter, createWebHistory } from 'vue-router'
import ProductsPage from '../views/ProductsPage.vue'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsPage,
  },
  // Add other routes as needed
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
