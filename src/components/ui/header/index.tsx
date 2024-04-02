import { useState } from 'react'
import { IoMdExit } from 'react-icons/io'
import { LuMenu, LuSearch, LuX } from 'react-icons/lu'

import { PiReceipt } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth.tsx'
import theme from '../../../styles/theme'
import { Button, ButtonIcon } from '../button'
import { Input, InputContent, InputIcon } from '../input'
import { Logo } from '../logo'
import * as Styled from './styles.ts'

interface HeaderProps {
  onChange?: (e: HTMLInputElement | HTMLTextAreaElement) => void
  value?: string
}

export function Header({ onChange, value }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { signOut, user } = useAuth() as {
    signOut: () => void
    user: {
      email: string
      favoriteDishesId: Array<number>
      id: number
      name: string
      role: 'admin' | 'customer'
    }
  }

  return (
    <Styled.Header>
      <div>
        <Button variant="link" onClick={() => setIsMenuOpen((prev) => !prev)}>
          <ButtonIcon icon={isMenuOpen ? LuX : LuMenu}></ButtonIcon>
        </Button>
        <Link to={'/'}>
          <Logo isAdmin={user.role === 'admin'} />
        </Link>

        <Styled.Container data-open={isMenuOpen}>
          <div>
            <Input color={[theme.COLORS.LIGHT[500]]}>
              <InputContent
                id="search"
                placeholder="Busque por pratos ou ingredientes"
                type="text"
                value={value}
                onChange={onChange}
              >
                <InputIcon isValid={true} icon={[LuSearch]}></InputIcon>
              </InputContent>
            </Input>

            <Link to={user.role === 'admin' ? '/dish/create' : '/'}>
              <Styled.Receipt data-count="0" $isAdmin={user.role === 'admin'}>
                {user.role === 'admin' ? (
                  'Novo Prato'
                ) : (
                  <>
                    <ButtonIcon icon={PiReceipt} />
                    <span>Pedidos({0})</span>
                  </>
                )}
              </Styled.Receipt>
            </Link>

            <Button variant="link" onClick={signOut}>
              <ButtonIcon icon={IoMdExit} />
              <span>Sair</span>
            </Button>
          </div>
        </Styled.Container>
      </div>
    </Styled.Header>
  )
}
