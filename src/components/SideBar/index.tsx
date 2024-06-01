import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { close } from '../../redux/reducers/Cart'
import { RootReducer } from '../../redux/store'
import Cart from '../Cart'
import Checkout from '../Checkout'

const SideBar = () => {
  const dispatch = useDispatch()
  const { isOpen, isCart } = useSelector((state: RootReducer) => state.cart)
  const { isConfirme } = useSelector((state: RootReducer) => state.checkout)
  const closeCart = () => {
    dispatch(close())
  }
  return (
    <>
      {isOpen && (
        <S.CartContainer>
          <S.Overlay onClick={closeCart} />
          <S.SideBarContent>
            {isCart && <Cart />}
            {isConfirme && <Checkout />}
          </S.SideBarContent>
        </S.CartContainer>
      )}
    </>
  )
}

export default SideBar
