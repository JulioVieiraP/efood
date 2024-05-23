import { Link } from 'react-router-dom'
import styled from 'styled-components'
import cores from '../../styles/Cores'

type Props = {
  width?: boolean
}

export const ButtonContainer = styled.button<Props>`
  width: ${(props) => (props.width ? '304px' : 'auto')};
  background-color: ${cores.corPrincipal};
  color: ${cores.corSecundaria};
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  padding: 8px;
`
export const ButtonLink = styled(Link)<Props>`
  width: ${(props) => (props.width ? '304px' : 'auto')};
  background-color: ${cores.corPrincipal};
  color: ${cores.corSecundaria};
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  padding: 8px;

  a {
    padding: 8px;
  }
`
