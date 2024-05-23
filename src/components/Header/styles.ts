import styled from 'styled-components'
import cores from '../../styles/Cores'
import { Props } from '.'

export const Header = styled.header<Props>`
  background-color: ${cores.Pêssego};
  display: flex;
  flex-direction: ${(props) => (props.Home ? 'column' : 'row')};
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const Title = styled.h1`
  margin-top: 138px;
  margin-bottom: 40px;
  color: ${cores.RosaAvermelhado};
`

export const ContainerHeader = styled.div<Props>`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 64px 0;

  .logoContainer {
    margin: ${(props) => (props.Home ? '0' : '30px 210px 0 300px')};
  }
`

export const RestaurantName = styled.span`
  color: ${cores.RosaAvermelhado};
`

export const CartItems = styled.span`
  color: ${cores.RosaAvermelhado};
`
