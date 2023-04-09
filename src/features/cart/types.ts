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

export interface ChangeAmountPayload {
  id: string
  method: ToggleMethod
}

export interface RemoveItemPayload {
  id: string
}

type ToggleMethod =
| 'increase'
| 'decrease'
