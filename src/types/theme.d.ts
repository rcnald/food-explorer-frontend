import 'styled-components'

type LightKeys = 100 | 200 | 300 | 400 | 500 | 600 | 700
type DarkKeys = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950
type GradientKeys = 100 | 200
type TomatoKeys = 100 | 200 | 300 | 400
type CarrotKeys = 100
type MintKeys = 100
type CakeKeys = 100 | 200

type LightProps = {
  [P in LightKeys]: string
}

type DarkProps = {
  [P in DarkKeys]: string
}

type GradientProps = {
  [P in GradientKeys]: string
}

type TomatoProps = {
  [P in TomatoKeys]: string
}

type CarrotProps = {
  [P in CarrotKeys]: string
}

type MintProps = {
  [P in MintKeys]: string
}

type CakeProps = {
  [P in CakeKeys]: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    COLORS: {
      LIGHT: LightProps
      DARK: DarkProps
      GRADIENTS: GradientProps
      TINTS: {
        TOMATO: TomatoProps
        CARROT: CarrotProps
        MINT: MintProps
        CAKE: CakeProps
      }
    }
  }
}
