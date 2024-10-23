<template>
  <div class="bg-gray-100 min-h-screen py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold text-center text-gray-800 mb-8">
        Checkout
      </h1>

      <!-- Checkout Steps -->
      <div class="flex justify-center mb-8">
        <div class="flex items-center">
          <div
            v-for="(step, index) in steps"
            :key="step"
            class="flex items-center"
          >
            <div
              :class="`w-8 h-8 rounded-full flex items-center justify-center ${currentStep > index ? 'bg-green-500 text-white' : currentStep === index ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`"
            >
              {{ index + 1 }}
            </div>
            <div
              v-if="index < steps.length - 1"
              class="w-16 h-1 mx-2"
              :class="currentStep > index ? 'bg-green-500' : 'bg-gray-300'"
            ></div>
          </div>
        </div>
      </div>

      <!-- Checkout Form -->
      <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
        <!-- Shipping Information -->
        <div v-if="currentStep === 0">
          <h2 class="text-2xl font-semibold mb-4">Shipping Information</h2>
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
                class="w-full px-3 py-2 border rounded-md"
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
                class="w-full px-3 py-2 border rounded-md"
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
                class="w-full px-3 py-2 border rounded-md"
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
                class="w-full px-3 py-2 border rounded-md"
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
                class="w-full px-3 py-2 border rounded-md"
              />
            </div>
          </div>
        </div>

        <!-- Payment Information -->
        <div v-if="currentStep === 1">
          <h2 class="text-2xl font-semibold mb-4">Payment Information</h2>
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
                class="w-full px-3 py-2 border rounded-md"
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
                class="w-full px-3 py-2 border rounded-md"
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
                class="w-full px-3 py-2 border rounded-md"
              />
            </div>
          </div>
        </div>

        <!-- Order Review -->
        <div v-if="currentStep === 2">
          <h2 class="text-2xl font-semibold mb-4">Review Your Order</h2>
          <div class="bg-gray-50 p-4 rounded-md mb-4">
            <h3 class="font-semibold mb-2">Shipping Address</h3>
            <p>{{ shippingInfo.firstName }} {{ shippingInfo.lastName }}</p>
            <p>{{ shippingInfo.address }}</p>
            <p>{{ shippingInfo.city }}, {{ shippingInfo.zipCode }}</p>
          </div>
          <div class="bg-gray-50 p-4 rounded-md">
            <h3 class="font-semibold mb-2">Payment Method</h3>
            <p>Card ending in {{ paymentInfo.cardNumber.slice(-4) }}</p>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="flex justify-between mt-8">
          <button
            v-if="currentStep > 0"
            @click="currentStep--"
            class="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition duration-300"
          >
            Previous
          </button>
          <button
            v-if="currentStep < 2"
            @click="currentStep++"
            class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          >
            Next
          </button>
          <button
            v-if="currentStep === 2"
            @click="placeOrder"
            class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
          >
            Place Order
          </button>
        </div>
      </div>

      <!-- Order Summary -->
      <div class="bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-semibold mb-4">Order Summary</h2>
        <div class="space-y-4">
          <div
            v-for="item in cart"
            :key="item.id"
            class="flex justify-between items-center"
          >
            <div>
              <h3 class="font-medium">{{ item.name }}</h3>
              <p class="text-sm text-gray-500">Quantity: {{ item.quantity }}</p>
            </div>
            <p class="font-medium">
              ${{ (item.price * item.quantity).toFixed(2) }}
            </p>
          </div>
        </div>
        <div class="border-t mt-4 pt-4">
          <div class="flex justify-between items-center font-semibold">
            <p>Total</p>
            <p>${{ cartTotal.toFixed(2) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const steps = ['Shipping', 'Payment', 'Review']
const currentStep = ref(0)

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
  { id: 1, name: 'Product 1', price: 29.99, quantity: 2 },
  { id: 2, name: 'Product 2', price: 49.99, quantity: 1 },
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
