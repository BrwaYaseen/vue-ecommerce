import { createRouter, createWebHistory } from 'vue-router'
import ProductsPage from '../views/ProductsPage.vue'
import HomeView from '@/views/HomeView.vue'
import CheckoutPage from '@/views/CheckoutPage.vue'
import HelpCenter from '@/views/HelpCenter.vue'

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
  {
    path: '/checkout',
    name: 'Checkout',
    component: CheckoutPage,
  },
  {
    path: '/help',
    name: 'Help',
    component: HelpCenter,
  },
  // Add other routes as needed
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
