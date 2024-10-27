import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
  }),
  actions: {
    async fetchProducts() {
      // In a real application, this would be an API call
      // For now, we'll use dummy data
      this.products = [
        {
          id: 1,
          name: 'TRUMP HAT 2 CREW NECK',
          price: 60,
          category: 'Hoodies',
          image:
            'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/trump-hat-2-crew-neck-RFXxWb8JQxhXbwZXXXXXXXXXXX.jpg',
        },
        {
          id: 2,
          name: 'TRUMP HAT 2 T-SHIRT',
          price: 35,
          category: 'T-Shirts',
          image:
            'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/trump-hat-2-tshirt-RFXxWb8JQxhXbwZXXXXXXXXXXX.jpg',
        },
        {
          id: 3,
          name: 'TRUMP LIMO T-SHIRT',
          price: 35,
          category: 'T-Shirts',
          image:
            'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/trump-limo-tshirt-RFXxWb8JQxhXbwZXXXXXXXXXXX.jpg',
        },
        {
          id: 4,
          name: 'MAGA HAT',
          price: 25,
          category: 'Hats',
          image:
            'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/maga-hat-RFXxWb8JQxhXbwZXXXXXXXXXXX.jpg',
        },
        {
          id: 5,
          name: 'TRUMP 2024 PIN',
          price: 10,
          category: 'Accessories',
          image:
            'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/trump-2024-pin-RFXxWb8JQxhXbwZXXXXXXXXXXX.jpg',
        },
        // Add more products as needed
      ]
    },
  },
})
