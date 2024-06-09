<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FooterView from './components/FooterView.vue'
import HeaderView from './components/HeaderView.vue'
import Spinner from './components/Spinner.vue'
import CompleteCartOverview from './components/CompleteCartOverview.vue'
import { useProductsStore } from './stores/products'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()

const productsStore = useProductsStore()

productsStore.getProducts()
</script>

<template>
  <HeaderView />
  <RouterView />
  <FooterView />
  <Spinner v-if="productsStore.loading" />
  <CompleteCartOverview v-if="cartStore.openCart" />
</template>
