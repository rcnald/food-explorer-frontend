import { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import {
  Card,
  CardAction,
  CardControls,
  CardDescription,
  CardImage,
  CardPrice,
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
import { useMenu } from '../../hooks/useMenu'
import { formatCentsToCurrency } from '../../lib/utils'
import { api } from '../../services/api'
import * as Styled from './styles'

export function Home() {
  const [query, setQuery] = useState('')
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
                    <CardAction
                      isToggle={true}
                      icons={{ regular: FaRegHeart, toggled: FaHeart }}
                    />
                    <CardImage
                      src={`${api.defaults.baseURL}/files/${meal?.photo}`}
                      alt="DADA"
                    />
                    <CardTitle>{meal.name}</CardTitle>
                    <CardDescription>{meal.description}</CardDescription>
                    <CardPrice>{formatCentsToCurrency(meal.price)}</CardPrice>
                    <CardControls />
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
                    <CardAction
                      isToggle={true}
                      icons={{ regular: FaRegHeart, toggled: FaHeart }}
                    />
                    <CardImage
                      src={`${api.defaults.baseURL}/files/${dessert?.photo}`}
                      alt="DADA"
                    />
                    <CardTitle>{dessert.name}</CardTitle>
                    <CardDescription>{dessert.description}</CardDescription>
                    <CardPrice>
                      {formatCentsToCurrency(dessert.price)}
                    </CardPrice>
                    <CardControls />
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
                    <CardAction
                      isToggle={true}
                      icons={{ regular: FaRegHeart, toggled: FaHeart }}
                    />
                    <CardImage
                      src={`${api.defaults.baseURL}/files/${drink?.photo}`}
                      alt="DADA"
                    />
                    <CardTitle>{drink.name}</CardTitle>
                    <CardDescription>{drink.description}</CardDescription>
                    <CardPrice>{formatCentsToCurrency(drink.price)}</CardPrice>
                    <CardControls />
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
