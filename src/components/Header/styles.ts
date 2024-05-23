import styled from 'styled-components'
import cores from '../../styles/Cores'

export const Header = styled.header`
  background-color: ${cores.Pêssego};
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  img {
    margin-top: 64px;
    margin-bottom: 20px;
  }
`

export const Title = styled.h1`
  margin-top: 138px;
  margin-bottom: 40px;
  color: ${cores.RosaAvermelhado};
`
