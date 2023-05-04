import type { RenderOptions } from '@testing-library/react'
import { render } from '@testing-library/react'
import type { PreloadedState } from '@reduxjs/toolkit'
import type { PropsWithChildren, ReactElement } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import type { AppState } from '../app/store'
import { setupStore } from '../app/store'
import type store from '../app/store'
import Header from '../components/Header'
import Footer from '../components/Footer'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<AppState>
  store?: typeof store
}

export function renderWithProviders(
  ui: ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}) {
  const Wrapper = ({ children }: PropsWithChildren<{}>) => {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          {children}
          <Footer />
        </Provider>
      </BrowserRouter>)
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
