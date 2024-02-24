import { ComponentProps } from 'react'
import * as Styled from './styles'

interface ButtonProps extends ComponentProps<'button'> {
  children: React.ReactNode
  variant?: 'default' | 'link'
}

interface ButtonIconProps {
  icon: React.ElementType
}

export function Button({
  children,
  variant = 'default',
  ...props
}: ButtonProps) {
  return (
    <Styled.Button $variant={variant} {...props}>
      {children}
    </Styled.Button>
  )
}

export function ButtonIcon({ icon: Icon }: ButtonIconProps) {
  return <Icon />
}
