<template>
  <div
    class="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 flex flex-col"
  >
    <div class="relative pb-[125%] overflow-hidden">
      <img
        :src="product.image"
        :alt="product.name"
        class="absolute top-0 left-0 w-full h-full object-cover object-center"
      />
    </div>
    <div class="p-4 flex flex-col flex-grow">
      <h3 class="text-lg font-semibold text-gray-800 mb-2">
        {{ product.name }}
      </h3>
      <p class="text-gray-600 mb-4 flex-grow">
        ${{ product.price.toFixed(2) }}
      </p>
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
