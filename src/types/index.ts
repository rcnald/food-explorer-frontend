export type FieldState = {
  message: string
  valid: boolean
}

export interface DataProps<T extends string> {
  user: Record<T, string>
  field: Record<T, FieldState>
  image?: FileList | null
}

export interface InputState {
  success: boolean | undefined
  message: string
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
  compareField?: string
}

export type HandleChangeInputParams = (
  element: HTMLInputElement | HTMLTextAreaElement,
  validations?: ValidationFields,
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
  input: HTMLInputElement | HTMLTextAreaElement,
  validations?: ValidationFields,
) => { message: string; value: string }
