import Welcome from '../Welcome'
import { renderWithProviders } from '../../test/test-utils'

describe('Testing Welcome component', () => {
  it ('should render the component properly', () => {
    const { container, getByText } = renderWithProviders(<Welcome />)

    expect(container).toMatchSnapshot()
    expect(getByText('Welcome')).toBeTruthy()
  })
})
