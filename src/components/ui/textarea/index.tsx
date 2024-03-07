import { ComponentProps } from 'react'
import { HandleChangeInputParams, ValidationFields } from '../../../types'
import * as Styled from './styles'

interface TextareaProps {
  color: [string, string?]
  children: React.ReactNode
}

interface TextareaContentProps
  extends Omit<ComponentProps<'textarea'>, 'onChange'> {
  id: string
  label?: string
  placeholder: string
  type: string
  validation?: ValidationFields
  onChange: HandleChangeInputParams
  children?: React.ReactNode
}

interface TextareaIconProps {
  icon: Array<React.ElementType>
  isValid: boolean
}

interface TextareaFeedbackProps {
  children: React.ReactNode
}

export function Textarea({ color, children }: TextareaProps) {
  return <Styled.Div $color={color}>{children}</Styled.Div>
}

export function TextareaContent({
  id,
  label,
  placeholder,
  validation,
  onChange,
  children,
  ...props
}: TextareaContentProps) {
  return (
    <label htmlFor={id}>
      {label}
      <div>
        <textarea
          id={id}
          placeholder={placeholder}
          onChange={(e) => {
            onChange(e.target, validation)
          }}
          {...props}
        ></textarea>
        {children}
      </div>
    </label>
  )
}

export function TextareaIcon({ icon, isValid }: TextareaIconProps) {
  const [IconResolve, IconReject] = icon
  return isValid ? <IconResolve /> : <IconReject />
}

export function TextareaFeedback({ children }: TextareaFeedbackProps) {
  return <span>{children}</span>
}
