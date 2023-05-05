import { setupStore } from '../../../app/store'
import { renderWithProviders } from '../../../test/test-utils'
import Cart from '../Cart'
import { mockedCartState } from './mocks/cart.mocks'

describe('Cart', () => {
  it('should should show "cart is empty" message if there are no items in cart', () => {
    const { getByText } = renderWithProviders(<Cart />)

    expect(getByText(/cart is empty/i)).toBeInTheDocument()
  })

  it('should render every item in cart', () => {
    const store = setupStore({
      cart: mockedCartState,
    })

    const { getByText } = renderWithProviders(<Cart />, { store })

    const { cart } = store.getState()
    const { cartItems } = cart

    expect(cartItems.length).toBeGreaterThan(0)

    cartItems.forEach(
      cartItem => expect(getByText(cartItem.title)).toBeInTheDocument(),
    )
  })
})
