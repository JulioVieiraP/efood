import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import cartReducer from './reducers/Cart'
import api from '../services/api'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, logger)
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
