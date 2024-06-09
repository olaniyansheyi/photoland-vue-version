import { defineStore } from 'pinia'

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
        quantity: 1
      }
      this.cart.push(newItem)
      console.log('Cart after adding new item:', this.cart)
      console.log('Type of cart:', typeof this.cart)
    },
    handleInCart(product) {
      this.checkInCart(product) ? (this.inCart = true) : (this.inCart = false)
    }
  },

  getters: {
    checkInCart: (state) => (product) => {
      return state.cart?.some((item) => item.id === product.id)
    }
  }
})
