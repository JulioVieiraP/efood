import * as S from './styles'

type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: JSX.Element | string
  disabled?: boolean
}

const Button = ({ type, children, title, to, onClick, disabled }: Props) => {
  if (type === 'button') {
    return (
      <S.ButtonContainer
        type="button"
        title={title}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </S.ButtonContainer>
    )
  }
  if (type === 'submit') {
    return (
      <S.ButtonContainer type="submit" title={title} onClick={onClick}>
        {children}
      </S.ButtonContainer>
    )
  }
  return (
    <S.ButtonLink to={to as string} title={title}>
      {children}
    </S.ButtonLink>
  )
}

export default Button
