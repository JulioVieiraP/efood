import styled from 'styled-components'
import cores from '../../styles/Cores'
import { ButtonContainer } from '../Button/styles'

type Props = {
  width?: string | boolean
}

export const Checkout = styled.div`
  h3 {
    font-weight: 700;
    font-size: 16px;
    margin: 32px 0 16px;
  }
`

export const DeliveryContainer = styled.div`
  display: none;
  &.show {
    display: block;
  }
`

export const InputGroup = styled.div<Props>`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;

  label {
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
  }

  input {
    width: ${(props) => (props.width ? `${props.width}` : '100%')};
    height: 32px;
    margin-top: 8px;
    border: none;
    background-color: ${cores.Pêssego};
  }
`

export const ButtonGroup = styled.div`
  margin-top: 24px;

  ${ButtonContainer} {
    margin-bottom: 8px;
  }
`

export const RowInput = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
`

export const PaymentContainer = styled.div`
  display: none;

  &.show {
    display: block;
  }
`

export const confimeOrder = styled.div`
  display: none;
  p {
    font-weight: 400px;
    font-size: 14px;
    line-height: 22px;
  }

  ${ButtonContainer} {
    margin-top: 24px;
  }

  &.show {
    display: block;
  }
`
