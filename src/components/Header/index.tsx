import { useLocation, Link, useParams } from 'react-router-dom'
import * as S from './styles'
import Logo from '../../assets/images/logo.svg'
import { useEffect, useState } from 'react'
import { Restaurante } from '../../pages/Home'

export type Props = {
  Home?: boolean
}

const Header = ({ Home }: Props) => {
  const { id } = useParams()
  const location = useLocation()

  const [Cardapio, setCardapio] = useState<Restaurante>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCardapio(data)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return <h1>Carregando...</h1>
  }

  if (!Cardapio) {
    return <h1>Erro ao procurar o item</h1>
  }

  const titleRestaurante = location.pathname === '/Perfil' ? 'Restaurantes' : ''
  const titleCarrinho =
    location.pathname === '/Perfil' ? '0 produto(s) no carrinho' : ''

  return (
    <>
      <S.Header>
        <S.ContainerHeader Home={Home} className="container">
          <Link to="/">
            <span>{titleRestaurante}</span>
          </Link>
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
        <S.Imagem style={{ backgroundImage: `url(${Cardapio.capa})` }}>
          <div className="overlay"></div>
          <S.Content className="container">
            <h2>{Cardapio.tipo}</h2>
            <p>{Cardapio.titulo}</p>
          </S.Content>
        </S.Imagem>
      )}
    </>
  )
}

export default Header
