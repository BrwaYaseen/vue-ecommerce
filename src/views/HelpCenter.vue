<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Help Center</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Production Section -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-semibold mb-4">How Our Products Are Made</h2>
        <div class="space-y-4">
          <div
            v-for="(step, index) in productionSteps"
            :key="index"
            class="flex items-start"
          >
            <div
              class="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center mr-4"
            >
              {{ index + 1 }}
            </div>
            <div>
              <h3 class="font-semibold mb-2">{{ step.title }}</h3>
              <p class="text-gray-600">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Delivery Section -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-semibold mb-4">Delivery Information</h2>
        <div class="space-y-4">
          <div v-for="(info, index) in deliveryInfo" :key="index">
            <h3 class="font-semibold mb-2">{{ info.title }}</h3>
            <p class="text-gray-600">{{ info.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="mt-12">
      <h2 class="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
      <div class="space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="bg-white rounded-lg shadow-md p-6"
        >
          <h3 class="font-semibold mb-2">{{ faq.question }}</h3>
          <p class="text-gray-600">{{ faq.answer }}</p>
        </div>
      </div>
    </div>

    <!-- Contact Section -->
    <div class="mt-12 text-center">
      <h2 class="text-2xl font-semibold mb-4">Still Have Questions?</h2>
      <p class="mb-4">Our customer support team is here to help!</p>
      <a
        href="mailto:support@yourstore.com"
        class="inline-block bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300"
      >
        Contact Support
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const productionSteps = ref([
  {
    title: 'Design',
    description:
      "Our team of designers creates unique, patriotic designs that resonate with our customers' values.",
  },
  {
    title: 'Material Selection',
    description:
      'We carefully select high-quality, durable materials to ensure comfort and longevity of our products.',
  },
  {
    title: 'Printing',
    description:
      'Using state-of-the-art printing technology, we apply our designs to the garments with vibrant, long-lasting results.',
  },
  {
    title: 'Quality Control',
    description:
      'Each item undergoes rigorous quality checks to meet our high standards before being approved for sale.',
  },
  {
    title: 'Packaging',
    description:
      'Products are carefully packaged to ensure they reach you in perfect condition.',
  },
])

const deliveryInfo = ref([
  {
    title: 'Shipping Methods',
    description:
      'We offer standard shipping (5-7 business days) and express shipping (2-3 business days) options for all domestic orders.',
  },
  {
    title: 'Order Processing',
    description:
      'Orders are typically processed within 1-2 business days before being handed over to our shipping partners.',
  },
  {
    title: 'Tracking',
    description:
      "Once your order is shipped, you'll receive a tracking number via email to monitor your package's journey.",
  },
  {
    title: 'International Shipping',
    description:
      'We currently ship to select countries. International shipping times may vary and additional customs fees may apply.',
  },
])

const faqs = ref([
  {
    question: 'How do I care for my garments?',
    answer:
      'We recommend washing our garments in cold water and hanging them to dry for best results. Avoid using bleach or harsh detergents to preserve the print quality.',
  },
  {
    question: 'What if my order arrives damaged?',
    answer:
      "In the rare event that your order arrives damaged, please contact our customer support team within 48 hours of receipt. We'll be happy to arrange a replacement or refund.",
  },
  {
    question: "Can I modify or cancel my order after it's been placed?",
    answer:
      "We process orders quickly to ensure fast shipping. If you need to modify or cancel your order, please contact us immediately. We'll do our best to accommodate your request, but we can't guarantee changes once the order has been processed.",
  },
  {
    question: 'Do you offer returns or exchanges?',
    answer:
      'Yes, we offer returns and exchanges within 30 days of purchase for unworn, unwashed items in their original condition. Please refer to our Returns Policy for more details.',
  },
])
</script>
