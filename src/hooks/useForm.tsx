import { useRef, useState } from 'react'
import {
  DataProps,
  HandleChangeInputParams,
  HandleFormSubmitParams,
  HandleValidationParams,
  ValidateByTypeParams,
  ValidationConfig,
} from '../types'

export function useForm<T extends string>(
  initialData: DataProps<T>,
  validations: ValidationConfig<T>,
  validateInputsFields: Array<T>,
) {
  const formRef = useRef<HTMLFormElement>(null)
  const [data, setData] = useState<DataProps<T>>(initialData)

  const validateInputs = (data: DataProps<T>, fields: Array<T>): boolean => {
    return fields.every((field) => data.field[field]?.valid && data.user[field])
  }

  const validateInputsToUser = (form: HTMLFormElement | null) => {
    if (form) {
      const inputs = Array.from(form.getElementsByTagName('input'))

      inputs.forEach((input) => {
        const inputValidations = validations[input.id as T]
        handleChange(input, inputValidations)
      })

      const firstInvalidInput = inputs.find((input) => {
        const inputValidations = validations[input.id as T]
        return !inputValidations.validations.every((validation) =>
          validation.validation(input.value),
        )
      })

      firstInvalidInput?.focus()
    }
  }

  const validateByType: ValidateByTypeParams = (
    type,
    validation,
    value,
    compareValue,
  ) => {
    const result = validation(value, compareValue)

    switch (type) {
      case 'passive':
        return result as boolean
      case 'active':
        return result as string
    }
  }

  const handleValidation: HandleValidationParams = (input, config) => {
    let { value } = input
    let message = ''

    if (config) {
      const { validations, compareField } = config

      validations.forEach((validation) => {
        const result = validateByType(
          validation.type,
          validation.validation,
          value,
          data.user[compareField as T],
        )

        if (typeof result === 'string') value = result
        if (result === false) message = validation.errorMessage()

        input.setCustomValidity(message)
      })
    }

    return { message, value }
  }

  const handleSubmit: HandleFormSubmitParams = (e) => {
    e.preventDefault()

    validateInputsToUser(formRef.current)

    const isInputsValid = validateInputs(data, validateInputsFields)

    if (!isInputsValid) console.log('ruim')
  }

  const handleChange: HandleChangeInputParams = (input, validations) => {
    const { id, value } = input

    const { message, value: validValue } = handleValidation(input, validations)

    setData((prev) => ({
      ...prev,
      user: {
        ...prev.user,
        [id]: validValue ?? value,
      },
      field: {
        ...prev.field,
        [id]: {
          ...prev.field[id as T],
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
