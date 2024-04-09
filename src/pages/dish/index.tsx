import { useEffect, useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { LuChevronLeft } from 'react-icons/lu'
import { Link, useParams } from 'react-router-dom'
import { Button, ButtonIcon } from '../../components/ui/button'

import { Footer } from '../../components/ui/footer'
import { Header } from '../../components/ui/header'
import { Tag } from '../../components/ui/tag'
import { useAuth } from '../../hooks/useAuth'
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
  const [dish, setDish] = useState<DishProps>()
  const [amount, setAmount] = useState(1)
  const { user } = useAuth() as {
    user: {
      email: string
      favoriteDishesId: Array<number>
      id: number
      name: string
      role: 'admin' | 'customer'
    }
  }

  const handleIncrement = () => {
    setAmount((prev) => ++prev)
  }

  const handleDecrement = () => {
    setAmount((prev) => (prev > 1 ? --prev : 1))
  }

  interface ResponseDish {
    dish: DishProps
  }

  useEffect(() => {
    const fetchData = async () => {
      const dish = await api.get<ResponseDish>(`/dish/${id}`)

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
          <img src={`${api.defaults.baseURL}files/${dish?.photo}`} alt="" />
          <div>
            <h1>{dish?.name}</h1>
            <p>{dish?.description}</p>
            <ul>
              {dish?.ingredients.map((ingredient) => {
                return <Tag key={ingredient.id}>{ingredient.name}</Tag>
              })}
            </ul>
            <div>
              {user.role !== 'admin' ? (
                <div>
                  <button onClick={handleDecrement}>
                    <FaMinus />
                  </button>
                  <span>{amount.toString().padStart(2, '0')}</span>
                  <button onClick={handleIncrement}>
                    <FaPlus />
                  </button>
                </div>
              ) : null}

              <Link
                to={
                  user.role === 'admin'
                    ? `/dish/${dish?.id}/edit`
                    : `/dish/${dish?.id}`
                }
              >
                <Button>
                  {user.role === 'admin' ? (
                    'Editar prato'
                  ) : (
                    <>
                      incluir &#xB7;{' '}
                      {formatCentsToCurrency((dish?.price ?? 0) * amount)}
                    </>
                  )}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Styled.Dish>
  )
}
