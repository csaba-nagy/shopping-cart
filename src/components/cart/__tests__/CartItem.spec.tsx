import type { PreloadedState } from '@reduxjs/toolkit'
import userEvent from '@testing-library/user-event'
import type { CartItemType, CartState } from '../../../features/cart/types'
import { renderWithProviders } from '../../../test/test-utils'
import CartItem from '../CartItem'
import { setupStore } from '../../../app/store'
import { mockedCartItem, mockedCartState } from './mocks/cart.mocks'

describe('CartItem', () => {
  const user = userEvent.setup()

  const render = (cartItem: CartItemType, state?: PreloadedState<CartState>) => {
    const store = state
      ? setupStore({ cart: state })
      : undefined

    return renderWithProviders(<CartItem {...cartItem}/>, { store })
  }

  it('should render the component properly', () => {
    const {
      getByRole,
      getByAltText,
      getByText,
    } = render(mockedCartItem)

    const { title, thumbnail, price, amount } = mockedCartItem

    const thumbnailElement = getByAltText(title) as HTMLImageElement

    expect(thumbnailElement.src).toContain(thumbnail)

    expect(getByText(title)).toBeInTheDocument()

    expect(getByText(/^[0-9][$]$/).innerHTML).toEqual(`${price}$`)

    expect(Number(getByRole('amount').innerHTML)).toEqual(amount)
  })

  it('should increase the amount if the "+" button is clicked', async () => {
    const { getByRole, store } = render(mockedCartItem, mockedCartState)
    const { cart } = store.getState()
    const { cartItems } = cart

    const { amount } = mockedCartItem

    expect(cartItems.length).toBeGreaterThan(0)

    expect(cartItems[0].amount).toEqual(amount)

    await user.click(getByRole('button', { name: '+' }))

    // TODO: refactor needed
    expect(store.getState().cart.cartItems[0].amount).toEqual(amount + 1)
  })

  it('should decrease the amount if the "-" button is clicked', async () => {
    // Need to increase the default amount because if the value is 0 the product is removed from cart
    const mockedCartItemWithIncreasedAmount: CartItemType = {
      ...mockedCartItem,
      amount: 2,
    }

    const { getByRole, store } = render(
      mockedCartItemWithIncreasedAmount,
      {
        ...mockedCartState,
        cartItems: [
          mockedCartItemWithIncreasedAmount,
        ],
      },
    )

    const { cart } = store.getState()
    const { cartItems } = cart

    const { amount } = cartItems[0]

    expect(cartItems.length).toBeGreaterThan(0)

    expect(amount).toEqual(2)

    await user.click(getByRole('button', { name: '-' }))

    // TODO: refactor needed
    expect(store.getState().cart.cartItems[0].amount).toEqual(amount - 1)
  })

  it('should remove the item from the cart when it\'s amount has been decreased to 0',
    async () => {
      const { getByRole, store } = render(mockedCartItem, mockedCartState)

      expect(store.getState().cart.cartItems.length).toBeGreaterThan(0)

      await user.click(getByRole('button', { name: '-' }))

      // TODO: refactor needed
      expect(store.getState().cart.cartItems.length).toEqual(0)
    })
})
