import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { composeProviders } from './lib/utils'
import { Home } from './pages/home'
import Global from './styles/global'
import theme from './styles/theme'

const Providers = composeProviders([[ThemeProvider, { theme }]])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <Global />
      <Home />
    </Providers>
  </React.StrictMode>,
)
