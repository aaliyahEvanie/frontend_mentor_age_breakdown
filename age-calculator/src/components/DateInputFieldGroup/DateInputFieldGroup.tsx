import React from 'react'
import {Box, Input, useMultiStyleConfig, chakra} from '@chakra-ui/react'
import { FieldGroup } from '../FieldGroup/FieldGroup'
import { useFormContext } from 'react-hook-form'
import { errorType } from '../../api/types/types'

type DateInputFieldGroupProps = {
  hasErrors : errorType[] 
}

export const DateInputFieldGroup = ({hasErrors}: DateInputFieldGroupProps ) => {

const style = useMultiStyleConfig('DateInputFieldGrouptheme', {})
const {register, formState: {errors, isDirty},reset} = useFormContext()

const updateForm = () => {
  reset({keepIsSubmitted: false})
}

  return (
    <>
      <FieldGroup legend=''>
        <Box __css={style.inputWrapper} >
          <chakra.span __css={style.labelStyle} className={errors && isDirty  ? 'hasErrors' : ''}>DAY</chakra.span>
          <Input type='number' maxLength={2} 
                {...register('day',{
                    required: true,
                    validate: {
                      positive: v => parseInt(v) > 0,
                      lessThanTen: v => parseInt(v) < 32,
                    },
                    valueAsNumber: true
                  },
                )}
                className={errors && isDirty ? 'hasErrors' : ''}
                onChange={updateForm}
                />
        </Box>
        <Box __css={style.inputWrapper} >
          <chakra.span __css={style.labelStyle} className={errors && isDirty ? 'hasErrors' : ''}>MONTH</chakra.span>
          <Input type='number' maxLength={2} 
                {...register('month',{
                    required: true,
                    validate: {
                      positive: v => parseInt(v) > 0,
                      lessThanTen: v => parseInt(v) < 13,
                    },
                    valueAsNumber: true
                  },
                )}
                onChange={updateForm}
                className={errors && isDirty ? 'hasErrors' : ''}
                />
        </Box>
        <Box __css={style.inputWrapper} >
          <chakra.span __css={style.labelStyle} className={errors && isDirty ? 'hasErrors' : ''}>YEAR</chakra.span>
          <Input type='number' maxLength={2} 
                {...register('year',{
                    required: true,
                    validate: {
                      positive: v => parseInt(v) > 0,
                    },
                    valueAsNumber: true
                  },
                )}
                onChange={updateForm}
                className={errors && isDirty ? 'hasErrors' : ''}
                />
        </Box>
      </FieldGroup>
      <FieldGroup legend=''>
        <Box __css={style.errorMessage}>
        {errors.day && 
              <chakra.span>Please provide a valid day</chakra.span>
            }
        </Box>
        <Box __css={style.errorMessage}>
        {errors.month && 
              <chakra.span>Please provide a valid month</chakra.span>
            }
        </Box>
        <Box __css={style.errorMessage}>
        {errors.year && 
              <chakra.span>Please provide a valid year</chakra.span>
            }
        </Box>
      </FieldGroup>
      <Box __css={style.errorMessage}>
        { hasErrors && 
            <Box>
              {hasErrors.map(error =>
                 <chakra.span className={hasErrors ? 'hasErrors' : ''}>{error.message}</chakra.span>
              )}
            </Box>
          }
      </Box>
  </>
  )  
}