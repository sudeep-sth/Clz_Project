import {
    Action,
    combineReducers,
    configureStore,
    ThunkAction
  } from "@reduxjs/toolkit"
  import { apiSlice } from "./rtk/apiSlice"
  import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

  const combineReducer = combineReducers({
    // reducers
    // shop: shopSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
  })
  
  const rootReducer = (state: any, action: any) => {
    return combineReducer(state, action)
  }
  export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  
    devTools: true
  })
  
  export type AppDispatch = typeof store.dispatch
  export type RootState = ReturnType<typeof store.getState>
  export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
  >

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

  