import { isEmailValid } from '../lib/utils'
import { DataProps, ValidationConfig } from '../types'

import { useForm } from './useForm'

type RegisterProps = 'name' | 'email' | 'password' | 'confirmPassword'

export function useRegister() {
  const initialData: DataProps<RegisterProps> = {
    user: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    field: {
      name: { message: '', valid: true },
      email: { message: '', valid: true },
      password: { message: '', valid: true },
      confirmPassword: { message: '', valid: true },
    },
  }

  const validations: ValidationConfig<RegisterProps> = {
    name: {
      validations: [
        {
          validation: (value) => value.replace(/\d/g, ''),
          type: 'active',
          errorMessage: () => '',
        },
        {
          validation: (value) => value.length > 0,
          type: 'active',
          errorMessage: () => 'Preencha este campo',
        },
      ],
    },
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
    confirmPassword: {
      validations: [
        {
          validation: (value, compareValue) => value === compareValue,
          type: 'passive',
          errorMessage: () => `A senha  não confere`,
        },
        {
          validation: (value) => value.length >= 6,
          type: 'passive',
          errorMessage: () => `A senha deve conter pelo menos 6 caracteres`,
        },
      ],
      compareField: 'password',
    },
  }

  const validateFields: RegisterProps[] = [
    'name',
    'email',
    'password',
    'confirmPassword',
  ]

  return useForm(initialData, validations, validateFields)
}
