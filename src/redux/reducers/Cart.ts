import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Cardapio } from '../../pages/Home'

type CartState = {
  items: Cardapio[]
  isOpen: boolean
  isOpenModal: boolean
  selectedItem: Cardapio | null
  isCart: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isOpenModal: false,
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
    openCart: (state) => {
      state.isCart = initialState.isCart
      state.items = []
    },
    closeCart: (state) => {
      state.isCart = false
    },
    backCart: (state) => {
      state.isCart = initialState.isCart
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
  openCart,
  closeCart,
  backCart
} = Cart.actions

export default Cart.reducer
