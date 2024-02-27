import { DefaultTheme, css } from 'styled-components'

const theme: DefaultTheme = {
  COLORS: {
    LIGHT: {
      100.5: 'rgba(255,255,255,.2)',
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
      100: '90deg, rgba(0,10,15,0) 0%, rgba(0,10,15,1) 100%',
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
      CAKE: { 100: '#065E7C', 200: '#82F3FF' },
    },
  },
  FONTS: {
    ROBOTO: {
      REGULAR: {
        XS: css`
          font-family: 'Roboto', sans-serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 160%;
        `,
        SM: css`
          font-family: 'Roboto', sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 160%;
        `,
        BASE: css`
          font-family: 'Roboto', sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 160%;
        `,
      },
      BOLD: {
        SM: css`
          font-family: 'Roboto', sans-serif;
          font-weight: 700;
          font-size: 14px;
          line-height: 160%;
        `,
        LG: css`
          font-family: 'Roboto', sans-serif;
          font-size: 20px;
          font-weight: 700;
          line-height: 160%;
        `,
        XL: css`
          font-family: 'Roboto', sans-serif;
          font-size: 24px;
          font-weight: 700;
          line-height: normal;
        `,
        XL2: css`
          font-family: 'Roboto', sans-serif;
          font-size: 32px;
          font-weight: 700;
          line-height: 160%;
        `,
        XL3: css`
          font-family: 'Roboto', sans-serif;
          font-size: 42px;
          font-weight: 700;
          line-height: normal;
        `,
      },
    },
    POPPINS: {
      REGULAR: {
        XL: css`
          font-family: 'Poppins', sans-serif;
          font-size: 24px;
          font-weight: 400;
          line-height: 160%;
        `,
      },
      MEDIUM: {
        SM: css`
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 24px;
        `,
        LG: css`
          font-family: 'Poppins', sans-serif;
          font-size: 20px;
          font-weight: 500;
          line-height: 160%;
        `,
        XL2: css`
          font-family: 'Poppins', sans-serif;
          font-size: 32px;
          font-weight: 500;
          line-height: 140%;
        `,
        XL3: css`
          font-family: 'Poppins', sans-serif;
          font-size: 40px;
          font-weight: 500;
          line-height: 140%;
        `,
      },
      BOLD: {
        LG: css`
          font-family: 'Poppins', sans-serif;
          font-size: 24px;
          font-weight: 700;
          line-height: 140%;
        `,
      },
    },
  },
  BREAKPOINT: { XS: '425px', MD: '768px', LG: '1024px' },
  UTILS: {
    CONTAINER: css`
      max-width: 1160px;
      width: 100%;
      padding: 0px 28px;
    `,
  },
}

export default theme
