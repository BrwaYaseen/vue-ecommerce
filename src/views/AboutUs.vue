<template>
  <div
    class="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 min-h-screen py-12"
  >
    <div class="container mx-auto px-4">
      <h1 class="text-5xl font-extrabold text-center text-indigo-800 mb-12">
        About Us
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div
          class="bg-white rounded-lg shadow-lg p-8 border-l-8 border-indigo-500"
        >
          <h2 class="text-3xl font-semibold text-indigo-800 mb-4">Our Story</h2>
          <p class="text-gray-700 mb-4 leading-relaxed">
            Founded in 2023, our e-commerce store began with a simple mission:
            to provide high-quality products and exceptional customer service.
            What started as a small operation has grown into a thriving online
            marketplace, thanks to our dedicated team and loyal customers.
          </p>
          <p class="text-gray-700 leading-relaxed">
            We believe in the power of e-commerce to connect people with the
            products they love. Our curated selection of items spans various
            categories, ensuring that there's something for everyone in our
            store.
          </p>
        </div>
        <div class="grid grid-cols-1 gap-8">
          <div
            class="bg-white rounded-lg shadow-lg p-8 border-t-8 border-pink-500"
          >
            <h2 class="text-3xl font-semibold text-pink-700 mb-4">
              Our Mission
            </h2>
            <p class="text-gray-700 leading-relaxed">
              We strive to offer our customers the best possible shopping
              experience, with a wide range of products, competitive prices, and
              outstanding customer support. Our goal is to become your go-to
              destination for all your online shopping needs.
            </p>
          </div>
          <div
            class="bg-white rounded-lg shadow-lg p-8 border-b-8 border-purple-500"
          >
            <h2 class="text-3xl font-semibold text-purple-700 mb-4">
              Our Vision
            </h2>
            <p class="text-gray-700 leading-relaxed">
              We envision a future where online shopping is seamless, enjoyable,
              and accessible to everyone. We're constantly innovating and
              improving our platform to make this vision a reality.
            </p>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 class="text-3xl font-semibold text-indigo-800 mb-8 text-center">
          Our Team
        </h2>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div
            v-for="member in teamMembers"
            :key="member.name"
            class="text-center"
          >
            <div
              class="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-indigo-200"
            >
              <img
                :src="member.avatar"
                :alt="member.name"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="font-semibold text-xl text-indigo-700 mb-1">
              {{ member.name }}
            </h3>
            <p class="text-gray-600">{{ member.position }}</p>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 class="text-3xl font-semibold text-indigo-800 mb-8 text-center">
          Contact Us
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-medium text-gray-900">Email</h3>
              <p class="mt-1 text-gray-600">support@yourstore.com</p>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-medium text-gray-900">Phone</h3>
              <p class="mt-1 text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-medium text-gray-900">Address</h3>
              <p class="mt-1 text-gray-600">
                123 E-commerce St, Web City, 12345
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const teamMembers = ref([
  {
    name: 'John Doe',
    position: 'CEO',
    avatar: '/placeholder.svg?height=128&width=128',
  },
  {
    name: 'Jane Smith',
    position: 'CTO',
    avatar: '/placeholder.svg?height=128&width=128',
  },
  {
    name: 'Mike Johnson',
    position: 'Head of Marketing',
    avatar: '/placeholder.svg?height=128&width=128',
  },
  {
    name: 'Sarah Brown',
    position: 'Customer Support Lead',
    avatar: '/placeholder.svg?height=128&width=128',
  },
])
</script>
