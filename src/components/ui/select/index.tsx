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
  value?: string
  setSelect: Dispatch<SetStateAction<string>>
  options: Array<{ name: string; value: string }>
}

interface SelectOptionProps extends ComponentProps<'li'> {
  children: React.ReactNode
}

export function Select({
  setSelect,
  label,
  options,
  value,
  ...rest
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState<number>(
    options.findIndex((option) => option.value === value) === -1
      ? 0
      : options.findIndex((option) => option.value === value),
  )

  console.log()

  // useEffect(() => {
  //   const index = options.findIndex((option) => option.value === value)
  //   setCurrentIndex(index === -1 ? 0 : index)
  // }, [value, options])

  useEffect(() => {
    setSelect(options[currentIndex].value)
  }, [currentIndex, options, setSelect])

  // useEffect(() => {
  //   const index = options.findIndex((option) => option.value === value)
  //   setSelect(options[index === -1 ? 0 : index].name)
  // }, [setSelect, value, options])

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
        {options[currentIndex].name}
        <LuChevronDown />
      </button>
      {isOpen && (
        <ul>
          {options.map((option, i) => (
            <SelectOption
              onClick={() => {
                setCurrentIndex(i)
                setIsOpen((prev) => !prev)
              }}
              key={i}
            >
              {option.name}
            </SelectOption>
          ))}
        </ul>
      )}
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
