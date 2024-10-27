<template>
  <div
    class="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 flex flex-col"
  >
    <div class="relative aspect-[3/4] mb-2 overflow-hidden">
      <img
        :src="product.image"
        :alt="product.name"
        class="absolute inset-0 w-full h-full object-cover"
      />
    </div>
    <div class="p-4 flex flex-col flex-grow">
      <h3 class="text-sm font-medium text-gray-900">{{ product.name }}</h3>
      <p class="text-sm text-gray-500">${{ product.price.toFixed(2) }} USD</p>
      <Button
        @click="addToCart"
        class="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out flex items-center justify-center"
      >
        <PlusIcon class="w-5 h-5 mr-2" />
        Add to Cart
      </Button>
    </div>
  </div>
</template>

<script setup>
import { PlusIcon } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['add-to-cart'])

const addToCart = () => {
  emit('add-to-cart', props.product)
}
</script>
