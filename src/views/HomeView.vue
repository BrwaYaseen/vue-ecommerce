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
            Discover amazing products at unbeatable prices!
          </p>
          <a
            href="#featured-products"
            class="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
            >Shop Now</a
          >
        </div>
      </section>

      <!-- Featured Products Section -->
      <section id="featured-products" class="py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Featured Products
          </h2>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            <div
              v-for="product in featuredProducts"
              :key="product.id"
              class="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105"
            >
              <img
                :src="product.image"
                :alt="product.name"
                class="w-full h-48 object-cover"
              />
              <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-800 mb-2">
                  {{ product.name }}
                </h3>
                <p class="text-gray-600 mb-4">
                  ${{ product.price.toFixed(2) }}
                </p>
                <Button
                  @click="addToCart(product)"
                  class="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out flex items-center justify-center"
                >
                  <PlusIcon class="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
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
                class="w-full h-32 object-cover"
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
            Get 20% off on all products. Use code: SUMMER20
          </p>
          <a
            href="#"
            class="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
            >Shop Now</a
          >
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
import { PlusIcon } from 'lucide-vue-next'
import PageFooter from '@/components/PageFooter.vue'
import { Button } from '@/components/ui/button'

const storeName = ref('Vue Boutique')

const featuredProducts = ref([
  {
    id: 1,
    name: 'Elegant Watch',
    price: 199.99,
    image: '/placeholder.svg?height=300&width=300',
  },
  {
    id: 2,
    name: 'Designer Sunglasses',
    price: 129.99,
    image: '/placeholder.svg?height=300&width=300',
  },
  {
    id: 3,
    name: 'Leather Wallet',
    price: 79.99,
    image: '/placeholder.svg?height=300&width=300',
  },
  {
    id: 4,
    name: 'Wireless Earbuds',
    price: 149.99,
    image: '/placeholder.svg?height=300&width=300',
  },
])

const categories = ref([
  {
    id: 1,
    name: 'Electronics',
    image: '/placeholder.svg?height=200&width=200',
  },
  { id: 2, name: 'Clothing', image: '/placeholder.svg?height=200&width=200' },
  {
    id: 3,
    name: 'Home & Garden',
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    id: 4,
    name: 'Sports & Outdoors',
    image: '/placeholder.svg?height=200&width=200',
  },
])

const testimonials = ref([
  {
    id: 1,
    name: 'John Doe',
    title: 'Happy Customer',
    text: 'Great products and excellent service!',
    avatar: '/placeholder.svg?height=100&width=100',
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Loyal Shopper',
    text: 'Always find what I need here. Highly recommended!',
    avatar: '/placeholder.svg?height=100&width=100',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    title: 'Tech Enthusiast',
    text: 'The best place for all my gadget needs!',
    avatar: '/placeholder.svg?height=100&width=100',
  },
])

const cart = ref([])

const addToCart = product => {
  cart.value.push({ ...product, id: Date.now() }) // Add a unique id for each cart item
}
</script>

<style scoped>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

/* Add any additional custom styles here */
</style>
