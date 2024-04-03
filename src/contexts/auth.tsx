import { AxiosError } from 'axios'
import { PropsWithChildren, createContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { api } from '../services/api'

export const AuthContext = createContext({})

interface AuthProviderProps extends PropsWithChildren {}

interface UserResponseProps {
  name?: string
  email?: string
  favorite_dishes_id?: Array<number>
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
  success: boolean
  user: UserResponseProps
}

interface UsersResponseProps {
  message: string
  success: boolean
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser, removeUser] = useLocalStorage<UserResponseProps>(
    '@food-explorer:user',
    {},
  )

  function isAxiosError(error: unknown): error is AxiosError {
    return (error as AxiosError).isAxiosError !== undefined
  }

  function handleSignInError(error: unknown) {
    if (isAxiosError(error)) {
      const axiosError = error as AxiosError<{
        message: string
        success: string
      }>
      if (axiosError.response) {
        const errorMessage = axiosError.response.data.message
        alert(errorMessage)
      } else {
        alert('Erro de requisição')
      }
    } else {
      alert('Erro genérico')
    }
  }

  async function signIn({ email, password }: SignInProps): Promise<void> {
    try {
      const response = await api.post<SessionResponseProps>(
        '/session',
        {
          email,
          password,
        },
        { withCredentials: true },
      )

      const { user } = response.data

      setUser(user)
    } catch (error) {
      handleSignInError(error)
    }
  }
  async function register({
    name,
    email,
    password,
  }: RegistersProps): Promise<void> {
    try {
      const response = await api.post<UsersResponseProps>('/users', {
        name,
        email,
        password,
      })

      alert(response.data)
    } catch (error) {
      handleSignInError(error)
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
