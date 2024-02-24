import { RuleSet } from 'styled-components'

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
    FONTS: {
      ROBOTO: {
        REGULAR: {
          XS: RuleSet<object>
          SM: RuleSet<object>
          BASE: RuleSet<object>
        }
        BOLD: {
          SM: RuleSet<object>
          LG: RuleSet<object>
          XL: RuleSet<object>
          XL2: RuleSet<object>
          XL3: RuleSet<object>
        }
      }
      POPPINS: {
        REGULAR: {
          XL: RuleSet<object>
        }
        MEDIUM: {
          SM: RuleSet<object>
          LG: RuleSet<object>
          XL2: RuleSet<object>
          XL3: RuleSet<object>
        }
        BOLD: {
          LG: RuleSet<object>
        }
      }
    }
    BREAKPOINT: {
      XS: string
      MD: string
      LG: string
    }
    UTILS: {
      CONTAINER: RuleSet<object>
    }
  }
}
