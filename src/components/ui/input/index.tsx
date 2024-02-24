import { ComponentProps } from 'react'
import { HandleChangeInputParams, ValidationFields } from '../../../types'
import * as Styled from './styles'

interface InputProps {
  color: [string, string?]
  children: React.ReactNode
}

interface InputContentProps extends Omit<ComponentProps<'input'>, 'onChange'> {
  id: string
  label?: string
  placeholder: string
  type: string
  validation?: ValidationFields
  onChange: HandleChangeInputParams
  children?: React.ReactNode
}

interface InputIconProps {
  icon: Array<React.ElementType>
  isValid: boolean
}

interface InputFeedbackProps {
  children: React.ReactNode
}

export function Input({ color, children }: InputProps) {
  return <Styled.Div $color={color}>{children}</Styled.Div>
}

export function InputContent({
  id,
  label,
  placeholder,
  type,
  validation,
  onChange,
  children,
  ...props
}: InputContentProps) {
  return (
    <label htmlFor={id}>
      {label}
      <div>
        <input
          id={id}
          placeholder={placeholder}
          type={type}
          onChange={(e) => {
            onChange(e.target, validation)
          }}
          {...props}
        />
        {children}
      </div>
    </label>
  )
}

export function InputIcon({ icon, isValid }: InputIconProps) {
  const [IconResolve, IconReject] = icon
  return isValid ? <IconResolve /> : <IconReject />
}

export function InputFeedback({ children }: InputFeedbackProps) {
  return <span>{children}</span>
}
