import styled from 'styled-components'
import cores from '../../styles/Cores'

export const Footer = styled.footer`
  background-color: ${cores.corSecundaria};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px 0;
  margin-top: 120px;

  img {
    padding-bottom: 32px;
  }
`

export const ListaLogo = styled.ul`
  display: flex;

  li:nth-child(2) {
    margin: 0 8px;
  }
`
export const Descricao = styled.p`
  color: ${cores.corPrincipal};
  text-align: center;
  font-weight: 400;
  font-size: 10px;
`
