import { ChangeEventHandler, ComponentProps } from 'react'
import * as Styled from './styles'

interface TagProps {
  variant?: 'default' | 'light' | 'outline'
  children?: React.ReactNode
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined
  value?: string
}

interface TagIconProps extends ComponentProps<'svg'> {
  icon: React.ElementType
}

export function Tag({
  variant = 'default',
  onChange,
  value,
  children,
}: TagProps) {
  return (
    <Styled.Tag $variant={variant}>
      {variant === 'outline' ? (
        <>
          <input
            type="text"
            placeholder="Adicionar"
            onChange={onChange}
            value={value}
          />
          {children}
        </>
      ) : (
        <>{children}</>
      )}
    </Styled.Tag>
  )
}

export function TagIcon({ icon: Icon, onClick }: TagIconProps) {
  return <Icon onClick={onClick} />
}
