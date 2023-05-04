import userEvent from '@testing-library/user-event'
import { setupStore } from '../../../app/store'
import { renderWithProviders } from '../../../test/test-utils'
import CartButtons from '../CartButtons'
import { mockedCartState } from './mocks/cart.mocks'

describe('CartButtons', () => {
  const user = userEvent.setup()

  it('should render the buttons properly', () => {
    const { getByRole } = renderWithProviders(<CartButtons />)

    expect(getByRole('button', { name: /clear cart/i })).toBeInTheDocument()

    // Checkout feature is not implemented, so the button should be disabled
    expect(getByRole('button', { name: /to checkout/i })).toBeDisabled()
  })

  it('should clear the cart if the "Clear Cart" button is clicked', async () => {
    const mockStore = setupStore({
      cart: mockedCartState,
    })

    const { store, getByRole } = renderWithProviders(<CartButtons />, { store: mockStore })

    const clearCartButton = getByRole('button', { name: /clear cart/i })

    // TODO: make a better solution
    expect(store.getState().cart.cartItems.length).toBeGreaterThan(0)

    // fireEvent.click(clearCartButton)

    // NOTE: userEvent is an alternative for fireEvent.
    await user.click(clearCartButton)

    expect(store.getState().cart.cartItems.length).toEqual(0)
  })
})
