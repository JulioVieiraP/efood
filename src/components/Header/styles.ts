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

  .logoContainer {
    padding: ${(props) => (props.Home ? '0' : '0 193px 0 341')};
  }
`

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  position: relative;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${cores.brancoPuro};

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`

export const Content = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0;

  h2 {
    font-size: 32px;
    font-weight: 100;
    margin: 0;
    color: rgba(255, 255, 255, 1);
  }

  p {
    font-size: 32px;
    font-weight: 900;
    margin: 0;
  }
`
