<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Our Products</h1>
    <div class="flex flex-col md:flex-row">
      <!-- Categories and Filters Sidebar -->
      <div class="w-full md:w-1/4 pr-8">
        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">Categories</h2>
          <ul class="space-y-2">
            <li v-for="category in categories" :key="category">
              <button
                @click="toggleCategory(category)"
                :class="[
                  'w-full text-left px-3 py-2 rounded',
                  selectedCategories.includes(category)
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300',
                ]"
              >
                {{ category }}
              </button>
            </li>
          </ul>
        </div>
        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">Price Range</h2>
          <div class="flex items-center space-x-4">
            <input
              v-model.number="minPrice"
              type="number"
              placeholder="Min"
              class="w-1/2 px-3 py-2 border rounded"
            />
            <input
              v-model.number="maxPrice"
              type="number"
              placeholder="Max"
              class="w-1/2 px-3 py-2 border rounded"
            />
          </div>
        </div>
        <button
          @click="applyFilters"
          class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Apply Filters
        </button>
      </div>

      <!-- Products Grid -->
      <div class="w-full md:w-3/4">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
          />
        </div>
        <div v-if="filteredProducts.length === 0" class="text-center mt-8">
          <p class="text-xl text-gray-600">
            No products found matching your criteria.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import { useProductStore } from '@/stores/product'

const productStore = useProductStore()

const categories = ['T-Shirts', 'Hoodies', 'Hats', 'Accessories']
const selectedCategories = ref([])
const minPrice = ref(null)
const maxPrice = ref(null)

const toggleCategory = category => {
  const index = selectedCategories.value.indexOf(category)
  if (index === -1) {
    selectedCategories.value.push(category)
  } else {
    selectedCategories.value.splice(index, 1)
  }
}

const applyFilters = () => {
  // This function would typically trigger a re-fetch of products from the API
  // For now, we'll just re-compute the filteredProducts
  console.log('Applying filters:', {
    selectedCategories: selectedCategories.value,
    minPrice: minPrice.value,
    maxPrice: maxPrice.value,
  })
}

const filteredProducts = computed(() => {
  return productStore.products.filter(product => {
    const categoryMatch =
      selectedCategories.value.length === 0 ||
      selectedCategories.value.includes(product.category)
    const priceMatch =
      (minPrice.value === null || product.price >= minPrice.value) &&
      (maxPrice.value === null || product.price <= maxPrice.value)
    return categoryMatch && priceMatch
  })
})

// Fetch products when the component is mounted
productStore.fetchProducts()
</script>
