import React, { useMemo, useState } from 'react'

type CalculationFormState = {
  isDirty: boolean
  isSubmitting: boolean
  isSubmitSuccessful: boolean
}

type CalculationFormStateContextType = {
  formState: CalculationFormState
  setFormState: (state: CalculationFormState) => void
}

export const CalculationFormStateContext = React.createContext<
  CalculationFormStateContextType | undefined
>(undefined)

type CalculationFormStateProviderProps = {
  children?: React.ReactNode
}

export const CalculationFormStateProvider = ({ children }: CalculationFormStateProviderProps) => {
  const [formState, setFormState] = useState<CalculationFormState>({
    isDirty: false,
    isSubmitting: false,
    isSubmitSuccessful: false,
  })

  const contextValue = useMemo<CalculationFormStateContextType>(
    () => ({
      formState,
      setFormState,
    }),
    [formState]
  )

  return (
    <CalculationFormStateContext.Provider value={contextValue}>
      {children}
    </CalculationFormStateContext.Provider>
  )
}
