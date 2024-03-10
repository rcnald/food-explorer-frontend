import { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { LuChevronLeft } from 'react-icons/lu'
import { PiReceipt } from 'react-icons/pi'
import imageSrc from '../../assets/Mask group-1.png'
import { Button, ButtonIcon } from '../../components/ui/button'
import { Footer } from '../../components/ui/footer'
import { Header } from '../../components/ui/header'
import { Tag } from '../../components/ui/tag'
import * as Styled from './styles'

export function Dish() {
  const [amount, setAmount] = useState(0)

  const handleIncrement = () => {
    setAmount((prev) => ++prev)
  }

  const handleDecrement = () => {
    setAmount((prev) => (prev > 0 ? --prev : 0))
  }

  return (
    <Styled.Dish>
      <Header />
      <main>
        <Button variant="link">
          <ButtonIcon icon={LuChevronLeft}></ButtonIcon>
          Voltar
        </Button>

        <div>
          <img src={imageSrc} alt="" />
          <div>
            <h1>Salada Ravanello</h1>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
              O pão naan dá um toque especial.
            </p>
            <ul>
              <Tag>ingredients</Tag>
            </ul>
            <div>
              <div>
                <button onClick={handleDecrement}>
                  <FaMinus />
                </button>
                <span>{amount.toString().padStart(2, '0')}</span>
                <button onClick={handleIncrement}>
                  <FaPlus />
                </button>
              </div>
              <Button>
                <ButtonIcon icon={PiReceipt} />
                incluir &#xB7; R$ 25,00
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Styled.Dish>
  )
}
