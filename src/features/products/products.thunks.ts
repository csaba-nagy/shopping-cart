import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { PRODUCTS_URL } from '../../app/api'
import type { ErrorInterface, Product } from './types'

export const getProducts = createAsyncThunk<Product[], void, { rejectValue: ErrorInterface }>
('products/getProducts', async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  try {
    const { data: { products } } = await axios.get(PRODUCTS_URL)

    const result = products.map((item: Required<Product>) => {
      const { id, title, price, description, thumbnail, images } = item

      return {
        id,
        title,
        price,
        description,
        thumbnail,
        images,
      }
    })

    return result
  }
  catch (error) {
    if (axios.isAxiosError(error)) {
      const { message, response } = error

      return rejectWithValue({ status: response?.status ?? 500, message })
    }

    return rejectWithValue(({ message: 'Something went wrong...' }))
  }
})
