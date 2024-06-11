import { defineStore } from 'pinia'
import supabase from '@/services/supabase'
import { useToast } from 'vue-toastification'

const toast = useToast()

export const useOrderStore = defineStore('order', {
  // Data
  state: () => ({
    isLoading: false
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
          toast.error('order could not be created')
        }

        return data
      } catch (error) {
        console.error(error)
      } finally {
        this.isLoading = false
      }
    }
  },

  getters: {}
})
