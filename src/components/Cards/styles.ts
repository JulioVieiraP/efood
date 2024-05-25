import styled from 'styled-components'
import cores from '../../styles/Cores'
import { Props } from '.'

type CardProps = Omit<
  Props,
  'titulo' | 'descricao' | 'img' | 'TextoBotao' | 'tipo' | 'Categories' | 'id'
>

export const Card = styled.div<CardProps>`
  color: ${(props) =>
    props.fundo ? `${cores.RosaAvermelhado}` : `${cores.Pêssego}`};
  background-color: ${(props) =>
    props.fundo ? 'transparent' : `${cores.RosaAvermelhado}`};
  border: solid 1px ${cores.RosaAvermelhado};
  position: relative;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
  }

  a,
  button {
    border: none;
    background-color: ${(props) =>
      props.fundo ? `${cores.RosaAvermelhado}` : `${cores.Pêssego}`};
    color: ${(props) =>
      props.fundo ? `${cores.brancoPuro}` : `${cores.RosaAvermelhado}`};
    width: ${(props) => (props.fundo ? '100px' : '100%')};
    cursor: pointer;
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

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  font-weight: bold;
`

export const Description = styled.p<CardProps>`
  font-size: 14px;
  font-weight: 400;
  margin-right: 8px;
  margin-left: 8px;
  margin-bottom: ${(props) => (props.fundo ? '16px' : '8px')};
  margin-top: ${(props) => (props.fundo ? '8px' : '0')};
`

export const Popularidade = styled.div`
  h3 {
    font-size: 18px;
    font-weight: bold;
  }
  display: flex;
`

export const Categories = styled.div<CardProps>`
  display: ${(props) => (props.fundo ? 'none' : 'inline')};
  position: absolute;
  top: 0;
  right: 16px;
`
