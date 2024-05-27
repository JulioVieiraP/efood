import { useParams } from 'react-router-dom'
import Card from '../Cards'
import * as S from './styles'
import { useEffect, useState } from 'react'
import Banner from '../Banner'
import Modal from '../Modal'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../redux/store'

interface Cardapio {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Pratos = () => {
  const { id } = useParams<{ id: string }>()
  const [cardapio, setCardapio] = useState<Cardapio[]>([])
  const [loading, setLoading] = useState(true)
  const { isOpenModal, selectedItem } = useSelector(
    (state: RootReducer) => state.cart
  )

  useEffect(() => {
    setLoading(true)
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCardapio(data.cardapio)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <Banner />
      <S.Main className="container">
        {Array.isArray(cardapio) && cardapio.length > 0 ? (
          cardapio.map((item) => (
            <Card
              key={item.id}
              TextoBotao="Adicionar ao carrinho"
              fundo={false}
              descricao={item.descricao}
              titulo={item.nome}
              img={item.foto}
              id={item.id}
              typeButton="button"
              preco={item.preco}
              porcao={item.porcao}
            />
          ))
        ) : (
          <p>Nenhum dado disponível.</p>
        )}
      </S.Main>

      {isOpenModal && selectedItem && (
        <Modal
          id={selectedItem.id}
          foto={selectedItem.foto}
          nome={selectedItem.nome}
          descricao={selectedItem.descricao}
          preco={selectedItem.preco}
          porcao={selectedItem.porcao}
        />
      )}
    </>
  )
}

export default Pratos
