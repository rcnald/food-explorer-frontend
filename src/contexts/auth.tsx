import { PropsWithChildren, createContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { handleError } from '../lib/utils'
import { api } from '../services/api'
import { ResponseProps } from '../types'

export const AuthContext = createContext({})

interface AuthProviderProps extends PropsWithChildren {}

interface UserResponseProps {
  name?: string
  email?: string
  role?: 'customer' | 'admin'
}

export interface SignInProps {
  email: string
  password: string
}

export interface RegistersProps {
  name: string
  email: string
  password: string
}

interface SessionResponseProps {
  message: string
  status: 'error' | 'success'
  user: UserResponseProps
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser, removeUser] = useLocalStorage<UserResponseProps>(
    '@food-explorer:user',
    {},
  )

  async function signIn({
    email,
    password,
  }: SignInProps): Promise<ResponseProps> {
    try {
      const response = await api.post<SessionResponseProps>(
        '/session',
        {
          email,
          password,
        },
        { withCredentials: true },
      )

      const { user, message, status } = response.data

      setUser(user)
      return { message, status }
    } catch (error) {
      const { message, status } = handleError(error)
      return { message, status }
    }
  }
  async function register({
    name,
    email,
    password,
  }: RegistersProps): Promise<ResponseProps> {
    try {
      const response = await api.post<ResponseProps>('/users', {
        name,
        email,
        password,
      })
      const { message, status } = response.data

      return { message, status }
    } catch (error) {
      const { message, status } = handleError(error)
      return { message, status }
    }
  }

  function signOut() {
    removeUser()
  }

  return (
    <AuthContext.Provider value={{ signIn, user, signOut, register }}>
      {children}
    </AuthContext.Provider>
  )
}
