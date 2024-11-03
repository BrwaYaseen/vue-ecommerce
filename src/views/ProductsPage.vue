<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Our Products</h1>
    <div class="flex flex-col md:flex-row gap-8">
      <div class="w-full md:w-1/4">
        <div class="sticky top-4">
          <div class="bg-white rounded-lg shadow-md p-6">
            <div class="mb-8">
              <h2 class="text-xl font-semibold mb-4">Categories</h2>
              <ul class="space-y-2">
                <li v-for="category in categories" :key="category">
                  <button
                    @click="toggleCategory(category)"
                    :class="[
                      'w-full text-left px-3 py-2 rounded transition duration-200',
                      selectedCategories.includes(category)
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200',
                    ]"
                  >
                    {{ category }}
                  </button>
                </li>
              </ul>
            </div>
            <div class="mb-8">
              <h2 class="text-xl font-semibold mb-4">Price Range</h2>
              <div class="space-y-4">
                <div class="flex flex-col space-y-2">
                  <label class="text-sm text-gray-600">Minimum Price ($)</label>
                  <input
                    v-model.number="minPrice"
                    type="number"
                    placeholder="Min"
                    class="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div class="flex flex-col space-y-2">
                  <label class="text-sm text-gray-600">Maximum Price ($)</label>
                  <input
                    v-model.number="maxPrice"
                    type="number"
                    placeholder="Max"
                    class="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <button
              @click="applyFilters"
              class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      <div class="w-full md:w-3/4">
        <div class="mb-6 flex justify-between items-center">
          <p class="text-gray-600">
            Showing {{ displayedProducts.length }} products
          </p>
          <div class="flex items-center space-x-4">
            <label class="text-gray-600">Sort by:</label>
            <select
              v-model="sortBy"
              class="border rounded px-3 py-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="name">Name</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            v-for="product in displayedProducts"
            :key="product.id"
            :product="product"
            @add-to-cart="addToCart"
          />
        </div>
        <div v-if="displayedProducts.length === 0" class="text-center mt-8">
          <div class="max-w-md mx-auto">
            <SearchXIcon class="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p class="text-xl text-gray-600 mb-2">
              No products found matching your criteria.
            </p>
            <p class="text-gray-500">
              Try adjusting your filters or search terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import { useProductStore } from '@/stores/product'
import { useCartStore } from '@/stores/cart'
import { SearchXIcon } from 'lucide-vue-next'

const productStore = useProductStore()
const cartStore = useCartStore()

const categories = ['T-Shirts', 'Hoodies', 'Hats', 'Accessories']
const selectedCategories = ref([])
const minPrice = ref(null)
const maxPrice = ref(null)
const sortBy = ref('name')

const toggleCategory = category => {
  const index = selectedCategories.value.indexOf(category)
  if (index === -1) {
    selectedCategories.value.push(category)
  } else {
    selectedCategories.value.splice(index, 1)
  }
}

const applyFilters = () => {
  console.log('Filters applied:', {
    categories: selectedCategories.value,
    priceRange: { min: minPrice.value, max: maxPrice.value },
    sort: sortBy.value,
  })
}

const addToCart = product => {
  cartStore.addItem(product)
}

const displayedProducts = computed(() => {
  let filtered = productStore.filteredProducts

  if (selectedCategories.value.length > 0) {
    filtered = filtered.filter(product =>
      selectedCategories.value.includes(product.category),
    )
  }

  if (minPrice.value !== null || maxPrice.value !== null) {
    filtered = filtered.filter(product => {
      const aboveMin =
        minPrice.value === null || product.price >= minPrice.value
      const belowMax =
        maxPrice.value === null || product.price <= maxPrice.value
      return aboveMin && belowMax
    })
  }

  return [...filtered].sort((a, b) => {
    switch (sortBy.value) {
      case 'name':
        return a.name.localeCompare(b.name)
      case 'price-asc':
        return a.price - b.price
      case 'price-desc':
        return b.price - a.price
      default:
        return 0
    }
  })
})

productStore.fetchProducts()
</script>
