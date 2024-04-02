import React, { ComponentProps, PropsWithChildren, useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

import { Link } from 'react-router-dom'
import * as Styled from './styles'

interface CardChildrenProps {
  children: React.ReactNode
}

interface Card extends ComponentProps<'article'> {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
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

interface CardControls extends PropsWithChildren {}

export function Card({ onClick, id, children }: Card) {
  return (
    <Link to={`/dish/${id}`}>
      <Styled.Card onClick={onClick}>{children}</Styled.Card>
    </Link>
  )
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
  return <span>{children}</span>
}

export function CardControls({ children }: CardControls) {
  return <div>{children}</div>
}

export function CardQuantityControl() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount((prev) => (prev > 0 ? --prev : 0))}>
        <FaMinus />
      </button>
      <span>{count.toString().padStart(2, '0')}</span>
      <button onClick={() => setCount((prev) => ++prev)}>
        <FaPlus />
      </button>
    </div>
  )
}
