

import { useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import catalogReducer from '../redux/slices/catalogClise'

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
// использовать типизацию state...
// import {RootState} from './redux/store'
// const search = useSelector((state: RootState) => state.search.search);

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
// диспатч принимает только объекты... в APP проблема.