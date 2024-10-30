import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    searchQuery: '',
  }),
  getters: {
    filteredProducts: state => {
      const query = state.searchQuery.toLowerCase().trim()
      if (!query) return state.products

      return state.products.filter(product => {
        const matchName = product.name.toLowerCase().includes(query)
        const matchCategory = product.category.toLowerCase().includes(query)
        return matchName || matchCategory
      })
    },
  },
  actions: {
    setSearchQuery(query) {
      this.searchQuery = query
    },
    async fetchProducts() {
      // In a real application, this would be an API call
      // For now, we'll use dummy data
      this.products = [
        {
          id: 1,
          name: 'CREW NECK',
          price: 60,
          category: 'Hoodies',
          image: 'hood.webp',
        },
        {
          id: 2,
          name: 'T-SHIRT',
          price: 35,
          category: 'T-Shirts',
          image: '/tsh.webp',
        },
        {
          id: 3,
          name: 'T-SHIRT 2',
          price: 35,
          category: 'T-Shirts',
          image: '/tsh2.webp',
        },
        {
          id: 4,
          name: 'HAT',
          price: 25,
          category: 'Hats',
          image: '/hat.webp',
        },
        {
          id: 5,
          name: 'PIN',
          price: 10,
          category: 'Accessories',
          image: '/pin.png',
        },
        // Add more products as needed
      ]
    },
  },
})
