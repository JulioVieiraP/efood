// Modal.tsx
import { formataPreco } from '../../pages/Produtos'
import Button from '../Button'
import * as S from './styles'
import close from '../../assets/images/close 1.png'

export type Props = {
  foto?: string
  nome?: string
  descricao?: string
  preco?: number
  porcao?: string
  onClick?: () => void
}

const Modal = ({ foto, nome, descricao, preco, porcao, onClick }: Props) => {
  return (
    <>
      <S.ModalContainer>
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
              <Button type="button" title="Adicione ao carrinho">
                <>{`Adicionar ao carrinho - ${formataPreco(preco)}`}</>
              </Button>
            </S.Content>
          </div>
        </S.ModalContent>
      </S.ModalContainer>
    </>
  )
}

export default Modal
