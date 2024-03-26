import { BrowserRouter } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

export function Routes() {
  const { user } = useAuth() as {
    user: {
      email: string
      favoriteDishesId: Array<number>
      id: number
      name: string
    }
  }

  return (
    <BrowserRouter>{user.id ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
  )
}
