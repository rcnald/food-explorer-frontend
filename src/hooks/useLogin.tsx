// eslint-disable-next-line prettier/prettier
import { useState } from 'react';
// eslint-disable-next-line prettier/prettier
import { isEmailValid } from '../lib/utils';
// eslint-disable-next-line prettier/prettier
import { HandleChangeInputParams, ValidationConfigProps } from '../types';

interface DataProps {
  user: {
    email: string
    password: string
  }
  field: {
    email: { message: string; valid: boolean }
    password: { message: string; valid: boolean }
  }
}

type LoginValidationConfig = Pick<ValidationConfigProps, 'email' | 'password'>

export function useLogin() {
  const [data, setData] = useState<DataProps>({
    user: {
      email: '',
      password: '',
    },
    field: {
      email: { message: '', valid: true },
      password: { message: '', valid: true },
    },
  })

  const validations: LoginValidationConfig = {
    email: [
      {
        validation: isEmailValid,
        errorMessage: () => 'Email inválido',
      },
    ],
    password: [
      {
        validation: (value) => value.length >= 6,
        errorMessage: () => `A senha deve conter pelo menos 6 caracteres`,
      },
    ],
  }

  const handleChange: HandleChangeInputParams = (input, validations) => {
    const { id, value } = input

    const invalid = validations?.find(
      (validation) => !validation.validation(value),
    )
    input.setCustomValidity(invalid?.errorMessage(value) ?? '')

    setData((prev) => ({
      ...prev,
      user: {
        ...prev.user,
        [id]: value,
      },
      field: {
        ...prev.field,
        [id]: {
          ...prev.field[id as 'password' | 'email'],
          valid: !invalid,
          message: invalid?.errorMessage(value) ?? '',
        },
      },
    }))
  }

  return { data, handleChange, validations }
}
