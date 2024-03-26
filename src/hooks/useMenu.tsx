import { useEffect, useState } from 'react'
import { api } from '../services/api'

interface DishesProps {
  description: string
  id: number
  name: string
  photo: string
  price: number
}

export function useMenu({ query }: { query: string }) {
  const [data, setData] = useState<{
    desserts: Array<DishesProps> | undefined
    drinks: Array<DishesProps> | undefined
    meals: Array<DishesProps> | undefined
  }>({ desserts: undefined, drinks: undefined, meals: undefined })

  useEffect(() => {
    const fetchData = async () => {
      const desserts = await api.get(`/dish?category=dessert&query=${query}`)
      const drinks = await api.get(`/dish?category=drink&query=${query}`)
      const meals = await api.get(`/dish?category=meal&query=${query}`)

      setData({
        desserts: desserts.data.dishes,
        drinks: drinks.data.dishes,
        meals: meals.data.dishes,
      })
    }

    fetchData()
  }, [query])

  return { desserts: data.desserts, drinks: data.drinks, meals: data.meals }
}
