import { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import image from '../../assets/Mask group-1.png'
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
                  <Card key={meal.id}>
                    <CardAction
                      isToggle={true}
                      icons={{ regular: FaRegHeart, toggled: FaHeart }}
                    />
                    <CardImage src={image} alt="DADA" />
                    <CardTitle>{meal.name}</CardTitle>
                    <CardDescription>{meal.description}</CardDescription>
                    <CardPrice>25.97</CardPrice>
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
                  <Card key={dessert.id}>
                    <CardAction
                      isToggle={true}
                      icons={{ regular: FaRegHeart, toggled: FaHeart }}
                    />
                    <CardImage src={image} alt="DADA" />
                    <CardTitle>{dessert.name}</CardTitle>
                    <CardDescription>{dessert.description}</CardDescription>
                    <CardPrice>25.97</CardPrice>
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
                  <Card key={drink.id}>
                    <CardAction
                      isToggle={true}
                      icons={{ regular: FaRegHeart, toggled: FaHeart }}
                    />
                    <CardImage src={image} alt="DADA" />
                    <CardTitle>{drink.name}</CardTitle>
                    <CardDescription>{drink.description}</CardDescription>
                    <CardPrice>25.97</CardPrice>
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
