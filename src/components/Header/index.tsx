import { useLocation, Link } from 'react-router-dom'
import * as S from './styles'
import Logo from '../../assets/images/logo.svg'
import img from '../../assets/images/Restaurante2.png'

export type Props = {
  Home?: boolean
}

const Header = ({ Home }: Props) => {
  const location = useLocation()

  const titleRestaurante = location.pathname === '/Perfil' ? 'Restaurantes' : ''
  const titleCarrinho =
    location.pathname === '/Perfil' ? '0 produto(s) no carrinho' : ''

  return (
    <>
      <S.Header>
        <S.ContainerHeader Home={Home} className="container">
          <span>{titleRestaurante}</span>
          <div className="logoContainer">
            <Link to="/">
              <img className="logoImage" src={Logo} alt="efood" />
            </Link>
          </div>
          <button>{titleCarrinho}</button>
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
      {Home ? (
        ''
      ) : (
        <S.Imagem style={{ backgroundImage: `url(${img})` }}>
          <div className="overlay"></div>
          <S.Content className="container">
            <h2>Italiana</h2>
            <p>La Dolce Vita Trattoria</p>
          </S.Content>
        </S.Imagem>
      )}
    </>
  )
}

export default Header
