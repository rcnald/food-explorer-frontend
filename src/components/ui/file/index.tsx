import { ComponentProps } from 'react'
// import { HandleChangeFileParams, ValidationFields } from '../../../types'
import * as Styled from './styles'

interface FileProps {
  color: [string, string?]
  children: React.ReactNode
}

interface FileContentProps extends ComponentProps<'input'> {
  id: string
  label?: string
  placeholder: string
  // type: string
  // validation?: ValidationFields
  // onChange: HandleChangeFileParams
  children?: React.ReactNode
}

interface FileIconProps {
  icon: React.ElementType
}

interface FileFeedbackProps {
  children: React.ReactNode
}

export function File({ color, children }: FileProps) {
  return <Styled.Div $color={color}>{children}</Styled.Div>
}

export function FileContent({
  id,
  label,
  placeholder,
  children,
  onChange,
  ...props
}: FileContentProps) {
  return (
    <label htmlFor={id}>
      {label}
      <div>
        <input
          onChange={onChange}
          {...props}
          id={id}
          accept="image/*"
          multiple={false}
          type="file"
        />
        <div>
          {children}
          {placeholder}
        </div>
      </div>
    </label>
  )
}

export function FileIcon({ icon: Icon }: FileIconProps) {
  return <Icon />
}

export function FileFeedback({ children }: FileFeedbackProps) {
  return <span>{children}</span>
}
