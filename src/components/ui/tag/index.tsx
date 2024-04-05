import { ChangeEventHandler, ComponentProps, KeyboardEventHandler } from 'react'
import * as Styled from './styles'

interface TagProps {
  variant?: 'default' | 'light' | 'outline'
  children?: React.ReactNode
  onClick?: () => void
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined
  value?: string
}

interface TagIconProps extends ComponentProps<'svg'> {
  icon: React.ElementType
}

export function Tag({
  variant = 'default',
  onChange,
  onClick,
  value,
  children,
}: TagProps) {
  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      if (onClick) onClick()
    }
  }

  return (
    <Styled.Tag $variant={variant}>
      {variant === 'outline' ? (
        <>
          <input
            type="text"
            placeholder="Adicionar"
            onChange={onChange}
            onKeyDown={handleKeyDown}
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
