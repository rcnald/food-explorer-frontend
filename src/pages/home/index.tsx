import { Footer } from '../../components/ui/footer'
import { Header } from '../../components/ui/header'
import { Hero } from '../../components/ui/hero'
import * as Styled from './styles'

export function Home() {
  return (
    <Styled.Home>
      <Header />
      <Hero />
      <Footer />
    </Styled.Home>
  )
}
