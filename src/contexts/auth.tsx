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

interface SessionResponseProps {
  message: string
  success: boolean
  user: UserResponseProps
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
        // Erro de resposta HTTP
        const errorMessage = axiosError.response.data.message
        alert(errorMessage)
      } else {
        // Erro de requisição Axios sem resposta
        alert('Erro de requisição')
      }
    } else {
      // Outro tipo de erro
      alert('Erro genérico')
    }
  }

  async function signIn({ email, password }: SignInProps): Promise<void> {
    try {
      const response = await api.post<SessionResponseProps>('/session', {
        email,
        password,
      })

      const { user } = response.data

      setUser(user)
    } catch (error) {
      handleSignInError(error)
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, user }}>
      {children}
    </AuthContext.Provider>
  )
}
