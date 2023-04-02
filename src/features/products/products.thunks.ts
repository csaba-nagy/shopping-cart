import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { PRODUCTS_URL } from '../../app/api'
import type { Product } from './products.slice'

export const getProducts = createAsyncThunk('products/getProducts', async () => {
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
    // TODO: set an error handler
    // eslint-disable-next-line no-console
    console.log(error)
  }
})
