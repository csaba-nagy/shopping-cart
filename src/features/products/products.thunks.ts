import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { PRODUCTS_URL } from '../../app/api.constants'
import type { ErrorInterface, Product, ProductsPayload } from './types'

export const getProducts = createAsyncThunk<Product[], void, { rejectValue: ErrorInterface }>
('products/getProducts',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI

    try {
      const { data: { products } } = await axios.get<ProductsPayload>(PRODUCTS_URL)

      return products
    }
    catch (error) {
      if (axios.isAxiosError(error)) {
        const { message, response } = error

        return rejectWithValue({ status: response?.status ?? 500, message })
      }

      return rejectWithValue(({ message: 'Something went wrong...' }))
    }
  })
