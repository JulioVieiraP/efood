import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import * as S from './styles'
import { Restaurante } from '../../pages/Home'

const Banner = () => {
  const { id } = useParams<{ id: string }>()

  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRestaurante(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Erro ao buscar restaurante:', error)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return <h1>Carregando...</h1>
  }

  if (!restaurante) {
    return <h1>Erro ao procurar o restaurante</h1>
  }
  return (
    <>
      <S.Imagem style={{ backgroundImage: `url(${restaurante.capa})` }}>
        <div className="overlay"></div>
        <S.Content className="container">
          <h2>{restaurante.tipo}</h2>
          <p>{restaurante.titulo}</p>
        </S.Content>
      </S.Imagem>
    </>
  )
}

export default Banner
