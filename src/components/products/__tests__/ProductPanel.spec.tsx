import { fireEvent } from '@testing-library/react'
import type { Product } from '../../../features/products/types'
import { renderWithProviders } from '../../../test/test-utils'
import ProductPanel from '../ProductPanel'

describe('ProductPanel', () => {
  const product: Product = {
    id: 'abc123',
    title: 'Test Product',
    price: 0,
    thumbnail: 'test',
    description: '',
    images: '',
  }

  it('should render the component properly', () => {
    const { title, price, thumbnail } = product

    const { getByText, getByRole, getByAltText } = renderWithProviders(<ProductPanel {...product} />)

    const thumbnailElement = getByAltText(title) as HTMLImageElement

    expect(thumbnailElement.src).toContain(thumbnail)

    expect(getByRole('heading', { level: 3 }).innerHTML).toEqual(title)

    expect(getByText(/^[0-9] [$]$/).innerHTML).toEqual(`${price} $`)
  })

  it('should add the product to the cart when clicking to "add the cart" button', () => {
    const { store, getByRole } = renderWithProviders(<ProductPanel {...product} />)

    // When the button is clicked more than once, the amount of the product in the cart will be increased
    const clickCount = 2

    for (let i = 0; i < clickCount; i++)
      fireEvent.click(getByRole('button', { name: /cart/i }))

    const { cart } = store.getState()
    const { cartItems } = cart
    const productInCart = cartItems[0]

    expect(cartItems.length).toEqual(1)
    expect(productInCart.id).toEqual(product.id)
    expect(productInCart.amount).toEqual(clickCount)
  })
})
