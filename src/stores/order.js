import { defineStore } from 'pinia'
import supabase from '@/services/supabase'

export const useOrderStore = defineStore('order', {
  // Data
  state: () => ({
    currentOrderId: null
  }),
  actions: {
    setCurrentOrderId(orderId) {
      this.currentOrderId = orderId
    }
  },

  getters: {}
})
