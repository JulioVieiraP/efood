import { createSlice } from '@reduxjs/toolkit'

type CheckoutState = {
  isDelivery: boolean
  isPayment: boolean
  orderPlaced: boolean
  isConfirme: boolean
}

const initialState: CheckoutState = {
  isDelivery: false,
  isPayment: false,
  orderPlaced: false,
  isConfirme: false
}

const checkoutSlice = createSlice({
  name: 'Checkout',
  initialState,
  reducers: {
    openCheckout: (state) => {
      state.isConfirme = true
      state.isDelivery = true
    },
    setPayment: (state) => {
      state.isDelivery = false
      state.isPayment = true
    },
    confimeOrder: (state) => {
      state.isDelivery = false
      state.isPayment = false
      state.orderPlaced = true
    },
    resetCheckout: (state) => {
      state.isDelivery = initialState.isDelivery
      state.isPayment = initialState.isPayment
      state.orderPlaced = initialState.orderPlaced
    }
  }
})

export const { openCheckout, setPayment, confimeOrder, resetCheckout } =
  checkoutSlice.actions

export default checkoutSlice.reducer
