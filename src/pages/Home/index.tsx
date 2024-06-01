import ProductCard from '../../components/ListaRestaurantes'
import Header from '../../components/Header'

import { useRestaurantesQuery } from '../../services/api'

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
  const { data: Restaurantes, isLoading } = useRestaurantesQuery()

  return (
    <>
      <Header Home={true} />
      {isLoading && <h1>Carregando...</h1>}
      {Restaurantes && <ProductCard Efoods={Restaurantes} />}
    </>
  )
}

export default Home
