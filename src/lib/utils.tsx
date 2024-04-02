type ProvidersType = [React.ElementType, Record<string, unknown>]

type ComponentProps = {
  children: Array<React.ElementType>
}

export const composeProviders = (providers: Array<ProvidersType>) => {
  const InitialComponent = ({ children }: ComponentProps) => <>{children}</>

  return providers.reduce(
    (
      AccumulatedProviders: React.ElementType,
      currentProvider: ProvidersType,
    ) => {
      const [Provider, props = {}] = currentProvider
      return function ProviderComponent({ children }: ComponentProps) {
        return (
          <AccumulatedProviders>
            <Provider {...props}>{children}</Provider>
          </AccumulatedProviders>
        )
      }
    },
    InitialComponent,
  )
}

export const isEmailValid = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  return emailRegex.test(email)
}

export const formatCentsToCurrency = (value: number) => {
  value /= 100

  const currency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return currency.format(value)
}

export const formatCurrencyToCents = (value: string) => {
  value = value.replace(/R\$./g, '')
  value = value.replace(',', '.')

  return Number(value) * 100
}

export const formatToCurrency = (value: string) => {
  const digits = value.replace(/\D/g, '')

  const currency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return currency.format(Number(digits) / 100)
}
