import { createSlice } from '@reduxjs/toolkit'

type CheckoutState = {
  isDelivery: boolean
  isPayment: boolean
  orderPlaced: boolean
}

const initialState: CheckoutState = {
  isDelivery: true,
  isPayment: false,
  orderPlaced: false
}

const checkoutSlice = createSlice({
  name: 'Checkout',
  initialState,
  reducers: {
    setPayment: (state) => {
      state.isDelivery = false
      state.isPayment = true
    },
    confimeOrder: (state) => {
      state.isDelivery = false
      state.isPayment = false
      state.orderPlaced = true
    },
    closeAll: (state) => {
      state.isDelivery = false
      state.isPayment = false
      state.orderPlaced = false
    }
  }
})

export const { setPayment, confimeOrder, closeAll } = checkoutSlice.actions

export default checkoutSlice.reducer
