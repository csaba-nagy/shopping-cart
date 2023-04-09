import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

function rootSelector(state: RootState) {
  return state.products
}

export const selectProducts = createSelector(
  rootSelector,
  state => state.products,
)

export const selectIsLoading = createSelector(
  rootSelector,
  state => state.isLoading,
)

export const selectError = createSelector(
  rootSelector,
  state => state.error,
)
