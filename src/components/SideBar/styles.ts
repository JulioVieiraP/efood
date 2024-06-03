import styled from 'styled-components'
import cores from '../../styles/Cores'
import { ButtonContainer } from '../Button/styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 3;
`

export const SideBarContent = styled.aside`
  background-color: ${cores.RosaAvermelhado};
  color: ${cores.Pêssego};
  max-width: 380px;
  width: 100%;
  height: 100%;
  padding: 0 8px;
  z-index: 3;
  position: relative;
  border: none;

  ${ButtonContainer} {
    width: 100%;
    border: none;
    background-color: ${cores.Pêssego};
    color: ${cores.RosaAvermelhado};
    cursor: pointer;
  }

  ul {
    margin-top: 32px;
    margin-bottom: 40px;
  }
`
