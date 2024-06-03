import { useDispatch, useSelector } from 'react-redux'
import { close, closeCart, remove } from '../../redux/reducers/Cart'
import { RootReducer } from '../../redux/store'
import Button from '../Button'
import * as S from './styles'
import lixeira from '../../assets/images/lixeira-de-reciclagem 1.png'
import { openCheckout } from '../../redux/reducers/Checkout'
import { getTotalPrice, parseToBrl } from '../../utils'

const Cart: React.FC = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const removeItem = (id: number) => {
    if (items.length > 1) {
      dispatch(remove(id))
    } else {
      dispatch(remove(id))
      dispatch(close())
    }
  }

  const handleOpenCheckout = () => {
    if (items.length >= 1) {
      dispatch(openCheckout())
      dispatch(closeCart())
    } else {
      alert('Carrinho vazio')
    }
  }

  return (
    <>
      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <S.ItemImg src={item.foto} />
              <S.price>
                <p>Valor total</p>
                <span>{parseToBrl(item.preco)}</span>
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
        <span>{parseToBrl(getTotalPrice(items))}</span>
      </S.TotalPrice>
      <Button
        type="button"
        title="Clique aqui para continuar"
        onClick={handleOpenCheckout}
      >
        Continuar com a entrega
      </Button>
    </>
  )
}

export default Cart
