import { useLocation, Link, useParams } from 'react-router-dom'
import * as S from './styles'
import Logo from '../../assets/images/logo.svg'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../redux/reducers/Cart'
import { RootReducer } from '../../redux/store'

export type Props = {
  Home?: boolean
}

const Header = ({ Home }: Props) => {
  const { id } = useParams<{ id: string }>()
  const location = useLocation()

  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const titleRestaurante =
    location.pathname === `/Produtos/${id}` ? 'Restaurantes' : ''
  const titleCarrinho =
    location.pathname === `/Produtos/${id}`
      ? `${items.length} produto(s) no carrinho`
      : ''

  return (
    <>
      <S.Header>
        <S.ContainerHeader Home={Home} className="container">
          <div>
            <Link to="/">
              <span>{titleRestaurante}</span>
            </Link>
          </div>
          <div>
            <Link to="/">
              <img className="logoImage" src={Logo} alt="efood" />
            </Link>
          </div>
          <div>
            <button onClick={() => dispatch(open())}>{titleCarrinho}</button>
          </div>
        </S.ContainerHeader>
        <S.Title
          dangerouslySetInnerHTML={{
            __html:
              location.pathname === `/Produtos/${id}`
                ? ''
                : 'Viva experiências gastronômicas <br/> no conforto da sua casa'
          }}
        />
      </S.Header>
    </>
  )
}

export default Header
