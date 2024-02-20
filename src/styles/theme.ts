import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  COLORS: {
    LIGHT: {
      100: '#FFFFFF',
      200: '#FFFAF1',
      300: '#E1E1E6',
      400: '#C4C4CC',
      500: '#7C7C8A',
      600: '#76797B',
      700: '#4D585E',
    },
    DARK: {
      100: '#000405',
      200: '#00070A',
      300: '#000204',
      400: '#000A0F',
      500: '#000C12',
      600: '#00111A',
      700: '#001119',
      800: '#0D161B',
      900: '#0D1D25',
      950: '#192227',
    },
    GRADIENTS: {
      100: '90deg, rgba(0,10,15,0.275) 0%, rgba(0,10,15,1) 100%',
      200: '90deg, rgba(9,30,38,1) 0%, rgba(0,19,28,1) 100%',
    },
    TINTS: {
      TOMATO: {
        100: '#750310',
        200: '#92000E',
        300: '#AB222E',
        400: '#AB4D55',
      },
      CARROT: { 100: '#FBA94C' },
      MINT: { 100: '#04D361' },
      CAKE: { 100: '#82F3FF', 200: '#065E7C' },
    },
  },
}

export default theme
