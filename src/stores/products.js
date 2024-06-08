import { defineStore } from 'pinia'
import supabase from '@/services/supabase'

export const useProductsStore = defineStore('products', {
  // Data
  state: () => ({
    products: [],
    loading: false,
    error: null
  }),
  actions: {
    async getProducts() {
      this.loading = true
      const { data, error } = await supabase.from('products').select('*')
      if (error) {
        console.error(error)
        this.error = 'Products could not be loaded'
      } else {
        this.products = data
        console.log(data)
      }
      this.loading = false
    }
  },
  getters: {
    latestProduct: (state) => state.products.filter((product) => product.newArrival !== false)
  }
})
