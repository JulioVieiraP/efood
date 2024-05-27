import styled from 'styled-components'
import cores from '../../styles/Cores'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalContent = styled.div`
  max-width: 1024px;
  width: 100%;
  padding: 32px;
  margin: 0 auto;
  background-color: ${cores.RosaAvermelhado};
  color: ${cores.brancoPuro};
  position: relative;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 280px;
      height: 280px;
      object-fit: cover;
    }
  }

  button {
    cursor: pointer;
    width: 218px;
    margin-top: 16px;
    border: none;
    background-color: ${cores.Pêssego};
    color: ${cores.RosaAvermelhado};
  }
`

export const FecharModal = styled.span`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 8px;
  right: 8px;

  img {
    width: 16px;
    height: 16px;
    object-fit: cover;
    cursor: pointer;
  }
`

export const Content = styled.div`
  height: 280px;
  margin-left: 32px;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 18px;
    font-weight: 900;
  }

  p {
    margin: 16px 0;
    font-weight: 400;
    font-size: 14px;

    span {
      margin-top: 16px;
    }
  }
`
