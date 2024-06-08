<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FooterView from './components/FooterView.vue'
import HeaderView from './components/HeaderView.vue'
import Spinner from './components/Spinner.vue'
import { useProductsStore } from './stores/products'

const productsStore = useProductsStore()

productsStore.getProducts()
</script>

<template>
  <HeaderView />
  <RouterView />
  <FooterView />
  <Spinner v-if="productsStore.loading" />
</template>
