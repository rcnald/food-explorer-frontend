import React, {
  ComponentProps,
  Dispatch,
  SetStateAction,
  useId,
  useState,
} from 'react'
import { InputState } from '../../../types'
import * as Styled from './styles'

interface InputProps extends ComponentProps<'label'> {
  children: React.ReactNode
}

interface InputContentProps extends ComponentProps<'div'> {
  id?: string
  setInputData?: Dispatch<SetStateAction<InputState>>
  children: React.ReactNode
}

interface InputLabelProps extends ComponentProps<'span'> {
  children: React.ReactNode
}

interface InputFieldProps extends ComponentProps<'input'> {
  id?: string
  name: string
  type: string
  onValidate?: (
    event: HTMLInputElement,
    setValue?: Dispatch<SetStateAction<InputState>>,
  ) => void
  setInputData?: Dispatch<SetStateAction<InputState>>
}

interface InputIconProps extends ComponentProps<'svg'> {
  icon: React.ElementType
}

interface InputFeedbackProps extends ComponentProps<'span'> {
  children: React.ReactNode
}

function Input({ children }: InputProps) {
  const [inputData, setInputData] = useState<InputState>({
    success: undefined,
    message: '',
  })
  const inputHintId = useId()

  const InputChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === InputContent) {
      return React.cloneElement(
        child as React.ReactElement<InputContentProps>,
        {
          id: inputHintId,
          setInputData,
        },
      )
    } else {
      return child
    }
  })

  return (
    <Styled.Label $isValid={inputData?.success} htmlFor={inputHintId}>
      {InputChildren}
    </Styled.Label>
  )
}

function InputContent({
  setInputData,
  id,
  children,
  ...rest
}: InputContentProps) {
  const InputContentChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === InputField) {
      return React.cloneElement(child as React.ReactElement<InputFieldProps>, {
        id,
        setInputData,
      })
    } else {
      return child
    }
  })
  return <div {...rest}>{InputContentChildren}</div>
}

function InputLabel({ children, ...rest }: InputLabelProps) {
  return <span {...rest}>{children}</span>
}

function RootInputField({
  onValidate,
  setInputData,
  id,
  type,
  ...rest
}: InputFieldProps) {
  const [value, setValue] = useState('')
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={(e) => {
        setValue(e.target.value)
        if (onValidate) onValidate(e.target, setInputData)
      }}
      {...rest}
    />
  )
}

const InputField: React.FC<Omit<InputFieldProps, 'setIsValid'>> = (props) => {
  return <RootInputField {...props} />
}

function InputIcon({ icon: Icon, ...rest }: InputIconProps) {
  return <Icon {...rest} />
}

function InputFeedback({ children, ...rest }: InputFeedbackProps) {
  return <span {...rest}>{children}</span>
}

export { Input, InputContent, InputFeedback, InputField, InputIcon, InputLabel }
// eslint-disable-next-line prettier/prettier

