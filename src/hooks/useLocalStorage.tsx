import { useState } from 'react'

export function useLocalStorage<T>(
  key: string,
  defaultValue: T,
): [T, (value: T) => void, () => void] {
  const [storedValue, setStoredValue] = useState<T>(
    JSON.parse(localStorage.getItem(key) ?? JSON.stringify(defaultValue)),
  )

  const removeValue = () => {
    localStorage.removeItem(key)
    setStoredValue(defaultValue)
  }

  const setValue = (value: T) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value

    setStoredValue(valueToStore)
    localStorage.setItem(key, JSON.stringify(valueToStore))
  }

  return [storedValue, setValue, removeValue]
}
