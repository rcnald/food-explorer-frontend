type ValidationParams = (value: string) => boolean

export interface ValidationProps {
  validation: ValidationParams
  errorMessage: (value?: string) => string
}

export type ValidationArrayProps = Array<ValidationProps>

export interface ValidationConfigProps {
  [key: string]: ValidationArrayProps
}

export type HandleChangeInputParams = (
  event: HTMLInputElement,
  validationConfig?: ValidationArrayProps,
) => void
