import styled from 'styled-components'
import cores from '../../styles/Cores'
import { Props } from '.'

export const Header = styled.header<Props>`
  height: 270px;
  background-color: ${cores.Pêssego};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const Title = styled.h1`
  margin: 50px 0 30px;
  font-size: 36px;
  font-weight: 900;
  color: ${cores.RosaAvermelhado};
`

export const ContainerHeader = styled.div<Props>`
  max-width: 1024px;
  height: 138px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;

  span {
    font-size: 18px;
    font-weight: 900;
    color: ${cores.RosaAvermelhado};
  }

  button {
    font-size: 18px;
    font-weight: 900;
    color: ${cores.RosaAvermelhado};
    background: none;
    border: none;
    cursor: pointer;
  }
`
