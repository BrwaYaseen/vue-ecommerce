<template>
    <div class="bg-gray-100 min-h-screen">
      <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold text-gray-800 mb-8">Our Products</h1>
        
        <div class="flex flex-col md:flex-row gap-8">
          <!-- Filters Sidebar -->
          <aside class="w-full md:w-1/4">
            <div class="bg-white rounded-lg shadow-md p-6">
              <h2 class="text-xl font-semibold mb-4">Filters</h2>
              
              <!-- Category Filter -->
              <div class="mb-6">
                <h3 class="font-medium mb-2">Category</h3>
                <div class="space-y-2">
                  <label v-for="category in categories" :key="category" class="flex items-center">
                    <input type="checkbox" :value="category" v-model="selectedCategories" class="form-checkbox h-5 w-5 text-blue-600">
                    <span class="ml-2 text-gray-700">{{ category }}</span>
                  </label>
                </div>
              </div>
              
              <!-- Price Range Filter -->
              <div class="mb-6">
                <h3 class="font-medium mb-2">Price Range</h3>
                <div class="flex items-center">
                  <input v-model="minPrice" type="number" min="0" step="10" class="w-1/2 px-2 py-1 border rounded-md mr-2">
                  <span>to</span>
                  <input v-model="maxPrice" type="number" min="0" step="10" class="w-1/2 px-2 py-1 border rounded-md ml-2">
                </div>
              </div>
              
              <!-- Apply Filters Button -->
              <button @click="applyFilters" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                Apply Filters
              </button>
            </div>
          </aside>
          
          <!-- Products Grid -->
          <main class="w-full md:w-3/4">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div v-for="product in filteredProducts" :key="product.id" class="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
                <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover">
                <div class="p-4">
                  <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ product.name }}</h3>
                  <p class="text-gray-600 mb-4">${{ product.price.toFixed(2) }}</p>
                  <button @click="addToCart(product)" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  // Sample product data
  const products = ref([
    { id: 1, name: 'Elegant Watch', price: 199.99, category: 'Accessories', image: '/placeholder.svg?height=300&width=300' },
    { id: 2, name: 'Designer Sunglasses', price: 129.99, category: 'Accessories', image: '/placeholder.svg?height=300&width=300' },
    { id: 3, name: 'Leather Wallet', price: 79.99, category: 'Accessories', image: '/placeholder.svg?height=300&width=300' },
    { id: 4, name: 'Wireless Earbuds', price: 149.99, category: 'Electronics', image: '/placeholder.svg?height=300&width=300' },
    { id: 5, name: 'Smartphone', price: 699.99, category: 'Electronics', image: '/placeholder.svg?height=300&width=300' },
    { id: 6, name: 'Laptop', price: 1299.99, category: 'Electronics', image: '/placeholder.svg?height=300&width=300' },
    { id: 7, name: 'Running Shoes', price: 89.99, category: 'Footwear', image: '/placeholder.svg?height=300&width=300' },
    { id: 8, name: 'Dress Shoes', price: 159.99, category: 'Footwear', image: '/placeholder.svg?height=300&width=300' },
    { id: 9, name: 'T-Shirt', price: 24.99, category: 'Clothing', image: '/placeholder.svg?height=300&width=300' },
  ]);
  
  const categories = ['Accessories', 'Electronics', 'Footwear', 'Clothing'];
  
  const selectedCategories = ref([]);
  const minPrice = ref(0);
  const maxPrice = ref(2000);
  
  const filteredProducts = computed(() => {
    return products.value.filter(product => {
      const categoryMatch = selectedCategories.value.length === 0 || selectedCategories.value.includes(product.category);
      const priceMatch = product.price >= minPrice.value && product.price <= maxPrice.value;
      return categoryMatch && priceMatch;
    });
  });
  
  const applyFilters = () => {
    // This function is called when the "Apply Filters" button is clicked
    // The filteredProducts computed property will automatically update
  };
  
  const addToCart = (product) => {
    // Implement add to cart functionality here
    console.log(`Added ${product.name} to cart`);
    // You might want to emit an event or call a store action here
  };
  </script>