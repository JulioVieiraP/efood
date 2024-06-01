import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Cardapio } from '../../pages/Home'

type CartState = {
  items: Cardapio[]
  isOpen: boolean
  isOpenModal: boolean
  selectedItem: Cardapio | null
  isConfirme: boolean
  isCart: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isOpenModal: false,
  isConfirme: false,
  selectedItem: null,
  isCart: true
}

const Cart = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<Cardapio>) => {
      const item = state.items.find((item) => item.id === payload.id)
      if (item) {
        alert('item ja adicionado ao carrinho')
      } else state.items.push(payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    remove: (state, { payload }: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== payload)
    },
    openModal: (state, { payload }: PayloadAction<Cardapio>) => {
      state.isOpenModal = true
      state.selectedItem = payload
    },
    closeModal: (state) => {
      state.isOpenModal = false
      state.selectedItem = null
    },
    openCheckout: (state) => {
      state.isConfirme = true
      state.isCart = false
    },
    openCart: (state) => {
      state.isCart = true
      state.items = []
    }
  }
})

export const {
  add,
  remove,
  open,
  close,
  openModal,
  closeModal,
  openCheckout,
  openCart
} = Cart.actions

export default Cart.reducer
