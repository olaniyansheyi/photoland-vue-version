<script setup>
import { ref } from 'vue'
import { useOrderStore } from '@/stores/order'
import { useCartStore } from '@/stores/cart'

const orderStore = useOrderStore()
const cartStore = useCartStore()

const name = ref(null)
const address = ref(null)
const phoneNo = ref(null)

const handleSubmitOrder = function () {
  if (!name.value || !address.value || !phoneNo.value) {
    toast.error('please fill the form with your correcr details')
  }

  if (cartStore.cart.length === 0) {
    return cartStore.handleToggleCart()
  }
}
</script>

<template>
  <div class="w-full flex justify-center items-center h-[screen] px-5">
    <div
      class="bg-gradient-to-t from-[#1F2126] to-[#33363D] drop-shadow-2xl rounded-lg py-12 px-10 text-white"
    >
      <form
        @submit.prevent="
          () => {
            handleSubmitOrder()
          }
        "
        class="flex flex-col items-start justify-end gap-y-6 w-full"
      >
        <h4 class="text-center mx-auto font-semibold text-2xl text-accent tracking-wide">
          Ready to order? Let go!
        </h4>
        <span class="flex flex-col">
          <label class="font-normal text-lg text-accent tracking-wide"> Full Name </label>
          <input
            v-model="name"
            class="w-full text-primary py-2 mt-2 outline-none px-5 rounded-lg"
            type="text"
          />
        </span>
        <span class="flex flex-col">
          <label class="font-normal text-lg text-accent tracking-wide"> Phoner Number </label>
          <input
            v-model="phoneNo"
            class="w-auto text-primary py-2 mt-2 outline-none px-5 rounded-lg"
            type="number"
            required
          />
        </span>
        <span class="flex flex-col">
          <label class="font-normal text-lg text-accent tracking-wide"> Address </label>
          <input
            v-model="address"
            class="w-auto text-primary py-2 mt-2 outline-none px-5 rounded-lg"
            type="text"
          />
        </span>
        <button
          type="submit"
          class="text-primary bg-accent hover:bg-accent-hover px-5 py-2 font-semibold rounded-lg mt-3"
        >
          {{ orderStore.isLoading ? 'placing order....' : 'Order Now' }}
        </button>
      </form>
    </div>
  </div>
</template>
