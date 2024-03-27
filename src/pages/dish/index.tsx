import { useEffect, useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { LuChevronLeft } from 'react-icons/lu'
import { PiReceipt } from 'react-icons/pi'
import { useParams } from 'react-router-dom'
import { Button, ButtonIcon } from '../../components/ui/button'

import { Footer } from '../../components/ui/footer'
import { Header } from '../../components/ui/header'
import { Tag } from '../../components/ui/tag'
import { formatCentsToCurrency } from '../../lib/utils'
import { api } from '../../services/api'
import * as Styled from './styles'

interface DishProps {
  id: number
  name: string
  description: string
  photo: string
  price: number
  category: 'dessert' | 'drink' | 'meal'
  ingredients: [
    {
      name: string
      id: number
    },
    {
      name: string
      id: number
    },
  ]
}

export function Dish() {
  const { id } = useParams()
  const [amount, setAmount] = useState(1)
  const [dish, setDish] = useState<DishProps>()

  const handleIncrement = () => {
    setAmount((prev) => ++prev)
  }

  const handleDecrement = () => {
    setAmount((prev) => (prev > 1 ? --prev : 1))
  }

  interface sexo {
    dish: DishProps
  }

  useEffect(() => {
    const fetchData = async () => {
      const dish = await api.get<sexo>(`/dish/${id}`)

      setDish(dish.data.dish)
    }

    fetchData()
  }, [id])

  return (
    <Styled.Dish>
      <Header />
      <main>
        <Button onClick={() => history.back()} variant="link">
          <ButtonIcon icon={LuChevronLeft}></ButtonIcon>
          Voltar
        </Button>

        <div>
          <img src={`${api.defaults.baseURL}/files/${dish?.photo}`} alt="" />
          <div>
            <h1>{dish?.name}</h1>
            <p>{dish?.description}</p>
            <ul>
              {dish?.ingredients.map((ingredient) => {
                return <Tag key={ingredient.id}>{ingredient.name}</Tag>
              })}
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
                incluir &#xB7;{' '}
                {formatCentsToCurrency((dish?.price ?? 0) * amount)}
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Styled.Dish>
  )
}
