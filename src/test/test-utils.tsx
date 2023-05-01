import type { RenderOptions } from '@testing-library/react'
import { render } from '@testing-library/react'
import type { PreloadedState } from '@reduxjs/toolkit'
import type { PropsWithChildren, ReactElement } from 'react'
import { Provider } from 'react-redux'
import type { AppState } from '../app/store'
import { setupStore } from '../app/store'
import type store from '../app/store'

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
    return (<Provider store={store}>{children}</Provider>)
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
