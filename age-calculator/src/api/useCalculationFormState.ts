import { useContext } from "react"
import { CalculationFormStateContext } from "./CalculationFormStateProvider"

export const useCalculationFormState = () => {
    const formState = useContext(CalculationFormStateContext)

    if(!formState){
        throw new Error('useCalculationFormState must be used within CalculationFormStateProvider')
    }

    return formState
}