import styled from 'styled-components'
import { Props } from '.'
import cores from '../../styles/Cores'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.corPrincipal};
  color: ${cores.corSecundaria};
  text-decoration: none;
  font-size: 14px;
  margin-top: 16px;
  margin-bottom: 8px;
  margin-left: 8px;
  padding: 6px 4px;
  font-weight: bold;
  display: inline-block;
`
