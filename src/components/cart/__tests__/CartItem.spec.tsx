import { renderWithProviders } from '../../../test/test-utils'
import CartItem from '../CartItem'
import { mockedCartItem } from './mocks/cart.mocks'

describe('CartItem', () => {
  it('should render the component properly', () => {
    const {
      getByRole,
      getByAltText,
      getByText,
    } = renderWithProviders(<CartItem {...mockedCartItem}/>)

    const { title, thumbnail, price, amount } = mockedCartItem

    const thumbnailElement = getByAltText(title) as HTMLImageElement

    expect(thumbnailElement.src).toContain(thumbnail)

    expect(getByText(title)).toBeInTheDocument()

    expect(getByText(/^[0-9][$]$/).innerHTML).toEqual(`${price}$`)

    expect(Number(getByRole('amount').innerHTML)).toEqual(amount)
  })

  it.todo('should be increment the amount if the "+" button is clicked', () => {

  })

  it.todo('should be decrement the amount if the "-" button is clicked', () => {

  })
})
