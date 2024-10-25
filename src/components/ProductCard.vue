<template>
  <div
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
        @click="addToCart"
        class="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out flex items-center justify-center"
      >
        <PlusIcon class="w-5 h-5 mr-2" />
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script setup>
import { PlusIcon } from 'lucide-vue-next'
import { useCartStore } from '@/stores/cart'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const cartStore = useCartStore()

const addToCart = () => {
  cartStore.addItem(props.product)
}
</script>
