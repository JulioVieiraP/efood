import * as S from './styles'
import Logo from '../../assets/images/logo.svg'
const Header = () => {
  return (
    <>
      <S.Header>
        <div className="container">
          <img src={Logo} alt="efood" />
          <S.Title>
            Viva experiências gastronômicas <br /> no conforto da sua casa
          </S.Title>
        </div>
      </S.Header>
    </>
  )
}

export default Header
