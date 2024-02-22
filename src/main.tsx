import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { composeProviders } from './lib/utils'
import { SignIn } from './pages/signin'
import Global from './styles/global'
import theme from './styles/theme'

const Providers = composeProviders([[ThemeProvider, { theme }]])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <Global />
      <SignIn />
    </Providers>
  </React.StrictMode>,
)
