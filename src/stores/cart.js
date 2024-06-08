import { defineStore } from 'pinia'
import supabase from '@/services/supabase'

export const useCartStore = defineStore('cart', {
  // Data
  state: () => ({
    cart: [],
    openCart: false,
    hasOrder: false,
    inCart: false
  }),
  actions: {},

  getters: {
    checkInCart: (state) => (product) => {
      return state.cart?.some((item) =>
        item.id === product.id ? (state.inCart = true) : (state.inCart = false)
      )
    }
  }
})
