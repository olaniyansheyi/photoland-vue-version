import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  // Data
  state: () => ({
    cart: [],
    openCart: false,
    hasOrder: false,
    inCart: false,
    emptyCart: false,
    productQuantity: 1
  }),
  actions: {
    handleAddToCart(currentProduct) {
      const newItem = {
        id: currentProduct.id,
        name: currentProduct.name,
        image: currentProduct.image,
        unitPrice: currentProduct.originalPrice,
        quantity: this.productQuantity
      }
      this.cart.push(newItem)
      console.log('Cart after adding new item:', this.cart.value)
    },

    handleInCart(product) {
      this.checkInCart(product) ? (this.inCart = true) : (this.inCart = false)
    },

    handleToggleCart() {
      this.openCart = !this.openCart
    },

    handleDeleteCart(id) {
      this.cart.filter((item) => item.id !== id)
    },

    handleClearCart() {
      this.cart = []
    }
  },

  getters: {
    checkInCart: (state) => (product) => {
      return state.cart?.some((item) => item.id === product.id)
    }
  }
})
