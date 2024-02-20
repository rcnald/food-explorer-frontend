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
