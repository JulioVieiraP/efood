import Button from '../Button'
import * as S from './styles'
import lixeira from '../../assets/images/lixeira-de-reciclagem 1.png'
import { useDispatch, useSelector } from 'react-redux'
import { close, remove } from '../../redux/reducers/Cart'
import { RootReducer } from '../../redux/store'
import { formataPreco } from '../../pages/Produtos'

const Cart = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const closeCart = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      dispatch(close())
    }
  }

  const preçoTotal = () => {
    return items.reduce((acc, item) => acc + item.preco, 0)
  }

  const removeItem = (id: number) => {
    if (items.length > 1) {
      dispatch(remove(id))
    } else {
      dispatch(remove(id))
      dispatch(close())
    }
  }
  return (
    <S.CartContainer onClick={closeCart}>
      <S.CartContent>
        {items.length > 0 ? (
          <ul>
            {items.map((item) => (
              <S.CartItem key={item.id}>
                <S.ItemImg src={item.foto} />
                <S.price>
                  <p>Valor total</p>
                  <span>{formataPreco(item.preco)}</span>
                </S.price>
                <S.closeBtn src={lixeira} onClick={() => removeItem(item.id)} />
              </S.CartItem>
            ))}
          </ul>
        ) : (
          <h2>Nenhum item adicionado</h2>
        )}
        <S.TotalPrice>
          <p>Valor total</p>
          <span>{formataPreco(preçoTotal())}</span>
        </S.TotalPrice>
        <Button type="button" title="Clique aqui para continuar">
          Continuar com a entrega
        </Button>
      </S.CartContent>
    </S.CartContainer>
  )
}

export default Cart
