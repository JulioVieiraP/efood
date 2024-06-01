import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'
import * as S from './styles'
import {
  closeAll,
  confimeOrder,
  setPayment
} from '../../redux/reducers/Checkout'
import { RootReducer } from '../../redux/store'
import { close, openCart } from '../../redux/reducers/Cart'

const Checkout = () => {
  const dispatch = useDispatch()

  const { isDelivery, isPayment, orderPlaced } = useSelector(
    (state: RootReducer) => state.checkout
  )

  const handlePayment = () => {
    dispatch(setPayment())
  }

  const handleCloseAll = () => {
    dispatch(close())
    dispatch(closeAll())
    dispatch(openCart())
  }

  return (
    <S.Checkout>
      <form>
        {isDelivery && (
          <>
            <h3>Entrega</h3>
            <S.InputGroup>
              <label htmlFor="Name">Quem irá receber</label>
              <S.Input type="text" id="Name" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="email">Endereço</label>
              <S.Input type="email" id="email" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="city">Cidade</label>
              <S.Input type="text" id="city" />
            </S.InputGroup>

            <S.RowInput>
              <S.InputGroup>
                <label htmlFor="Cep">CEP</label>
                <S.Input type="text" id="Cep" />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="Number">Número</label>
                <S.Input type="number" id="Number" />
              </S.InputGroup>
            </S.RowInput>

            <S.InputGroup>
              <label htmlFor="complement">Complemento (opcional)</label>
              <S.Input type="text" id="complement" />
            </S.InputGroup>

            <S.ButtonGroup>
              <Button
                type="button"
                title="Clique aqui para continuar com o pagamento"
                onClick={handlePayment}
              >
                Continuar com pagamento
              </Button>
              <Button
                type="button"
                title="Clique aqui para voltar ao carrinho"
                onClick={() => dispatch(setPayment())}
              >
                Voltar para o carrinho
              </Button>
            </S.ButtonGroup>
          </>
        )}

        {isPayment && (
          <>
            <h3>Pagamento - Valor a pagar R$ 190,90</h3>
            <S.InputGroup>
              <label htmlFor="CardName">Nome no cartão</label>
              <S.Input type="text" id="CardName" />
            </S.InputGroup>

            <S.RowInput>
              <S.InputGroup>
                <label htmlFor="CardNumber">Número do cartão</label>
                <S.Input width="228px" type="text" id="CardNumber" />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="CVV">CVV</label>
                <S.Input width="87px" type="number" id="CVV" />
              </S.InputGroup>
            </S.RowInput>

            <S.RowInput>
              <S.InputGroup>
                <label htmlFor="expirationMonth">Mês de vencimento</label>
                <S.Input type="text" id="expirationMonth" />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="expirationYear">Ano de vencimento</label>
                <S.Input type="text" id="expirationYear" />
              </S.InputGroup>
            </S.RowInput>

            <S.ButtonGroup>
              <Button
                type="button"
                title="Clique aqui para finalizar a compra"
                onClick={() => dispatch(confimeOrder())}
              >
                Finalizar pagamento
              </Button>
              <Button
                type="button"
                title="Clique aqui para voltar ao carrinho"
                onClick={() => dispatch(setPayment())}
              >
                Voltar para a edição de endereço
              </Button>
            </S.ButtonGroup>
          </>
        )}

        {orderPlaced && (
          <>
            <S.confimeOrder>
              <h3>Pedido realizado - ORDER_ID</h3>
              <div>
                <p>
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço
                  fornecido. <br /> <br /> Gostaríamos de ressaltar que nossos
                  entregadores não estão autorizados a realizar cobranças
                  extras. <br /> <br />
                  Lembre-se da importância de higienizar as mãos após o
                  recebimento do pedido, garantindo assim sua segurança e
                  bem-estar durante a refeição. <br /> <br />
                  Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite!
                </p>
              </div>
              <Button
                type="button"
                title="clique aqui para concluir a compra"
                onClick={handleCloseAll}
              >
                Concluir
              </Button>
            </S.confimeOrder>
          </>
        )}
      </form>
    </S.Checkout>
  )
}

export default Checkout
