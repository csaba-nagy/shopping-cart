export interface Product {
  id: string
  title: string
  price: number
  description: string
  thumbnail: string
  images: string
}

export interface ProductsState {
  products: Product[]
  isLoading: boolean
}

export interface ProductsStateWithError extends ProductsState {
  error: ErrorInterface
}

export interface ErrorInterface {
  status?: number
  message: string | null
}

export interface ProductsPayload {
  products: Product[]
}
