import React, { ComponentProps, useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

import { Button } from '../button'
import * as Styled from './styles'

interface CardChildrenProps {
  children: React.ReactNode
}

interface Card extends ComponentProps<'article'> {
  onClick: (event: React.MouseEvent<HTMLElement>) => void
  children: React.ReactNode
}

interface CardImage extends ComponentProps<'img'> {
  src: string
  alt: string
}

interface CardAction {
  isToggle?: boolean
  icons: { regular: React.ElementType; toggled?: React.ElementType }
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

export function Card({ onClick, children }: Card) {
  return <Styled.Card onClick={onClick}>{children}</Styled.Card>
}

export function CardAction({ isToggle, icons }: CardAction) {
  const { regular: Regular, toggled: Toggled } = icons
  const Icon = Toggled ? !isToggle ? <Regular /> : <Toggled /> : <Regular />

  return <button>{Icon}</button>
}

export function CardImage({ src, alt }: CardImage) {
  return <img src={src} alt={alt} />
}

export function CardTitle({ children }: CardChildrenProps) {
  return <h1>{children} &#62;</h1>
}

export function CardDescription({ children }: CardChildrenProps) {
  return <p>{children}</p>
}

export function CardPrice({ children }: CardChildrenProps) {
  return <span>R$ {children}</span>
}

export function CardControls() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <div>
        <button onClick={() => setCount((prev) => (prev > 0 ? --prev : 0))}>
          <FaMinus />
        </button>
        <span>{count.toString().padStart(2, '0')}</span>
        <button onClick={() => setCount((prev) => ++prev)}>
          <FaPlus />
        </button>
      </div>
      <Button>incluir</Button>
    </div>
  )
}
