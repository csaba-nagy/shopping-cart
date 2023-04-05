export interface CartState {
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

export type ToggleMethod = 'increase' | 'decrease'

export interface ActionType<T> {
  payload: T
}
