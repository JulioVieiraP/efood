import { useLocation, Link, useParams } from 'react-router-dom'
import * as S from './styles'
import Logo from '../../assets/images/logo.svg'

export type Props = {
  Home?: boolean
}

const Header = ({ Home }: Props) => {
  const { id } = useParams<{ id: string }>()
  const location = useLocation()

  const titleRestaurante =
    location.pathname === `/Produtos/${id}` ? 'Restaurantes' : ''
  const titleCarrinho =
    location.pathname === `/Produtos/${id}` ? '0 produto(s) no carrinho' : ''

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
            <button>{titleCarrinho}</button>
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
