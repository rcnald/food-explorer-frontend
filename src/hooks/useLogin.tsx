import { SignInProps } from '../contexts/auth'
import { isEmailValid } from '../lib/utils'
import { DataProps, ValidationConfig } from '../types'
import { useAuth } from './useAuth'
import { useForm } from './useForm'

type LoginProps = 'email' | 'password'

export function useLogin() {
  const { signIn } = useAuth() as {
    signIn: (params: SignInProps) => Promise<void>
  }

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

  const validation: ValidationConfig<LoginProps> = {
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

  const { data, handleChange, handleSubmit, validations, formRef } = useForm(
    initialData,
    validation,
    validateFields,
  )

  return {
    data,
    handleChange,
    handleSubmit: () => {
      handleSubmit()
      signIn({ email: data.user.email, password: data.user.password })
    },
    validations,
    formRef,
  }
}
