import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


// const selectIsAuth = (state: RootState) => state.authPage.isAuth


// const isAuth = useSelector(selectIsAuth)