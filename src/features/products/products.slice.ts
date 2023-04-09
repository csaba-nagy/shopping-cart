import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '../../app/store'
import type { ActionType } from '../shared/types'
import { getProducts } from './products.thunks'
import type { ProductsPayload, ProductsStateWithError } from './types'

const initialState: ProductsStateWithError = {
  products: [],
  isLoading: true,
  error: {
    message: null,
  },
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: ActionType<ProductsPayload>) => {
      state.products = action.payload.products
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.products = payload
      })
      .addCase(getProducts.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = payload!
      })
  },
})

export function selectProducts(state: RootState) {
  return state.products
}

export const { setProducts } = productsSlice.actions

export default productsSlice.reducer
