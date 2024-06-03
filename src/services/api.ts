import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../pages/Home'

type PurchasePayload = {
  products: [
    {
      id: number
      price: number
    }
  ]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

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
    }),
    pedido: builder.mutation<void, PurchasePayload>({
      query: (payload) => ({
        url: 'checkout',
        method: 'POST',
        body: payload
      })
    })
  })
})

export const { useRestaurantesQuery, usePratosQuery, usePedidoMutation } = api

export default api
