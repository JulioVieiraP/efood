import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../pages/Home'

const API_URL = 'https://fake-api-tau.vercel.app/api/efood/'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL
  }),
  endpoints: (builder) => ({
    restaurantes: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),
    pratos: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useRestaurantesQuery, usePratosQuery } = api

export default api
