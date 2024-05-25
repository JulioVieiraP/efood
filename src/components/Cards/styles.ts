import styled from 'styled-components'
import cores from '../../styles/Cores'
import { Props } from '.'

type CardProps = Omit<
  Props,
  | 'titulo'
  | 'descricao'
  | 'img'
  | 'TextoBotao'
  | 'tipo'
  | 'Categories'
  | 'id'
  | 'star'
>

export const Card = styled.div<CardProps>`
  color: ${(props) =>
    props.fundo ? `${cores.RosaAvermelhado}` : `${cores.Pêssego}`};
  background-color: ${(props) =>
    props.fundo ? 'transparent' : `${cores.RosaAvermelhado}`};
  border: solid 1px ${cores.RosaAvermelhado};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  a,
  button {
    border: none;
    background-color: ${(props) =>
      props.fundo ? `${cores.RosaAvermelhado}` : `${cores.Pêssego}`};
    color: ${(props) =>
      props.fundo ? `${cores.brancoPuro}` : `${cores.RosaAvermelhado}`};
    width: ${(props) => (props.fundo ? '100px' : '304px')};
    cursor: pointer;
    padding: 8px;
    margin: 8px;
  }
`

export const Content = styled.div`
  flex: 1;
  padding: 8px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const Imagem = styled.img<CardProps>`
  width: ${(props) => (props.fundo ? '475px' : '304px')};
  height: ${(props) => (props.fundo ? '217px' : '167px')};
  object-fit: cover;
  display: ${(props) => (props.fundo ? 'initial' : 'block')};
  margin: ${(props) => (props.fundo ? '0' : '0 auto')};
  margin-top: ${(props) => (props.fundo ? '0' : '8px')};
`

export const Title = styled.h3<CardProps>`
  font-size: 18px;
  font-weight: 700;
  font-weight: bold;
  margin-bottom: ${(props) => (props.fundo ? '0' : '8px')};
`

export const Description = styled.p<CardProps>`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: ${(props) => (props.fundo ? '16px' : '8px')};
  margin-top: ${(props) => (props.fundo ? '8px' : '0')};
`

export const Popularidade = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    font-size: 18px;
    font-weight: bold;
  }
  img {
    width: 20px;
    height: 20px;
    margin-left: 8px;
  }
  display: flex;
`

export const Categories = styled.div<CardProps>`
  display: ${(props) => (props.fundo ? 'none' : 'inline')};
`
