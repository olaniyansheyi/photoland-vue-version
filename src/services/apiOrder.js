import axios from 'axios'

export async function createOrder(newOrder) {
  try {
    const response = await axios.post('YOUR_SUPABASE_ENDPOINT/order', newOrder)
    return response.data
  } catch (error) {
    throw new Error('Order could not be created')
  }
}
