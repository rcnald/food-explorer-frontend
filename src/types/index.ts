export type FieldState = {
  message: string
  valid: boolean
}

export interface DataProps<T extends string> {
  user: Record<T, string>
  field: Record<T, FieldState>
}

export type ValidationParams = (
  value: string,
  compareValue?: string,
) => boolean | string

export type ValidationType = 'passive' | 'active'
export interface ValidationProps {
  validation: ValidationParams
  type: ValidationType
  errorMessage: (value?: string) => string
}

export type ValidationArrayProps = Array<ValidationProps>

export interface ValidationConfigProps {
  [key: string]: ValidationArrayProps
}
export interface ValidationFields {
  validations: Array<ValidationProps>
  compareField?: string // Field to compare with
}

export type HandleChangeInputParams = (
  element: HTMLInputElement,
  validations?: ValidationFields,
) => void

export type HandleFormSubmitParams = (
  event: React.FormEvent<HTMLFormElement>,
) => void

export type ValidationConfig<T extends string> = {
  [key in T]: ValidationFields
}

export type ValidateByTypeParams = (
  type: ValidationType,
  validation: ValidationParams,
  value: string,
  compareValue?: string,
) => string | boolean

export type HandleValidationParams = (
  input: HTMLInputElement,
  validations?: ValidationFields,
) => { message: string; value: string }
