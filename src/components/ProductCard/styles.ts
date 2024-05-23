import styled from 'styled-components'
import cores from '../../styles/Cores'
import { TagContainer } from '../Tag/styles'

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px 80px;
  color: ${cores.corPrincipal};
`

export const Card = styled.div`
  background-color: transparent;
  border: solid 1px ${cores.corPrincipal};
  position: relative;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
  }
`
export const Imagem = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`
export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
`
export const Description = styled.p`
  font-size: 14px;
  font-weight: regular;
  margin-right: 8px;
  margin-left: 8px;
  margin-bottom: 16px;
`
export const Popularidade = styled.div`
  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-top: 8px;
    margin-right: 8px;
  }
  display: flex;
`
export const Categories = styled.div`
  position: absolute;
  top: 0;
  right: 16px;
`
