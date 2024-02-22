// eslint-disable-next-line prettier/prettier
import { useRef, useState } from 'react';
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

type HandleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => void

type LoginValidationConfig = Pick<ValidationConfigProps, 'email' | 'password'>

export function useLogin() {
  const formRef = useRef<HTMLFormElement>(null)
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

  const isInputsValid =
    data.field.email.valid &&
    data.field.password.valid &&
    data.user.email &&
    data.user.password

  const validateInputs = () => {
    if (formRef.current) {
      const inputs = Array.from(formRef.current.getElementsByTagName('input'))

      inputs.forEach((input) => {
        const inputValidations = validations[input.id as 'email' | 'password']
        handleChange(input, inputValidations)
      })

      const firstInvalidInput = inputs.find((input) => {
        const inputValidations = validations[input.id as 'email' | 'password']
        return !inputValidations.every((validation) =>
          validation.validation(input.value),
        )
      })

      firstInvalidInput?.focus()
    }
  }

  const handleSubmit: HandleFormSubmit = (e) => {
    e.preventDefault()

    validateInputs()

    if (!isInputsValid) console.log('ruim')
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

  return {
    data,
    handleChange,
    handleSubmit,
    validations,
    formRef,
  }
}
