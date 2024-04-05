import { useRef, useState } from 'react'
import {
  DataProps,
  HandleChangeInputParams,
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
      const textareas = Array.from(form.getElementsByTagName('textarea'))

      inputs.forEach((input) => {
        const inputValidations = validations[input.id as T]
        handleChange(input, inputValidations)
      })

      textareas.forEach((textarea) => {
        const inputValidations = validations[textarea.id as T]
        handleChange(textarea, inputValidations)
      })

      const firstInvalidInput = inputs.find((input) => {
        if (input.id) {
          const inputValidations = validations[input.id as T]
          return !inputValidations.validations.every((validation) =>
            validation.validation(input.value),
          )
        }
        return null
      })

      const firstInvalidTextarea = textareas.find((textarea) => {
        const inputValidations = validations[textarea.id as T]
        return !inputValidations.validations.every((validation) =>
          validation.validation(textarea.value),
        )
      })

      if (firstInvalidInput) {
        firstInvalidInput?.focus()
      } else {
        firstInvalidTextarea?.focus()
      }
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

  const handleFileValidation: HandleValidationParams = (input) => {
    const { files } = input as HTMLInputElement
    const value = ''
    let message = ''

    if (!files) {
      message = 'Adicione uma foto'
    }

    return { message, value }
  }

  const handleSubmit = () => {
    validateInputsToUser(formRef.current)

    const isInputsValid = validateInputs(data, validateInputsFields)

    if (!isInputsValid) alert('campos vazios')
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

  const handleFileChange: HandleChangeInputParams = (input) => {
    const { files } = input as HTMLInputElement
    const id = 'image'

    const { message } = handleFileValidation(input)

    setData((prev) => ({
      ...prev,
      image: files,
      field: {
        ...prev.field,
        image: {
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
    handleFileChange,
    handleSubmit,
    validations,
    formRef,
    setData,
  }
}
