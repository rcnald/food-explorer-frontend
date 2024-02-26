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
import * as Styled from './styles'

import image from '../../assets/Mask group-1.png'

export function Home() {
  return (
    <Styled.Home>
      <Header />
      <Hero />

      <Card>
        <CardAction
          isToggle={true}
          icons={{ regular: FaRegHeart, toggled: FaHeart }}
        />
        <CardImage src={image} alt="DADA" />
        <CardTitle>Torradas de Parma </CardTitle>
        <CardDescription>
          Presunto de parma e rúcula em um pão com fermentação natural.
        </CardDescription>
        <CardPrice>25.97</CardPrice>
        <CardControls />
      </Card>

      <Footer />
    </Styled.Home>
  )
}
