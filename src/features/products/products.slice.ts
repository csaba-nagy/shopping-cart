import { createSlice } from '@reduxjs/toolkit'

interface Product {
  id: string
  name: string
  price: number
  description: string
  img: string
}

interface ProductsState {
  products: Product[]
  isLoading: boolean
}

const initialState: ProductsState = {
  products: [],
  isLoading: true,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
})

export default productsSlice.reducer
