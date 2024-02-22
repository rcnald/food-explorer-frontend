export interface DataProps<T extends string> {
  user: {
    [key in T]: string
  }
  field: {
    [key in T]: { message: string; valid: boolean }
  }
}

export type ValidationParams = (value: string) => boolean | string

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

export type HandleChangeInputParams = (
  element: HTMLInputElement,
  validations: ValidationArrayProps,
) => void
