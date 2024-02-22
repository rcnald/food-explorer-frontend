import Icons from '../../../lib/icons'
import * as Styled from './styles'

const { FoodExplorer } = Icons

interface LogoProps {
  variants?: 'neutral' | 'default'
  isAdmin?: boolean
}

export function Logo({ variants = 'default', isAdmin = false }: LogoProps) {
  return (
    <Styled.Div $variant={variants}>
      <FoodExplorer />
      <span>
        food explorer
        {isAdmin ? <span>admin</span> : null}
      </span>
    </Styled.Div>
  )
}
