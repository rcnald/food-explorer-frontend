import { BrowserRouter } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { AdminRoutes } from './admin.routes '
import { AuthRoutes } from './auth.routes'
import { CustomerRoutes } from './customer.routes'

export function Routes() {
  const { user } = useAuth() as {
    user: {
      email: string
      favoriteDishesId: Array<number>
      id: number
      name: string
      role: 'admin' | 'customer'
    }
  }

  function AccessRoutes() {
    switch (user.role) {
      case 'admin':
        return <AdminRoutes />
      case 'customer':
        return <CustomerRoutes />
      default:
        return <CustomerRoutes />
    }
  }

  return (
    <BrowserRouter>{user.id ? <AccessRoutes /> : <AuthRoutes />}</BrowserRouter>
  )
}
