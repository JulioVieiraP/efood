import { useParams } from 'react-router-dom'
import Card from '../Cards'
import * as S from './styles'
import Banner from '../Banner'
import Modal from '../Modal'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../redux/store'
import { usePratosQuery } from '../../services/api'
import { Restaurante } from '../../pages/Home'

const Pratos = () => {
  const { id } = useParams<{ id: string }>()
  const { isOpenModal, selectedItem } = useSelector(
    (state: RootReducer) => state.cart
  )

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data, isLoading, error } = usePratosQuery(id!)

  if (isLoading) {
    return <p>Carregando...</p>
  }

  if (error) {
    return <p>Erro ao carregar os dados.</p>
  }

  return (
    <>
      <Banner />
      <S.Main className="container">
        {data && Array.isArray(data.cardapio) && data.cardapio.length > 0 ? (
          data.cardapio.map((item) => (
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
