<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <main class="flex-grow">
      <!-- Hero Section -->
      <section class="bg-blue-600 text-white py-20">
        <div class="container mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">
            Welcome to {{ storeName }}
          </h1>
          <p class="text-xl mb-8">
            Discover stylish clothes at unbeatable prices!
          </p>
          <router-link
            to="/products"
            class="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
          >
            Shop Now
          </router-link>
        </div>
      </section>

      <!-- Featured Products Section -->
      <section id="featured-products" class="py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-2xl font-bold text-gray-900 mb-8">
            Featured Products
          </h2>
          <div
            class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10"
          >
            <ProductCard
              v-for="product in featuredProducts"
              :key="product.id"
              :product="product"
              @add-to-cart="addToCart"
            />
          </div>
        </div>
      </section>

      <!-- Categories Section -->
      <section class="bg-gray-200 py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Shop by Category
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div
              v-for="category in categories"
              :key="category.id"
              class="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105"
            >
              <img
                :src="category.image"
                :alt="category.name"
                class="w-full h-48 object-cover object-center"
              />
              <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-800 text-center">
                  {{ category.name }}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Special Offer Section -->
      <section
        class="py-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white"
      >
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-3xl font-semibold mb-4">Special Offer!</h2>
          <p class="text-xl mb-8">
            Get 20% off on all summer collection. Use code: SUMMER20
          </p>
          <router-link
            to="/products"
            class="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
          >
            Shop Now
          </router-link>
        </div>
      </section>

      <!-- Testimonials Section -->
      <section class="py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-semibold text-gray-800 mb-8 text-center">
            What Our Customers Say
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              v-for="testimonial in testimonials"
              :key="testimonial.id"
              class="bg-white rounded-lg shadow-md p-6"
            >
              <p class="text-gray-600 mb-4">"{{ testimonial.text }}"</p>
              <div class="flex items-center">
                <img
                  :src="testimonial.avatar"
                  :alt="testimonial.name"
                  class="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 class="font-semibold text-gray-800">
                    {{ testimonial.name }}
                  </h4>
                  <p class="text-gray-600">{{ testimonial.title }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <PageFooter :store-name="storeName" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import PageFooter from '@/components/PageFooter.vue'
import ProductCard from '@/components/ProductCard.vue'

const storeName = ref('Vue Clothing Boutique')
const cartStore = useCartStore()

const featuredProducts = ref([
  {
    id: 1,
    name: 'Classic Hoodie',
    price: 89.99,
    image: '/hood.webp',
  },
  {
    id: 2,
    name: 'Slim Fit Shirt',
    price: 59.99,
    image: '/tsh.webp',
  },
  {
    id: 3,
    name: 'Casual Cotton T-Shirt',
    price: 24.99,
    image: '/tsh2.webp',
  },
  {
    id: 3,
    name: 'Casual Cotton T-Shirt',
    price: 24.99,
    image: '/tsh3.jpg',
  },
])

const categories = ref([
  {
    id: 1,
    name: 'Jackets',
    image: 'jackets.jpg',
  },
  {
    id: 2,
    name: 'Shirts',
    image: 'tsh.jpg',
  },
  {
    id: 3,
    name: 'Pants',
    image: 'pants.jpg',
  },
  {
    id: 4,
    name: 'Accessories',
    image: 'acc.jpg',
  },
])

const testimonials = ref([
  {
    id: 1,
    name: 'John Doe',
    title: 'Fashion Enthusiast',
    text: 'The quality of clothes here is outstanding. I love my new jacket!',
    avatar: '/placeholder.svg?height=100&width=100',
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Loyal Customer',
    text: 'Always find the latest trends here. The fit is always perfect!',
    avatar: '/placeholder.svg?height=100&width=100',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    title: 'Style Blogger',
    text: 'This boutique is my go-to for unique, stylish pieces. Highly recommended!',
    avatar: '/placeholder.svg?height=100&width=100',
  },
])

const addToCart = product => {
  cartStore.addItem(product)
}
</script>

<style scoped>
/* Add any additional custom styles here */
</style>
