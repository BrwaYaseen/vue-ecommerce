<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="container mx-auto px-4 py-12">
      <h1 class="text-3xl font-extrabold text-gray-900 mb-8 text-center">
        Checkout
      </h1>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Checkout Form -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class="mb-8">
            <div class="flex items-center mb-4">
              <div
                class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-3"
              >
                1
              </div>
              <h2 class="text-2xl font-semibold text-gray-800">
                Shipping Information
              </h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  class="block text-sm font-medium text-gray-700 mb-1"
                  for="firstName"
                  >First Name</label
                >
                <input
                  type="text"
                  id="firstName"
                  v-model="shippingInfo.firstName"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  class="block text-sm font-medium text-gray-700 mb-1"
                  for="lastName"
                  >Last Name</label
                >
                <input
                  type="text"
                  id="lastName"
                  v-model="shippingInfo.lastName"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div class="md:col-span-2">
                <label
                  class="block text-sm font-medium text-gray-700 mb-1"
                  for="address"
                  >Address</label
                >
                <input
                  type="text"
                  id="address"
                  v-model="shippingInfo.address"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  class="block text-sm font-medium text-gray-700 mb-1"
                  for="city"
                  >City</label
                >
                <input
                  type="text"
                  id="city"
                  v-model="shippingInfo.city"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  class="block text-sm font-medium text-gray-700 mb-1"
                  for="zipCode"
                  >ZIP Code</label
                >
                <input
                  type="text"
                  id="zipCode"
                  v-model="shippingInfo.zipCode"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div class="mb-8">
            <div class="flex items-center mb-4">
              <div
                class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-3"
              >
                2
              </div>
              <h2 class="text-2xl font-semibold text-gray-800">
                Payment Information
              </h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="md:col-span-2">
                <label
                  class="block text-sm font-medium text-gray-700 mb-1"
                  for="cardNumber"
                  >Card Number</label
                >
                <input
                  type="text"
                  id="cardNumber"
                  v-model="paymentInfo.cardNumber"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  class="block text-sm font-medium text-gray-700 mb-1"
                  for="expirationDate"
                  >Expiration Date</label
                >
                <input
                  type="text"
                  id="expirationDate"
                  v-model="paymentInfo.expirationDate"
                  placeholder="MM/YY"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  class="block text-sm font-medium text-gray-700 mb-1"
                  for="cvv"
                  >CVV</label
                >
                <input
                  type="text"
                  id="cvv"
                  v-model="paymentInfo.cvv"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <button
            @click="placeOrder"
            class="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out font-semibold text-lg"
          >
            Place Order
          </button>
        </div>

        <!-- Order Summary -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-6">
            Order Summary
          </h2>
          <div class="space-y-4 mb-6">
            <div
              v-for="item in cart"
              :key="item.id"
              class="flex justify-between items-center border-b pb-4"
            >
              <div class="flex items-center">
                <img
                  :src="item.image"
                  :alt="item.name"
                  class="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div>
                  <h3 class="font-medium text-gray-800">{{ item.name }}</h3>
                  <p class="text-sm text-gray-500">
                    Quantity: {{ item.quantity }}
                  </p>
                </div>
              </div>
              <p class="font-medium text-gray-800">
                ${{ (item.price * item.quantity).toFixed(2) }}
              </p>
            </div>
          </div>
          <div class="border-t pt-4">
            <div
              class="flex justify-between items-center font-semibold text-lg text-gray-800"
            >
              <p>Total</p>
              <p>${{ cartTotal.toFixed(2) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const shippingInfo = ref({
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  zipCode: '',
})

const paymentInfo = ref({
  cardNumber: '',
  expirationDate: '',
  cvv: '',
})

// Sample cart data (replace with your actual cart data)
const cart = ref([
  {
    id: 1,
    name: 'Product 1',
    price: 29.99,
    quantity: 2,
    image: '/placeholder.svg?height=64&width=64',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 49.99,
    quantity: 1,
    image: '/placeholder.svg?height=64&width=64',
  },
])

const cartTotal = computed(() => {
  return cart.value.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )
})

const placeOrder = () => {
  // Implement order placement logic here
  console.log('Order placed!', {
    shippingInfo: shippingInfo.value,
    paymentInfo: paymentInfo.value,
    cart: cart.value,
  })
  // You might want to send this data to your backend, clear the cart, and navigate to a confirmation page
}
</script>
