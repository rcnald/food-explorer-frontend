// eslint-disable-next-line prettier/prettier
import { useRef, useState } from 'react';
// eslint-disable-next-line prettier/prettier
import { isEmailValid } from '../lib/utils';
// eslint-disable-next-line prettier/prettier
import { DataProps, HandleChangeInputParams, ValidationArrayProps, ValidationConfigProps, ValidationParams, ValidationType } from '../types';


type RegisterProps = 'name' | 'email' | 'password'

type RegisterDataProps = DataProps<RegisterProps>

type HandleFormSubmitParams = (event: React.FormEvent<HTMLFormElement>) => void

type ValidateByTypeParams = (
  type: ValidationType,
  validation: ValidationParams,
  value: string,
) => string | boolean

type HandleValidationParams = (
  validations: ValidationArrayProps,
  input: HTMLInputElement,
) => { message: string; value: string }

type RegisterValidationConfig = Pick<ValidationConfigProps, RegisterProps>

export function useRegister() {
  const formRef = useRef<HTMLFormElement>(null)
  const [data, setData] = useState<RegisterDataProps>({
    user: {
      name: '',
      email: '',
      password: '',
    },
    field: {
      name: { message: '', valid: true },
      email: { message: '', valid: true },
      password: { message: '', valid: true },
    },
  })

  const validations: RegisterValidationConfig = {
    name: [
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
    email: [
      {
        validation: isEmailValid,
        type: 'passive',
        errorMessage: () => 'Email inválido',
      },
    ],
    password: [
      {
        validation: (value) => value.length >= 6,
        type: 'passive',
        errorMessage: () => `A senha deve conter pelo menos 6 caracteres`,
      },
    ],
  }

  const validateInputs = <T extends string>(
    data: DataProps<T>,
    fields: T[],
  ): boolean => {
    return fields.every((field) => data.field[field]?.valid && data.user[field])
  }

  const validateInputsToUser = (form: HTMLFormElement | null) => {
    if (form) {
      const inputs = Array.from(form.getElementsByTagName('input'))

      inputs.forEach((input) => {
        const inputValidations = validations[input.id as RegisterProps]
        handleChange(input, inputValidations)
      })

      const firstInvalidInput = inputs.find((input) => {
        const inputValidations = validations[input.id as RegisterProps]
        return !inputValidations.every((validation) =>
          validation.validation(input.value),
        )
      })

      firstInvalidInput?.focus()
    }
  }

  const validateByType: ValidateByTypeParams = (type, validation, value) => {
    const result = validation(value)

    switch (type) {
      case 'passive':
        return result as boolean
      case 'active':
        return result as string
    }
  }

  const handleValidation: HandleValidationParams = (validations, input) => {
    let { value } = input

    let message = ''

    validations.forEach((validation) => {
      const result = validateByType(
        validation.type,
        validation.validation,
        value,
      )

      if (typeof result === 'string') value = result
      if (result === false) message = validation.errorMessage()

      input.setCustomValidity(message)
    })

    return { message, value }
  }

  const handleSubmit: HandleFormSubmitParams = (e) => {
    e.preventDefault()

    validateInputsToUser(formRef.current)

    const isInputsValid = validateInputs<RegisterProps>(data, [
      'name',
      'email',
      'password',
    ])

    if (!isInputsValid) console.log('ruim')
  }

  const handleChange: HandleChangeInputParams = (input, validations) => {
    const { id, value } = input

    const { message, value: validValue } = handleValidation(validations, input)

    setData((prev) => ({
      ...prev,
      user: {
        ...prev.user,
        [id]: validValue ?? value,
      },
      field: {
        ...prev.field,
        [id]: {
          ...prev.field[id as RegisterProps],
          valid: !message,
          message,
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
