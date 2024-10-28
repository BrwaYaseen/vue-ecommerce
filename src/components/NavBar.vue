<template>
  <nav class="bg-white shadow-md relative">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-between items-center py-4">
        <div class="flex items-center">
          <router-link to="/" class="flex items-center">
            <ShoppingBagIcon class="h-8 w-8 text-blue-600 mr-2" />
            <span class="text-2xl font-bold text-gray-800">{{
              storeName
            }}</span>
          </router-link>
        </div>
        <div class="flex items-center lg:order-last">
          <button
            @click="toggleCart"
            class="relative p-2 text-gray-600 hover:text-blue-600 transition duration-300"
          >
            <ShoppingCartIcon class="w-6 h-6" />
            <span
              class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full"
            >
              {{ cartStore.itemCount }}
            </span>
          </button>
          <button class="lg:hidden ml-2" @click="toggleMobileMenu">
            <MenuIcon class="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div class="hidden lg:flex flex-grow justify-center space-x-8">
          <router-link
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="text-gray-600 hover:text-blue-600 transition duration-300 font-medium"
          >
            {{ link.text }}
          </router-link>
        </div>
        <div class="w-full lg:w-auto mt-4 lg:mt-0 order-last lg:order-none">
          <div class="relative">
            <input
              type="text"
              placeholder="Search products..."
              class="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              v-model="searchQuery"
              @keyup.enter="performSearch"
            />
            <button
              @click="performSearch"
              class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500"
            >
              <SearchIcon class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="lg:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <router-link
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          @click="mobileMenuOpen = false"
        >
          {{ link.text }}
        </router-link>
      </div>
    </div>
    <!-- Cart Slide-out Panel -->
    <Transition name="slide-fade">
      <div
        v-if="isCartOpen"
        class="fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-lg z-50 overflow-y-auto"
      >
        <div class="p-6">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-2xl font-bold">Your Cart</h2>
            <button
              @click="toggleCart"
              class="text-gray-500 hover:text-gray-700"
            >
              <XIcon class="w-6 h-6" />
            </button>
          </div>
          <div v-if="cartStore.itemCount === 0" class="text-center py-8">
            <p class="text-gray-500">Your cart is empty</p>
          </div>
          <ul v-else class="space-y-4">
            <li
              v-for="item in cartStore.items"
              :key="item.id"
              class="flex justify-between items-center border-b pb-2"
            >
              <div>
                <h3 class="font-medium">{{ item.name }}</h3>
                <p class="text-sm text-gray-500">
                  ${{ item.price.toFixed(2) }} x {{ item.quantity }}
                </p>
              </div>
              <button
                @click="cartStore.removeItem(item.id)"
                class="text-red-500 hover:text-red-700"
              >
                <XIcon class="w-5 h-5" />
              </button>
            </li>
          </ul>
          <div v-if="cartStore.itemCount > 0" class="mt-6">
            <div class="flex justify-between font-semibold mb-4">
              <span>Total:</span>
              <span>${{ cartStore.total.toFixed(2) }}</span>
            </div>
            <router-link
              to="/checkout"
              class="block w-full bg-blue-600 text-white text-center px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
              @click="toggleCart"
            >
              Proceed to Checkout
            </router-link>
          </div>
        </div>
      </div>
    </Transition>
    <!-- Overlay -->
    <div
      v-if="isCartOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-40"
      @click="toggleCart"
    ></div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import {
  ShoppingBagIcon,
  ShoppingCartIcon,
  MenuIcon,
  XIcon,
  SearchIcon,
} from 'lucide-vue-next'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  storeName: {
    type: String,
    required: true,
  },
})

const cartStore = useCartStore()

const links = [
  { to: '/', text: 'Home' },
  { to: '/products', text: 'Products' },
  { to: '/help', text: 'Help' },
  { to: '/contact', text: 'Contact' },
]

const mobileMenuOpen = ref(false)
const isCartOpen = ref(false)
const searchQuery = ref('')

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const toggleCart = () => {
  isCartOpen.value = !isCartOpen.value
}

const performSearch = () => {
  // Implement search functionality here
  console.log('Searching for:', searchQuery.value)
  // You might want to emit an event or use a store action to handle the search
}
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
