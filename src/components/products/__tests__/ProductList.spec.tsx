import { renderWithProviders } from '../../../test/test-utils'
import ProductList from '../ProductList'
import { setupStore } from '../../../app/store'
import { getProducts } from '../../../features/products/products.thunks'

describe('ProductList', () => {
  it('should show the loading screen if products are not loaded', () => {
    const { store, getByText, queryByText } = renderWithProviders(<ProductList />)

    const { products } = store.getState()

    expect(products.isLoading).toEqual(true)

    expect(getByText(/products/i)).toBeInTheDocument()
    expect(queryByText(/loading/i)).toBeInTheDocument()
  })

  it('should show the products if the component is rendered with the preloaded products', async () => {
    const store = setupStore()
    await store.dispatch(getProducts())

    const { products: { products } } = store.getState()

    const { queryByText, getByText } = renderWithProviders(<ProductList />, { store })

    expect(queryByText(/loading/i)).not.toBeInTheDocument()

    expect(products.length).toEqual(10)

    expect(getByText(/iphone 9/i)).toBeInTheDocument()
  })

  it('should show an error message if something goes wrong', () => {
    const error = {
      status: 500,
      message: 'Test Error Message',
    }

    const store = setupStore({
      products: {
        error,
        isLoading: false,
        products: [],
      },
    })

    const { getByText } = renderWithProviders(<ProductList />, { store })

    expect(getByText(error.message)).toBeInTheDocument()
    expect(getByText(error.status)).toBeInTheDocument()
  })
})
