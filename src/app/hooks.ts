import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import type { AppDispatch, RootState } from './store'

export function useAppDispatch() {
  return useDispatch<AppDispatch>()
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
