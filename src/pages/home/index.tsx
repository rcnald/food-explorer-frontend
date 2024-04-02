import { useState } from 'react'
import { LuPencil } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/button'
import {
  Card,
  CardAction,
  CardControls,
  CardDescription,
  CardImage,
  CardPrice,
  CardQuantityControl,
  CardTitle,
} from '../../components/ui/card'
import { Footer } from '../../components/ui/footer'
import { Header } from '../../components/ui/header'
import { Hero } from '../../components/ui/hero'
import {
  Section,
  SectionSlider,
  SectionTitle,
} from '../../components/ui/section'
import { useAuth } from '../../hooks/useAuth'
import { useMenu } from '../../hooks/useMenu'
import { formatCentsToCurrency } from '../../lib/utils'
import { api } from '../../services/api'
import * as Styled from './styles'

export function Home() {
  const [query, setQuery] = useState('')
  const { user } = useAuth() as {
    user: {
      email: string
      favoriteDishesId: Array<number>
      id: number
      name: string
      role: 'admin' | 'customer'
    }
  }
  const { desserts, drinks, meals } = useMenu({ query })

  return (
    <Styled.Home>
      <Header value={query} onChange={(input) => setQuery(input.value)} />
      <Hero />

      <main>
        <Section>
          <SectionTitle>Refeições</SectionTitle>
          <SectionSlider slidesPerView={3}>
            {meals?.length ? (
              meals.map((meal) => {
                return (
                  <Card key={meal.id} id={meal.id.toString()}>
                    {user.role === 'admin' ? (
                      <Link to={`/dish/${meal.id}/edit`}>
                        <CardAction
                          isToggle={true}
                          icons={{ regular: LuPencil }}
                        />
                      </Link>
                    ) : null}
                    <CardImage
                      src={`${api.defaults.baseURL}/files/${meal?.photo}`}
                      alt="DADA"
                    />
                    <CardTitle>{meal.name}</CardTitle>
                    <CardDescription>{meal.description}</CardDescription>
                    <CardPrice>{formatCentsToCurrency(meal.price)}</CardPrice>
                    {user.role !== 'admin' ? (
                      <CardControls>
                        <CardQuantityControl />
                        <Button>incluir</Button>
                      </CardControls>
                    ) : null}
                  </Card>
                )
              })
            ) : (
              <span>Não encontrados!</span>
            )}
          </SectionSlider>
        </Section>
        <Section>
          <SectionTitle>Sobremesas</SectionTitle>
          <SectionSlider slidesPerView={3}>
            {desserts?.length ? (
              desserts.map((dessert) => {
                return (
                  <Card key={dessert.id} id={dessert.id.toString()}>
                    {user.role === 'admin' ? (
                      <Link to={`/dish/${dessert.id}/edit`}>
                        <CardAction
                          isToggle={true}
                          icons={{ regular: LuPencil }}
                        />
                      </Link>
                    ) : null}
                    <CardImage
                      src={`${api.defaults.baseURL}/files/${dessert?.photo}`}
                      alt="DADA"
                    />
                    <CardTitle>{dessert.name}</CardTitle>
                    <CardDescription>{dessert.description}</CardDescription>
                    <CardPrice>
                      {formatCentsToCurrency(dessert.price)}
                    </CardPrice>
                    {user.role !== 'admin' ? (
                      <CardControls>
                        <CardQuantityControl />
                        <Button>incluir</Button>
                      </CardControls>
                    ) : null}
                  </Card>
                )
              })
            ) : (
              <span>Não encontrados!</span>
            )}
          </SectionSlider>
        </Section>
        <Section>
          <SectionTitle>Bebidas</SectionTitle>
          <SectionSlider slidesPerView={3}>
            {drinks?.length ? (
              drinks.map((drink) => {
                return (
                  <Card key={drink.id} id={drink.id.toString()}>
                    {user.role === 'admin' ? (
                      <Link to={`/dish/${drink.id}/edit`}>
                        <CardAction
                          isToggle={true}
                          icons={{ regular: LuPencil }}
                        />
                      </Link>
                    ) : null}
                    <CardImage
                      src={`${api.defaults.baseURL}/files/${drink?.photo}`}
                      alt="DADA"
                    />
                    <CardTitle>{drink.name}</CardTitle>
                    <CardDescription>{drink.description}</CardDescription>
                    <CardPrice>{formatCentsToCurrency(drink.price)}</CardPrice>
                    {user.role !== 'admin' ? (
                      <CardControls>
                        <CardQuantityControl />
                        <Button>incluir</Button>
                      </CardControls>
                    ) : null}
                  </Card>
                )
              })
            ) : (
              <span>Não encontrados!</span>
            )}
          </SectionSlider>
        </Section>
      </main>
      <Footer />
    </Styled.Home>
  )
}
