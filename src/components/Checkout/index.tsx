import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'
import * as S from './styles'
import {
  confimeOrder,
  resetCheckout,
  setDelivery,
  setPayment
} from '../../redux/reducers/Checkout'
import { RootReducer } from '../../redux/store'
import { backCart, close, openCart } from '../../redux/reducers/Cart'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePedidoMutation } from '../../services/api'
import InputMask from 'react-input-mask'

const Checkout = () => {
  const dispatch = useDispatch()

  const { isDelivery, isPayment, orderPlaced } = useSelector(
    (state: RootReducer) => state.checkout
  )

  const { items } = useSelector((state: RootReducer) => state.cart)

  const [pedido, { data, isLoading, isSuccess }] = usePedidoMutation()

  const form = useFormik({
    initialValues: {
      name: '',
      endereco: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cvv: '',
      expirationMonth: '',
      expirationYear: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Campo obrigatório'),
      endereco: Yup.string().required('Campo obrigatório'),
      city: Yup.string().required('Campo obrigatório'),
      cep: Yup.string().required('Campo obrigatório'),
      number: Yup.number().required('Campo obrigatório'),

      cardName: Yup.string().required('Campo obrigatório'),
      cardNumber: Yup.string()
        .min(16, 'O número do cartão deve ter pelo menos 16 dígitos')
        .required('Campo obrigatório'),
      cvv: Yup.string()
        .min(3, 'O CVV deve ter pelo menos 3 dígitos')
        .required('Campo obrigatório'),
      expirationMonth: Yup.string().required('Campo obrigatório'),
      expirationYear: Yup.string().required('Campo obrigatório')
    }),
    onSubmit: (values) => {}
  })

  const handlePayment = () => {
    if (
      form.values.name &&
      form.values.endereco &&
      form.values.city &&
      form.values.cep.length >= 9 &&
      form.values.number.length >= 11
    ) {
      dispatch(setPayment())
    } else {
      alert('Preencha todos os campos')
    }
  }

  const handleConfirmed = () => {
    if (
      form.values.cardName &&
      form.values.cardNumber &&
      form.values.cvv &&
      form.values.expirationMonth &&
      form.values.expirationYear
    ) {
      dispatch(confimeOrder())
      form.handleSubmit()
    } else {
      alert('Preencha todos os campos')
    }
  }

  const handleCloseAll = () => {
    dispatch(close())
    dispatch(openCart())
    dispatch(resetCheckout())
  }

  const handleBack = () => {
    dispatch(resetCheckout())
    dispatch(backCart())
  }

  return (
    <S.Checkout>
      <form onSubmit={form.handleSubmit}>
        <S.DeliveryContainer className={isDelivery ? 'show' : ''}>
          <h3>Entrega</h3>
          <S.InputGroup>
            <label htmlFor="name">Quem irá receber</label>
            <input
              type="text"
              id="name"
              value={form.values.name}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="endereco">Endereço</label>
            <input
              type="text"
              id="endereco"
              value={form.values.endereco}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              id="city"
              value={form.values.city}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </S.InputGroup>

          <S.RowInput>
            <S.InputGroup>
              <label htmlFor="cep">CEP</label>
              <InputMask
                type="text"
                id="cep"
                value={form.values.cep}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                mask="99999-999"
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="number">Número</label>
              <InputMask
                type="text"
                id="number"
                value={form.values.number}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                mask="(99) 99999-9999"
              />
            </S.InputGroup>
          </S.RowInput>

          <S.InputGroup>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input
              type="text"
              id="complement"
              value={form.values.complement}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
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
              onClick={handleBack}
            >
              Voltar para o carrinho
            </Button>
          </S.ButtonGroup>
        </S.DeliveryContainer>

        <S.PaymentContainer className={isPayment ? 'show' : ''}>
          <h3>Pagamento - Valor a pagar R$ 190,90</h3>
          <S.InputGroup>
            <label htmlFor="cardName">Nome no cartão</label>
            <input
              type="text"
              id="cardName"
              value={form.values.cardName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </S.InputGroup>

          <S.RowInput>
            <S.InputGroup width="228px">
              <label htmlFor="cardNumber">Número do cartão</label>
              <InputMask
                type="text"
                id="cardNumber"
                value={form.values.cardNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                mask="9999 9999 9999 9999"
              />
            </S.InputGroup>
            <S.InputGroup width="87px">
              <label htmlFor="cvv">CVV</label>
              <InputMask
                type="text"
                id="cvv"
                value={form.values.cvv}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                mask="999"
              />
            </S.InputGroup>
          </S.RowInput>

          <S.RowInput>
            <S.InputGroup>
              <label htmlFor="expirationMonth">Mês de vencimento</label>
              <InputMask
                type="text"
                id="expirationMonth"
                value={form.values.expirationMonth}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                mask="99"
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="expirationYear">Ano de vencimento</label>
              <InputMask
                type="text"
                id="expirationYear"
                value={form.values.expirationYear}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                mask="99"
              />
            </S.InputGroup>
          </S.RowInput>

          <S.ButtonGroup>
            <Button
              type="submit"
              title="Clique aqui para finalizar a compra"
              onClick={handleConfirmed}
            >
              Finalizar pagamento
            </Button>
            <Button
              type="button"
              title="Clique aqui para voltar ao carrinho"
              onClick={() => dispatch(setDelivery())}
            >
              Voltar para a edição de endereço
            </Button>
          </S.ButtonGroup>
        </S.PaymentContainer>
      </form>
      {orderPlaced && (
        <>
          <S.confimeOrder>
            <h3>Pedido realizado - ORDER_ID</h3>
            <div>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.{' '}
                <br /> <br /> Gostaríamos de ressaltar que nossos entregadores
                não estão autorizados a realizar cobranças extras. <br /> <br />
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição. <br /> <br />
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
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
    </S.Checkout>
  )
}

export default Checkout
