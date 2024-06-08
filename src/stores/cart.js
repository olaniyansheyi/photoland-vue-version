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
  actions: {
    handleAddToCart(currentProduct) {
      const newItem = {
        id: currentProduct.id,
        name: currentProduct.name,
        image: currentProduct.image,
        unitPrice: currentProduct.originalPrice,
        quantity: 1,
        totalPrice: this.cart?.map((item) => item.quantity * item.unitPrice)
      }
      this.cart.push(newItem)
      this.inCart = !this.inCart
      console.log(typeof this.cart)
    }
  },

  getters: {
    checkInCart: (state) => (product) => {
      return state.cart?.some((item) =>
        item.id === product.id ? (state.inCart = true) : (state.inCart = false)
      )
    }
  }
})
