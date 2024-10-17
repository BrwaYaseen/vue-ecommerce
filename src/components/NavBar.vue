<template>
  <nav class="bg-white shadow-md">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <div class="flex items-center">
          <router-link to="/" class="flex items-center">
            <ShoppingBagIcon class="h-8 w-8 text-blue-600 mr-2" />
            <span class="text-2xl font-bold text-gray-800">{{
              storeName
            }}</span>
          </router-link>
        </div>
        <div class="hidden md:flex space-x-8">
          <router-link
            to="/"
            class="text-gray-600 hover:text-blue-600 transition duration-300 font-medium"
            >Home</router-link
          >
          <router-link
            to="/products"
            class="text-gray-600 hover:text-blue-600 transition duration-300 font-medium"
            >Products</router-link
          >
          <router-link
            to="/about"
            class="text-gray-600 hover:text-blue-600 transition duration-300 font-medium"
            >About</router-link
          >
          <router-link
            to="/contact"
            class="text-gray-600 hover:text-blue-600 transition duration-300 font-medium"
            >Contact</router-link
          >
        </div>
        <div class="flex items-center space-x-4">
          <button
            @click="openCart"
            class="relative p-2 text-gray-600 hover:text-blue-600 transition duration-300"
          >
            <ShoppingCartIcon class="w-6 h-6" />
            <span
              class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full"
            >
              {{ cartItemCount }}
            </span>
          </button>
          <button class="md:hidden" @click="toggleMobileMenu">
            <MenuIcon class="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <router-link
          to="/"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          >Home</router-link
        >
        <router-link
          to="/products"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          >Products</router-link
        >
        <router-link
          to="/about"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          >About</router-link
        >
        <router-link
          to="/contact"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          >Contact</router-link
        >
      </div>
    </div>
    <!-- Cart Sheet -->
    <Sheet v-model:open="showCart">
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div class="mt-4 space-y-4">
          <ul v-if="cart.length > 0" class="space-y-4">
            <li
              v-for="item in cart"
              :key="item.id"
              class="flex justify-between items-center border-b pb-2"
            >
              <div>
                <span class="font-medium">{{ item.name }}</span>
                <p class="text-sm text-gray-500">
                  ${{ item.price.toFixed(2) }}
                </p>
              </div>
              <button
                @click="removeFromCart(item)"
                class="text-red-500 hover:text-red-700"
              >
                <XIcon class="w-5 h-5" />
              </button>
            </li>
          </ul>
          <p v-else class="text-gray-500">Your cart is empty</p>
        </div>
        <div v-if="cart.length > 0" class="mt-4">
          <div class="flex justify-between font-semibold mb-2">
            <span>Total:</span>
            <span>${{ cartTotal.toFixed(2) }}</span>
          </div>
          <Button @click="checkout" class="w-full">Checkout</Button>
        </div>
      </SheetContent>
    </Sheet>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  ShoppingBagIcon,
  ShoppingCartIcon,
  MenuIcon,
  XIcon,
} from 'lucide-vue-next'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

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
const mobileMenuOpen = ref(false)

const cartItemCount = computed(() => props.cart.length)

const cartTotal = computed(() => {
  return props.cart.reduce((total, item) => total + item.price, 0)
})

const openCart = () => {
  showCart.value = true
  if (mobileMenuOpen.value) mobileMenuOpen.value = false
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (showCart.value) showCart.value = false
}

/* const removeFromCart = (item) => {
  const index = props.cart.findIndex(cartItem => cartItem.id === item.id)
  if (index !== -1) {
    props.cart.splice(index, 1)
  }
} */

const checkout = () => {
  // Implement checkout logic here
  alert('Proceeding to checkout...')
  showCart.value = false
}
</script>
