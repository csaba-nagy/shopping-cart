import type { Action } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import type { ThunkAction } from 'redux-thunk'

import type { RootState } from './rootReducer'
import rootReducer from './rootReducer'

const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch

export function useAppDispatch() {
  return useDispatch()
}

export type AppThunk = ThunkAction<void, RootState, unknown, Action>

export default store
