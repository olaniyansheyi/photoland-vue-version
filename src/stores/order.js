import { defineStore } from 'pinia'
import supabase from '@/services/supabase'
import { useToast } from 'vue-toastification'
import { useRouter } from 'vue-router'

const toast = useToast()
const router = useRouter()

export const useOrderStore = defineStore('order', {
  // Data
  state: () => ({
    isLoading: false,
    currentOrderId: null
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
    },

    async getOrder(currentOrderId) {
      try {
        if (currentOrderId === null) {
          return router.push('/')
        }

        const { data, error } = await supabase
          .from('order')
          .select('*')
          .eq('id', currentOrderId)
          .single()

        if (error || !data) {
          throw new Error('order could not be fetched')
        }

        return data
      } catch (error) {
        console.error(error)
      } finally {
        this.isLoading = false
      }
    },
    handleSetCurrentOrderId(id) {
      this.currentOrderId = id
    }
  },

  getters: {}
})
