import { createSlice } from '@reduxjs/toolkit'

import type { ActionType } from '../shared/types'
import type { CartItemType, CartState, ChangeAmountPayload, RemoveItemPayload } from './types'

export const initialState: CartState = {
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
      state.cartItems = initialState.cartItems
      state.amount = initialState.amount
      state.total = initialState.total
    },
    changeAmount: (state, { payload }: ActionType<ChangeAmountPayload>) => {
      if (!state.cartItems.length)
        return

      const cartItem = state.cartItems.find(item => item.id === payload.id)

      if (!cartItem)
        return

      let delta = 1

      if (payload.method === 'increase')
        delta *= 1

      if (payload.method === 'decrease')
        delta *= -1

      cartItem.amount += delta
    },
    removeItemFromCart: (state, { payload }: ActionType<RemoveItemPayload>) => {
      state.cartItems = state.cartItems.filter(item => item.id !== payload.id)
    },
    calculateTotal: (state) => {
      let amount = 0
      let total = 0

      if (!state.cartItems.length)
        return

      state.cartItems.forEach((item) => {
        amount += item.amount
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
  changeAmount,
  removeItemFromCart,
  calculateTotal,
} = cartSlice.actions

export default cartSlice.reducer
