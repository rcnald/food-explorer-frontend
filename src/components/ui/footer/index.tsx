import { Logo } from '../logo'
import * as Styled from './styles'

export function Footer() {
  return (
    <Styled.Footer>
      <div>
        <Logo variants="neutral" />
        <span>© 2023 - Todos os direitos reservados.</span>
      </div>
    </Styled.Footer>
  )
}
