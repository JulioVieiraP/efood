import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Cardapio } from '../../pages/Home'

type CartState = {
  items: Cardapio[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const Cart = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<Cardapio>) => {
      state.items.push(payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    remove: (state, { payload }: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== payload)
    }
  }
})

export const { add, remove, open, close } = Cart.actions

export default Cart.reducer
