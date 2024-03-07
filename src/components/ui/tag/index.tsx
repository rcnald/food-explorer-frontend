import { ChangeEventHandler, MouseEventHandler } from 'react'
import { LuPlus } from 'react-icons/lu'
import * as Styled from './styles'

interface TagProps {
  variant?: 'default' | 'light' | 'outline'
  children?: React.ReactNode
  onClick?: MouseEventHandler<SVGElement> | undefined
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined
  value?: string
}

export function Tag({
  variant = 'default',
  onChange,
  onClick,
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
          <LuPlus onClick={onClick} />
        </>
      ) : (
        children
      )}
    </Styled.Tag>
  )
}
