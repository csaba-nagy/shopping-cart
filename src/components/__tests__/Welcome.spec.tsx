import { render } from '@testing-library/react'
import Welcome from '../Welcome'

describe('Testing Welcome component', () => {
  it ('should render the component properly', () => {
    const { container, getByText } = render(<Welcome />)

    expect(container).toMatchSnapshot()
    expect(getByText('Welcome')).toBeTruthy()
  })
})
