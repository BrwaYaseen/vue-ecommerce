<template>
  <div class="flex flex-col">
    <div class="relative aspect-[3/4] mb-2 overflow-hidden group">
      <img
        :src="product.image"
        :alt="product.name"
        class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div
        class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"
      ></div>
      <button
        @click="addToCart"
        class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-4 py-2 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        Add to Cart
      </button>
    </div>
    <h3 class="text-sm font-medium text-gray-900">{{ product.name }}</h3>
    <p class="text-sm text-gray-500">${{ product.price.toFixed(2) }} USD</p>
  </div>
</template>

<script setup>
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
