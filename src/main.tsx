import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { composeProviders } from './lib/utils'
import { SignUp } from './pages/signup'
import Global from './styles/global'
import theme from './styles/theme'

const Providers = composeProviders([[ThemeProvider, { theme }]])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <Global />
      <SignUp />
    </Providers>
  </React.StrictMode>,
)
