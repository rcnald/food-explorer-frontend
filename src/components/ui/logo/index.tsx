import Icons from '../../../lib/icons'
import * as Styled from './styles'

const { FoodExplorer } = Icons

interface LogoProps {
  variants?: 'neutral' | 'default'
}

export function Logo({ variants = 'default' }: LogoProps) {
  return (
    <Styled.Div $variant={variants}>
      <FoodExplorer />
      food explorer
    </Styled.Div>
  )
}
