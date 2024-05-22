import Logo from '../../assets/images/logo.svg'
import InstagramLogo from '../../assets/images/Group.png'
import FacebookLogo from '../../assets/images/Facebook_logo.png'
import twiter from '../../assets/images/Twiter_logo.png'

import * as S from './styles'
const Footer = () => {
  return (
    <>
      <S.Footer>
        <img src={Logo} alt="Logo" />
        <div>
          <S.ListaLogo>
            <li>
              <img src={InstagramLogo} alt="InstagramLogo" />
            </li>
            <li>
              <img src={FacebookLogo} alt="FacebookLogo" />
            </li>
            <li>
              <img src={twiter} alt="twiterLogo" />
            </li>
          </S.ListaLogo>
        </div>
        <S.Descricao>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade
          <br /> dos produtos é toda do estabelecimento contratado.
        </S.Descricao>
      </S.Footer>
    </>
  )
}

export default Footer
