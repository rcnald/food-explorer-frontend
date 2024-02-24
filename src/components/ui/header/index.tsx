import { useState } from 'react'
import { IoMdExit } from 'react-icons/io'
import { LuMenu, LuSearch, LuX } from 'react-icons/lu'

import { PiReceipt } from 'react-icons/pi'
import theme from '../../../styles/theme'
import { Button, ButtonIcon } from '../button'
import { Input, InputContent, InputIcon } from '../input'
import { Logo } from '../logo'
import * as Styled from './styles.ts'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <Styled.Header>
      <div>
        <Button variant="link" onClick={() => setIsMenuOpen((prev) => !prev)}>
          <ButtonIcon icon={isMenuOpen ? LuX : LuMenu}></ButtonIcon>
        </Button>

        <Logo />

        <Styled.Container data-open={isMenuOpen}>
          <div>
            <Input color={[theme.COLORS.LIGHT[500]]}>
              <InputContent
                id="search"
                placeholder="Busque por pratos ou ingredientes"
                type="text"
                onChange={() => console.log('change')}
              >
                <InputIcon isValid={true} icon={[LuSearch]}></InputIcon>
              </InputContent>
            </Input>

            <Styled.Receipt data-count="0">
              <ButtonIcon icon={PiReceipt} />
              <span>Pedidos({0})</span>
            </Styled.Receipt>

            <Button variant="link">
              <ButtonIcon icon={IoMdExit} />
              <span>Sair</span>
            </Button>
          </div>
        </Styled.Container>
      </div>
    </Styled.Header>
  )
}
