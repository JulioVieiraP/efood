import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  confimeOrder,
  resetCheckout,
  setDelivery,
  setPayment
} from '../../redux/reducers/Checkout'
import { RootReducer } from '../../redux/store'
import { backCart, close, openCart } from '../../redux/reducers/Cart'

import Button from '../Button'
import InputMask from 'react-input-mask'
import { getTotalPrice, parseToBrl } from '../../utils'

import * as S from './styles'

const Checkout = () => {
  const dispatch = useDispatch()

  const { isDelivery, isPayment, orderPlaced } = useSelector(
    (state: RootReducer) => state.checkout
  )

  const [data, setData] = useState('')
  const [deliveryFieldsValid, setDeliveryFieldsValid] = useState(false)

  const { items } = useSelector((state: RootReducer) => state.cart)

  const schema = z.object({
    name: z.string().min(3, { message: 'Nome é obrigatório' }),
    endereco: z.string().min(5, { message: 'Endereço é obrigatório' }),
    city: z.string().min(3, { message: 'Cidade é obrigatória' }),
    cep: z.string().min(8, { message: 'CEP é obrigatório' }),
    number: z.string().min(11, { message: 'Número é obrigatório' }),
    complement: z.string().optional(),

    cardName: z.string().min(3, { message: 'Campo obrigatório' }).optional(),
    cardNumber: z
      .string()
      .min(19, { message: 'Deve ter 19 dígitos' })
      .optional(),
    cvv: z.string().min(3, { message: 'Campo obrigatório' }).optional(),
    expirationMonth: z
      .string()
      .min(2, { message: 'Campo obrigatório' })
      .optional(),
    expirationYear: z
      .string()
      .min(2, { message: 'Campo obrigatório' })
      .optional()
  })

  type formDataType = z.infer<typeof schema>

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger
  } = useForm<formDataType>({
    resolver: zodResolver(schema),
    defaultValues: {
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
    }
  })

  const onSubmit = async (formData: formDataType) => {
    if (
      formData.cardName &&
      formData.cardNumber &&
      formData.cvv &&
      formData.expirationMonth &&
      formData.expirationYear &&
      deliveryFieldsValid
    ) {
      dispatch(confimeOrder())

      try {
        const response = await fetch(
          'https://fake-api-tau.vercel.app/api/efood/checkout',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              delivery: {
                receiver: formData.name,
                address: {
                  description: formData.endereco,
                  city: formData.city,
                  zipCode: formData.cep,
                  number: formData.number,
                  complement: formData.complement
                }
              },
              payment: {
                card: {
                  name: formData.cardName,
                  number: formData.cardNumber.replace(/\s/g, ''),
                  code: parseInt(formData.cvv),
                  expires: {
                    month: parseInt(formData.expirationMonth),
                    year: parseInt(formData.expirationYear)
                  }
                }
              },
              products: items.map((item) => ({
                id: item.id,
                price: parseFloat(String(item.preco))
              }))
            })
          }
        )

        if (!response.ok) {
          throw new Error('Erro ao processar o pedido')
        }

        const data = await response.json()
        setData(data.orderId)
      } catch (error) {
        console.error('Erro ao enviar pedido:', error)
      }
    } else {
      alert('Preencha todos os campos')
    }
  }

  type FieldName = keyof formDataType

  const handleDeliveryFieldChange = async (fieldName: FieldName) => {
    const isFieldValid = await trigger(fieldName)
    setDeliveryFieldsValid(isFieldValid)
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.DeliveryContainer className={isDelivery ? 'show' : ''}>
          <h3>Entrega</h3>
          <S.InputGroup>
            <label htmlFor="name">Quem irá receber</label>
            <input
              type="text"
              {...register('name')}
              onBlur={() => handleDeliveryFieldChange('name')}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="endereco">Endereço</label>
            <input
              type="text"
              {...register('endereco')}
              onBlur={() => handleDeliveryFieldChange('endereco')}
            />
            {errors.endereco && <span>{errors.endereco.message}</span>}
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              {...register('city')}
              onBlur={() => handleDeliveryFieldChange('city')}
            />
            {errors.city && <span>{errors.city.message}</span>}
          </S.InputGroup>

          <S.RowInput>
            <S.InputGroup>
              <label htmlFor="cep">CEP</label>
              <InputMask
                type="text"
                {...register('cep')}
                onBlur={() => handleDeliveryFieldChange('cep')}
                mask="99999-999"
              />
              {errors.cep && <span>{errors.cep.message}</span>}
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="number">Número</label>
              <InputMask
                type="text"
                {...register('number')}
                onBlur={() => handleDeliveryFieldChange('number')}
                mask="(99) 9999-9999"
              />
              {errors.number && <span>{errors.number.message}</span>}
            </S.InputGroup>
          </S.RowInput>

          <S.InputGroup>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input type="text" id="complement" {...register('complement')} />
            {errors.complement && <span>{errors.complement.message}</span>}
          </S.InputGroup>

          <S.ButtonGroup>
            <Button
              type="button"
              title="Clique aqui para continuar com o pagamento"
              onClick={() => dispatch(setPayment())}
              disabled={!deliveryFieldsValid}
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
          <h3>Pagamento - Valor a pagar {parseToBrl(getTotalPrice(items))}</h3>
          <S.InputGroup>
            <label htmlFor="cardName">Nome no cartão</label>
            <input
              type="text"
              id="cardName"
              {...register('cardName')}
              onBlur={() => trigger('cardName')}
            />
            {errors.cardName && <span>{errors.cardName.message}</span>}
          </S.InputGroup>

          <S.RowInput>
            <S.InputGroup width="228px">
              <label htmlFor="cardNumber">Número do cartão</label>
              <InputMask
                type="text"
                id="cardNumber"
                {...register('cardNumber')}
                onBlur={() => trigger('cardNumber')}
                mask="9999 9999 9999 9999"
              />
              {errors.cardNumber && <span>{errors.cardNumber?.message}</span>}
            </S.InputGroup>
            <S.InputGroup width="87px">
              <label htmlFor="cvv">CVV</label>
              <InputMask
                type="text"
                id="cvv"
                {...register('cvv')}
                onBlur={() => trigger('cvv')}
                mask="999"
              />
              {errors.cvv && <span>{errors.cvv?.message}</span>}
            </S.InputGroup>
          </S.RowInput>

          <S.RowInput>
            <S.InputGroup>
              <label htmlFor="expirationMonth">Mês de vencimento</label>
              <InputMask
                type="text"
                id="expirationMonth"
                {...register('expirationMonth')}
                onBlur={() => trigger('expirationMonth')}
                mask="99"
              />
              {errors.expirationMonth && (
                <span>{errors.expirationMonth.message}</span>
              )}
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="expirationYear">Ano de vencimento</label>
              <InputMask
                type="text"
                id="expirationYear"
                {...register('expirationYear')}
                onBlur={() => trigger('expirationYear')}
                mask="99"
              />
              {errors.expirationYear && (
                <span>{errors.expirationYear.message}</span>
              )}
            </S.InputGroup>
          </S.RowInput>

          <S.ButtonGroup>
            <Button type="submit" title="Clique aqui para finalizar a compra">
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

      <S.confimeOrder className={orderPlaced ? 'show' : ''}>
        <h3>Pedido realizado - {data}</h3>
        <div>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido. <br />{' '}
            <br /> Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras. <br /> <br />
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição. <br /> <br />
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
    </S.Checkout>
  )
}

export default Checkout
