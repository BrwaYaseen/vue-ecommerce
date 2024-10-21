<template>
  <div id="app">
    <NavBar :store-name="storeName" :cart="cart" />
    <ProductsPage />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'
import ProductsPage from './components/ProductsPage.vue'

const storeName = ref('Vue Boutique')
const cart = ref([])
</script>
