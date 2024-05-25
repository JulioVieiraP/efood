import ProductCard from '../../components/ListaRestaurantes'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'

export interface Cardapio {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: string
  tipo: string
  Categories?: string[]
  avaliacao?: string
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => setRestaurantes(data))
  }, [])

  return (
    <>
      <Header Home={true} />
      <ProductCard Efoods={restaurantes} />
    </>
  )
}

export default Home
