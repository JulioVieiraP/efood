import * as React from 'react'
import * as S from './styles'

export type Props = {
  children: React.ReactNode
}

const Tag = ({ children }: Props) => <S.TagContainer>{children}</S.TagContainer>

export default Tag
