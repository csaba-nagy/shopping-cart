import type { PreloadedState } from '@reduxjs/toolkit'
import type { CartItemType, CartState } from '../../../../features/cart/types'
import { initialState as cartInitialState } from '../../../../features/cart/cart.slice'

export const mockedCartItem: CartItemType = {
  id: 'abc-123',
  title: 'Test Product',
  price: 1.00,
  amount: 1,
  thumbnail: 'test/thumbnail',
}

export const mockedCartState: PreloadedState<CartState> = {
  ...cartInitialState,
  cartItems: [mockedCartItem],
}
