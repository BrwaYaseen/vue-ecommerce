// stores/product.js
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
  }),
  getters: {
    featuredProducts: state => state.products.filter(p => p.featured),
    getProductById: state => id => state.products.find(p => p.id === id),
  },
  actions: {
    fetchProducts() {
      // Logic to fetch products from API
    },
    // eslint-disable-next-line no-unused-vars
    updateProduct(product) {
      // Logic to update a product
    },
    // Other product-related actions...
  },
})
