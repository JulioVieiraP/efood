import styled from 'styled-components'
import cores from '../../styles/Cores'

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
