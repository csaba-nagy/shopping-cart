import { createSelector } from '@reduxjs/toolkit'

import type { RootState } from '../../app/store'

function rootSelector(state: RootState) {
  return state.cart
}

export const selectCartItems = createSelector(
  rootSelector,
  state => state.cartItems,
)

export const selectHasCartItem = createSelector(
  rootSelector,
  state => state.cartItems.length > 0,
)

export const selectTotal = createSelector(
  rootSelector,
  state => state.total,
)

export const selectAmount = createSelector(
  rootSelector,
  state => state.amount,
)
