import styled from 'styled-components'
import cores from '../../styles/Cores'

export const CartItem = styled.li`
  background-color: ${cores.Pêssego};
  color: ${cores.RosaAvermelhado};
  display: flex;
  height: 100px;
  position: relative;
  margin-bottom: 16px;
  padding: 8px 0 12px 8px;
`

export const ItemImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`

export const closeBtn = styled.img`
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
  cursor: pointer;
`

export const price = styled.div`
  margin-left: 8px;
  p {
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: 900;
  }
  span {
    font-size: 14px;
    font-weight: 400;
  }
`

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 32px 0 16px 0;

  p,
  span {
    font-weight: 700;
    font-size: 14px;
  }
`
