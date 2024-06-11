import { defineStore } from 'pinia'
import supabase from '@/services/supabase'

export const useOrderStore = defineStore('order', {
  // Data
  state: () => ({
    isLoading: false,
    error: ''
  }),
  actions: {
    async createOrder(newOrder) {
      try {
        this.isLoading = true
        const { data, error } = await supabase
          .from('order')
          .insert([newOrder])
          .select('id')
          .single()

        if (error) {
          throw new Error('order could not be created')
        }

        return data
      } catch (error) {
        this.error = error
        console.log(this.error)
      } finally {
        this.isLoading = false
      }
    }
  },

  getters: {}
})
