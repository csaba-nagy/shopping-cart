import { createSlice } from '@reduxjs/toolkit'
import type { ActionType, CartItemType, CartState, ToggleMethod } from './types'

const initialState: CartState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }: ActionType<CartItemType>) => {
      const cartItem = state.cartItems.find(item => item.id === payload.id)

      if (cartItem) {
        cartItem.amount += 1
        return
      }

      state.cartItems = [...state.cartItems, payload]
    },
    emptyCart: (state) => {
      state.cartItems = []
    },
    toggleAmount: (state, { payload }: ActionType<{ id: string; method: ToggleMethod }>) => {
      const cartItem = state.cartItems.find(item => item.id === payload.id)

      if (!cartItem)
        return

      if (payload.method === 'increase')
        cartItem.amount += 1

      if (payload.method === 'decrease')
        cartItem.amount -= 1
    },
    removeItemFromCart: (state, { payload }: ActionType<{ id: string }>) => {
      state.cartItems = state.cartItems.filter(item => item.id !== payload.id)
    },
    calculateTotals: (state) => {
      let amount = 0
      let total = 0

      state.cartItems.forEach((item) => {
        amount += 1
        total += item.amount * item.price
      })

      state.amount = amount
      state.total = total
    },
  },
})

export const {
  addToCart,
  emptyCart,
  toggleAmount,
  removeItemFromCart,
  calculateTotals,
} = cartSlice.actions

export default cartSlice.reducer
