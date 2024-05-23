import styled from 'styled-components'
import cores from '../../styles/Cores'
import { Props } from '.'

export const Main = styled.main<Omit<Props, 'Efoods'>>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.Card2 ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)'};
  gap: ${(props) => (props.Card2 ? '32px' : '40px 80px')};
  color: ${(props) =>
    props.Card2 ? `${cores.Pêssego}` : `${cores.RosaAvermelhado}`};
  margin-top: ${(props) => (props.Card2 ? '56px' : '80px')};
`

export const Card = styled.div<Omit<Props, 'Efoods'>>`
  background-color: ${(props) =>
    props.Card2 ? `${cores.RosaAvermelhado}` : 'transparent'};
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
      props.Card2 ? `${cores.Pêssego}` : `${cores.RosaAvermelhado}`};
    color: ${(props) =>
      props.Card2 ? `${cores.RosaAvermelhado}` : `${cores.brancoPuro}`};
    width: ${(props) => (props.Card2 ? '304px' : '100px')};
    cursor: pointer;
  }
`

export const Imagem = styled.img<Omit<Props, 'Efoods'>>`
  width: ${(props) => (props.Card2 ? '304px' : '475px')};
  height: ${(props) => (props.Card2 ? '167px' : '217px')};
  object-fit: cover;
  display: ${(props) => (props.Card2 ? 'block' : 'initial')};
  margin: ${(props) => (props.Card2 ? '0 auto' : '0')};
  margin-top: ${(props) => (props.Card2 ? '8px' : '0')};
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

export const Description = styled.p<Omit<Props, 'Efoods'>>`
  font-size: 14px;
  font-weight: 400;
  margin-right: 8px;
  margin-left: 8px;
  margin-bottom: ${(props) => (props.Card2 ? '8px' : '16px')};
  margin-top: ${(props) => (props.Card2 ? '0px' : '8px')};
`

export const Popularidade = styled.div`
  h3 {
    font-size: 18px;
    font-weight: bold;
  }
  display: flex;
`

export const Categories = styled.div<Omit<Props, 'Efoods'>>`
  display: ${(props) => (props.Card2 ? 'none' : 'inline')};
  position: absolute;
  top: 0;
  right: 16px;
`
