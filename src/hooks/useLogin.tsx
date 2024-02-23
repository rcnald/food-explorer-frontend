import { isEmailValid } from '../lib/utils'
import { DataProps, ValidationConfig } from '../types'
import { useForm } from './useForm'

type LoginProps = 'email' | 'password'

export function useLogin() {
  const initialData: DataProps<LoginProps> = {
    user: {
      email: '',
      password: '',
    },
    field: {
      email: { message: '', valid: true },
      password: { message: '', valid: true },
    },
  }

  const validations: ValidationConfig<LoginProps> = {
    email: {
      validations: [
        {
          validation: isEmailValid,
          type: 'passive',
          errorMessage: () => 'Email inválido',
        },
      ],
    },
    password: {
      validations: [
        {
          validation: (value) => value.length >= 6,
          type: 'passive',
          errorMessage: () => `A senha deve conter pelo menos 6 caracteres`,
        },
      ],
    },
  }

  const validateFields: LoginProps[] = ['email', 'password']

  return useForm(initialData, validations, validateFields)
}
