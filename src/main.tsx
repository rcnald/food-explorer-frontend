import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from './contexts/auth.jsx'
import { composeProviders } from './lib/utils'
import { Routes } from './routes'
import Global from './styles/global'
import theme from './styles/theme'

const Providers = composeProviders([
  [ThemeProvider, { theme }],
  [AuthProvider, {}],
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <Global />
      <Routes />
    </Providers>
  </React.StrictMode>,
)
