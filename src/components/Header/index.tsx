import { useLocation, Link } from 'react-router-dom'
import * as S from './styles'
import Logo from '../../assets/images/logo.svg'

export type Props = {
  Home?: boolean
}

const Header = ({ Home }: Props) => {
  const location = useLocation()

  const titleRestaurante = location.pathname === '/Perfil' ? 'Restaurantes' : ''
  const titleCarrinho =
    location.pathname === '/Perfil' ? '0 produto(s) no carrinho' : ''

  return (
    <S.Header>
      <S.ContainerHeader Home={Home}>
        <div>
          <span>{titleRestaurante}</span>
        </div>
        <div className="logoContainer">
          <Link to="/">
            <img className="logoImage" src={Logo} alt="efood" />
          </Link>
        </div>
        <div>
          <span>{titleCarrinho}</span>
        </div>
      </S.ContainerHeader>
      <S.Title
        dangerouslySetInnerHTML={{
          __html:
            location.pathname === '/Perfil'
              ? ''
              : 'Viva experiências gastronômicas <br/> no conforto da sua casa'
        }}
      />
    </S.Header>
  )
}

export default Header
