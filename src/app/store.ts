import { configureStore } from '@reduxjs/toolkit'

import type { Action, PreloadedState } from '@reduxjs/toolkit'
import type { ThunkAction } from 'redux-thunk'

import rootReducer from './rootReducer'

export function setupStore(preloadedState?: PreloadedState<AppState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  })
}

const store = setupStore()

export type RootState = ReturnType<typeof store.getState>

export type AppState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, RootState, unknown, Action>

export default store
