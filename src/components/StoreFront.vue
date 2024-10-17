<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <Navbar :store-name="storeName" :cart="cart" />

    <main class="flex-grow container mx-auto px-4 py-8">
      <h2 class="text-2xl font-semibold text-gray-800 mb-6">
        Featured Products
      </h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105"
        >
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">
              {{ product.name }}
            </h3>
            <p class="text-gray-600 mb-4">${{ product.price.toFixed(2) }}</p>
            <button
              @click="addToCart(product)"
              class="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out flex items-center justify-center"
            >
              <PlusIcon class="w-5 h-5 mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>

    <PageFooter :store-name="storeName" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { PlusIcon } from 'lucide-vue-next'
import PageFooter from './PageFooter.vue'
import Navbar from './Navbar.vue'

const storeName = ref('Vue Boutique')

const products = ref([
  {
    id: 1,
    name: 'Elegant Watch',
    price: 199.99,
    image: '/placeholder.svg?height=300&width=300',
  },
  {
    id: 2,
    name: 'Designer Sunglasses',
    price: 129.99,
    image: '/placeholder.svg?height=300&width=300',
  },
  {
    id: 3,
    name: 'Leather Wallet',
    price: 79.99,
    image: '/placeholder.svg?height=300&width=300',
  },
  {
    id: 4,
    name: 'Wireless Earbuds',
    price: 149.99,
    image: '/placeholder.svg?height=300&width=300',
  },
])

const cart = ref([])

const addToCart = product => {
  cart.value.push(product)
}
</script>

<style scoped>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

/* Add any additional custom styles here */
</style>
