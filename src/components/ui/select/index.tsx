import {
  ComponentProps,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import { LuChevronDown } from 'react-icons/lu'
import * as Styled from './styles'

interface SelectProps extends ComponentProps<'button'> {
  label: string
  // value: string
  setSelect: Dispatch<SetStateAction<string>>
  options: Array<string>
}

interface SelectOptionProps extends ComponentProps<'li'> {
  children: React.ReactNode
}

export function Select({ setSelect, label, options, ...rest }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  useEffect(() => {
    setSelect(options[currentIndex])
  }, [currentIndex, options, setSelect])

  return (
    <Styled.Div>
      <span>{label}</span>
      <button
        {...rest}
        aria-expanded={isOpen}
        onClick={(e) => {
          setIsOpen((prev) => !prev)
          e.preventDefault()
        }}
      >
        {options[currentIndex]}
        <LuChevronDown />
      </button>
      {isOpen ? (
        <ul>
          {options.map((option, i) => {
            return (
              <SelectOption
                onClick={() => {
                  setCurrentIndex(i)
                  setIsOpen((prev) => !prev)
                }}
                key={i}
              >
                {option}
              </SelectOption>
            )
          })}
        </ul>
      ) : null}
    </Styled.Div>
  )
}

function SelectOption({ children, ...props }: SelectOptionProps) {
  return (
    <li {...props}>
      <button onClick={(e) => e.preventDefault()}> {children}</button>
    </li>
  )
}
