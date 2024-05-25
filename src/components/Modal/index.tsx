// Modal.tsx
import { formataPreco } from '../../pages/Produtos'
import Button from '../Button'
import * as S from './styles'
import close from '../../assets/images/close 1.png'
import { MouseEvent } from 'react'

export type Props = {
  foto?: string
  nome?: string
  descricao?: string
  preco?: number
  porcao?: string
  onClick?: () => void
}

const Modal = ({ foto, nome, descricao, preco, porcao, onClick }: Props) => {
  const handleContainerClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClick && onClick()
    }
  }

  return (
    <>
      <S.ModalContainer onClick={handleContainerClick}>
        <S.ModalContent>
          <S.FecharModal onClick={onClick}>
            <img src={close} alt="Fechar" />
          </S.FecharModal>
          <div>
            <img src={foto || ''} alt={nome || ''} />
            <S.Content>
              <h2>{nome}</h2>
              <p>{descricao}</p>
              <span>Serve: {porcao}</span>
              {preco && ( // Verifica se preco existe
                <Button type="button" title="Adicione ao carrinho">
                  <>Adicionar ao carrinho - {formataPreco(preco)}</>
                </Button>
              )}
            </S.Content>
          </div>
        </S.ModalContent>
      </S.ModalContainer>
    </>
  )
}

export default Modal
