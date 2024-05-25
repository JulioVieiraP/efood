import { useParams } from 'react-router-dom'
import Card from '../Cards'
import * as S from './styles'
import { useEffect, useState } from 'react'
import { Cardapio } from '../../pages/Home'

const Pratos = () => {
  const { id } = useParams()
  const [Cardapio, setCardapio] = useState<Cardapio[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => setCardapio(data))
  }, [id])

  return (
    <>
      <S.Main className="container">
        <ul>
          {Array.isArray(Cardapio) && Cardapio.length > 0 ? (
            Cardapio.map((item) => (
              <li key={item.id}>
                <Card
                  TextoBotao="Adicionar ao carrinho"
                  fundo={false}
                  descricao={item.descricao}
                  titulo={item.nome}
                  img={item.capa}
                  id={item.id}
                />
              </li>
            ))
          ) : (
            <p>Nenhum dado disponível.</p>
          )}
        </ul>
      </S.Main>
    </>
  )
}

export default Pratos
