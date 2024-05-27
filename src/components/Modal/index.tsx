import { formataPreco } from '../../pages/Produtos'
import Button from '../Button'
import * as S from './styles'
import fecharIcon from '../../assets/images/close 1.png'
import { MouseEvent } from 'react'
import { useDispatch } from 'react-redux'
import { add, closeModal, open } from '../../redux/reducers/Cart'
import { Cardapio } from '../../pages/Home'

export type Props = {
  id?: number
  foto?: string
  nome?: string
  descricao?: string
  preco?: number
  porcao?: string
}

const Modal = ({ id, foto, nome, descricao, preco, porcao }: Props) => {
  const dispatch = useDispatch()

  const handleContainerClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      dispatch(closeModal())
    }
  }

  const addItem = () => {
    const item: Cardapio = {
      id: id || 0,
      foto: foto || '',
      nome: nome || '',
      descricao: descricao || '',
      preco: preco || 0,
      porcao: porcao || ''
    }
    dispatch(add(item))
    dispatch(closeModal())
    dispatch(open())
  }

  return (
    <S.ModalContainer onClick={handleContainerClick}>
      <S.ModalContent>
        <S.FecharModal onClick={() => dispatch(closeModal())}>
          <img src={fecharIcon} alt="Fechar" />
        </S.FecharModal>
        <div>
          <img src={foto || ''} alt={nome || ''} />
          <S.Content>
            <h2>{nome}</h2>
            <p>{descricao}</p>
            <span>Serve: {porcao}</span>
            {preco && (
              <Button
                type="button"
                title="Adicione ao carrinho"
                onClick={addItem}
              >
                <>Adicionar ao carrinho - {formataPreco(preco)}</>
              </Button>
            )}
          </S.Content>
        </div>
      </S.ModalContent>
    </S.ModalContainer>
  )
}

export default Modal
