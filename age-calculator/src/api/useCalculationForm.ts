import { useEffect } from 'react'
import { FieldValues, useForm as useReactHookForm, UseFormProps, UseFormReturn } from 'react-hook-form'
import { useCalculationFormState } from './useCalculationFormState'

export const useCalculationForm = <TFieldValues extends FieldValues = FieldValues, TContext = any>(
    props?: UseFormProps<TFieldValues, TContext>
  ): UseFormReturn<TFieldValues, TContext> => {
    const formReturn = useReactHookForm<TFieldValues>(props)
  
    const {
      formState: { isDirty, isSubmitting, isSubmitSuccessful },
    } = formReturn
  
    const { setFormState } = useCalculationFormState()
  
    useEffect(() => {
      setFormState({ isDirty, isSubmitting, isSubmitSuccessful })
    }, [isDirty, isSubmitting, isSubmitSuccessful, setFormState])
  
    return formReturn
  }