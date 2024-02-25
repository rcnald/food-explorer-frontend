import heroImage from '../../../assets/hero.png'
import * as Styled from './styles'

export function Hero() {
  return (
    <Styled.Hero>
      <img src={heroImage} alt="" />
      <div>
        <h1>Sabores inigualáveis</h1>
        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
      </div>
    </Styled.Hero>
  )
}
