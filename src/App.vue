<script setup>
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'

const storeName = ref('Vue Store')
const cart = ref([])
</script>

<template>
  <div id="app">
    <NavBar :store-name="storeName" :cart="cart" />
    <router-view></router-view>
  </div>
</template>

<style>
/* You can add any global styles here if needed */
</style>
