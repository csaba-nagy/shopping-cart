import EmptyCart from '../EmptyCart'
import { renderWithProviders } from '../../../test/test-utils'

describe('EmptyCart', () => {
  it('should match with the snapshot', () => {
    const { container, getByText } = renderWithProviders(<EmptyCart />)

    expect(container).toMatchSnapshot()
    expect(getByText(/empty/i)).toBeInTheDocument()
  })
})
