<template>
  <footer class="bg-gray-800 text-white py-8 mt-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">About Us</h3>
          <p class="text-gray-400">
            {{ storeName }} is your one-stop shop for all your online shopping
            needs. We offer a wide range of high-quality products at competitive
            prices.
          </p>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <router-link
                to="/faq"
                class="text-gray-400 hover:text-white transition duration-300"
                >FAQ</router-link
              >
            </li>
            <li>
              <router-link
                to="/shipping"
                class="text-gray-400 hover:text-white transition duration-300"
                >Shipping</router-link
              >
            </li>
            <li>
              <router-link
                to="/returns"
                class="text-gray-400 hover:text-white transition duration-300"
                >Returns</router-link
              >
            </li>
            <li>
              <router-link
                to="/privacy"
                class="text-gray-400 hover:text-white transition duration-300"
                >Privacy Policy</router-link
              >
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
          <ul class="space-y-2 text-gray-400">
            <li class="flex items-center">
              <MapPinIcon class="w-5 h-5 mr-2" /> 123 E-commerce St, Web City,
              12345
            </li>
            <li class="flex items-center">
              <PhoneIcon class="w-5 h-5 mr-2" /> (123) 456-7890
            </li>
            <li class="flex items-center">
              <MailIcon class="w-5 h-5 mr-2" /> support@vueboutique.com
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Follow Us</h3>
          <div class="flex space-x-4">
            <a
              href="#"
              class="text-gray-400 hover:text-white transition duration-300"
              ><FacebookIcon class="w-6 h-6"
            /></a>
            <a
              href="#"
              class="text-gray-400 hover:text-white transition duration-300"
              ><TwitterIcon class="w-6 h-6"
            /></a>
            <a
              href="#"
              class="text-gray-400 hover:text-white transition duration-300"
              ><InstagramIcon class="w-6 h-6"
            /></a>
            <a
              href="#"
              class="text-gray-400 hover:text-white transition duration-300"
              ><LinkedinIcon class="w-6 h-6"
            /></a>
          </div>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
        <p>
          &copy; {{ new Date().getFullYear() }} {{ storeName }}. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from 'lucide-vue-next'

defineProps({
  storeName: {
    type: String,
    required: true,
  },
})
</script>
