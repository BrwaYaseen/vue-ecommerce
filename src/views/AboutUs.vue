<template>
  <div class="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
    <div class="container mx-auto px-4 py-16">
      <h1
        class="text-5xl font-extrabold text-center text-gray-800 mb-8 animate-fade-in-down"
      >
        About Us
      </h1>

      <div
        class="bg-white rounded-xl shadow-lg p-8 mb-12 transform hover:scale-105 transition-all duration-300 animate-fade-in"
      >
        <h2 class="text-3xl font-semibold text-gray-800 mb-6">Our Story</h2>
        <p class="text-gray-600 mb-4 leading-relaxed">
          Founded in 2023, our e-commerce store began with a simple mission: to
          provide high-quality products and exceptional customer service. What
          started as a small operation has grown into a thriving online
          marketplace, thanks to our dedicated team and loyal customers.
        </p>
        <p class="text-gray-600 mb-4 leading-relaxed">
          We believe in the power of e-commerce to connect people with the
          products they love. Our curated selection of items spans various
          categories, ensuring that there's something for everyone in our store.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div
          class="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300 animate-fade-in"
        >
          <h2 class="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h2>
          <p class="text-gray-600 leading-relaxed">
            We strive to offer our customers the best possible shopping
            experience, with a wide range of products, competitive prices, and
            outstanding customer support. Our goal is to become your go-to
            destination for all your online shopping needs.
          </p>
        </div>
        <div
          class="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300 animate-fade-in"
        >
          <h2 class="text-3xl font-semibold text-gray-800 mb-6">Our Vision</h2>
          <p class="text-gray-600 leading-relaxed">
            We envision a future where online shopping is seamless, enjoyable,
            and accessible to everyone. We're constantly innovating and
            improving our platform to make this vision a reality.
          </p>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-8 mb-12 animate-fade-in">
        <h2 class="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Our Team
        </h2>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          <div
            v-for="member in teamMembers"
            :key="member.name"
            class="text-center transform hover:scale-105 transition-all duration-300"
          >
            <img
              :src="member.avatar"
              :alt="member.name"
              class="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-lg"
            />
            <h3 class="font-semibold text-xl text-gray-800 mb-1">
              {{ member.name }}
            </h3>
            <p class="text-gray-600">{{ member.position }}</p>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-8 animate-fade-in">
        <h2 class="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Contact Us
        </h2>
        <p
          class="text-gray-600 mb-8 text-center max-w-2xl mx-auto leading-relaxed"
        >
          We're always here to help. If you have any questions, concerns, or
          feedback, please don't hesitate to reach out to us.
        </p>
        <div
          class="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12"
        >
          <div class="text-center">
            <div
              class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-blue-500"
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
            <h3 class="font-semibold text-lg text-gray-800 mb-2">Email</h3>
            <p class="text-gray-600">support@yourstore.com</p>
          </div>
          <div class="text-center">
            <div
              class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-green-500"
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
            <h3 class="font-semibold text-lg text-gray-800 mb-2">Phone</h3>
            <p class="text-gray-600">+1 (555) 123-4567</p>
          </div>
          <div class="text-center">
            <div
              class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-purple-500"
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
            <h3 class="font-semibold text-lg text-gray-800 mb-2">Address</h3>
            <p class="text-gray-600">123 E-commerce St, Web City, 12345</p>
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
    avatar: '/placeholder.svg?height=160&width=160',
  },
  {
    name: 'Jane Smith',
    position: 'CTO',
    avatar: '/placeholder.svg?height=160&width=160',
  },
  {
    name: 'Mike Johnson',
    position: 'Head of Marketing',
    avatar: '/placeholder.svg?height=160&width=160',
  },
  {
    name: 'Sarah Brown',
    position: 'Customer Support Lead',
    avatar: '/placeholder.svg?height=160&width=160',
  },
])
</script>

<style>
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -20px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in-down {
  animation: fadeInDown 0.5s ease-out;
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}
</style>
