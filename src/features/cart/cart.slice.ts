import { createSlice } from '@reduxjs/toolkit'

interface CartState {
  cartItems: CartItemType[]
  amount: number
  total: number
  isLoading: boolean
}

export interface CartItemType {
  id: string
  title: string
  amount: number
  price: number
  thumbnail: string
}

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
    addToCart: (state, action: { payload: CartItemType }) => {
      const cartItem = state.cartItems.find(item => item.id === action.payload.id)

      if (cartItem) {
        cartItem.amount += 1
        return
      }

      state.cartItems = [...state.cartItems, action.payload]
    },
    emptyCart: (state) => {
      state.cartItems = []
    },
    toggleAmount: (state, action: { payload: { id: string; method: 'increase' | 'decrease' } }) => {
      const cartItem = state.cartItems.find(item => item.id === action.payload.id)

      if (cartItem && action.payload.method === 'increase')
        cartItem.amount += 1

      if (cartItem && action.payload.method === 'decrease')
        cartItem.amount -= 1
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
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
