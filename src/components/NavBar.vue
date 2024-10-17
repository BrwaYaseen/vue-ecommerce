<template>
  <nav class="bg-white shadow-md">
    <div class="container mx-auto px-4 py-3">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <router-link to="/" class="flex items-center">
            <ShoppingBagIcon class="h-8 w-8 text-blue-500 mr-2" />
            <span class="text-2xl font-bold text-gray-800">{{
              storeName
            }}</span>
          </router-link>
        </div>
        <div class="hidden md:flex space-x-4">
          <router-link
            to="/"
            class="text-gray-600 hover:text-blue-500 transition duration-300"
            >Home</router-link
          >
          <router-link
            to="/products"
            class="text-gray-600 hover:text-blue-500 transition duration-300"
            >Products</router-link
          >
          <router-link
            to="/about"
            class="text-gray-600 hover:text-blue-500 transition duration-300"
            >About</router-link
          >
          <router-link
            to="/contact"
            class="text-gray-600 hover:text-blue-500 transition duration-300"
            >Contact</router-link
          >
        </div>
        <div class="flex items-center">
          <button
            @click="toggleCart"
            class="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out flex items-center"
          >
            <ShoppingCartIcon class="w-5 h-5 mr-2" />
            <span class="hidden sm:inline">Cart:</span> {{ cartItemCount }}
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="showCart"
      class="absolute right-4 mt-2 w-64 bg-white rounded-lg shadow-xl z-10 p-4"
    >
      <h3 class="text-lg font-semibold mb-2">Cart Items</h3>
      <ul v-if="cart.length > 0">
        <li
          v-for="item in cart"
          :key="item.id"
          class="mb-2 flex justify-between"
        >
          <span>{{ item.name }}</span>
          <span>${{ item.price.toFixed(2) }}</span>
        </li>
      </ul>
      <p v-else>Your cart is empty</p>
      <button
        v-if="cart.length > 0"
        @click="checkout"
        class="mt-4 w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300 ease-in-out"
      >
        Checkout
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ShoppingCartIcon, ShoppingBagIcon } from 'lucide-vue-next'

const props = defineProps({
  storeName: {
    type: String,
    required: true,
  },
  cart: {
    type: Array,
    required: true,
  },
})

const showCart = ref(false)

const cartItemCount = computed(() => props.cart.length)

const toggleCart = () => {
  showCart.value = !showCart.value
}

const checkout = () => {
  // Implement checkout logic here
  alert('Proceeding to checkout...')
  showCart.value = false
}
</script>
