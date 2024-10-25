<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Our Products</h1>

    <!-- Filters and Sorting -->
    <div class="mb-8 flex flex-wrap items-center justify-between">
      <div class="w-full md:w-auto mb-4 md:mb-0">
        <label for="category" class="mr-2">Category:</label>
        <select
          id="category"
          v-model="selectedCategory"
          class="border rounded px-2 py-1"
        >
          <option value="">All</option>
          <option
            v-for="category in categories"
            :key="category"
            :value="category"
          >
            {{ category }}
          </option>
        </select>
      </div>
      <div class="w-full md:w-auto mb-4 md:mb-0">
        <label for="sort" class="mr-2">Sort by:</label>
        <select id="sort" v-model="sortBy" class="border rounded px-2 py-1">
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
      </div>
      <div class="w-full md:w-auto">
        <label for="search" class="sr-only">Search</label>
        <input
          id="search"
          v-model="searchQuery"
          type="text"
          placeholder="Search products..."
          class="border rounded px-2 py-1 w-full md:w-auto"
        />
      </div>
    </div>

    <!-- Products Grid -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <ProductCard
        v-for="product in filteredAndSortedProducts"
        :key="product.id"
        :product="product"
      />
    </div>

    <!-- No Results Message -->
    <div v-if="filteredAndSortedProducts.length === 0" class="text-center mt-8">
      <p class="text-xl text-gray-600">
        No products found matching your criteria.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import { useProductStore } from '@/stores/product'

const productStore = useProductStore()

// Local state
const selectedCategory = ref('')
const sortBy = ref('name')
const searchQuery = ref('')

// Computed properties
const categories = computed(() => {
  return [...new Set(productStore.products.map(product => product.category))]
})

const filteredAndSortedProducts = computed(() => {
  let result = productStore.products

  // Filter by category
  if (selectedCategory.value) {
    result = result.filter(
      product => product.category === selectedCategory.value,
    )
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(
      product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query),
    )
  }

  // Sort products
  result.sort((a, b) => {
    if (sortBy.value === 'name') {
      return a.name.localeCompare(b.name)
    } else if (sortBy.value === 'price') {
      return a.price - b.price
    }
    return 0
  })

  return result
})

// Fetch products when the component is mounted
productStore.fetchProducts()
</script>
