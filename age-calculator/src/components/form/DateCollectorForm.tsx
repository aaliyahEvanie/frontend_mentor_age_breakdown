import { Box, Button, chakra, Divider, useMediaQuery, Image, useMultiStyleConfig } from "@chakra-ui/react"
import { useCalculationForm } from "../../api/useCalculationForm"
import { ageBreakdownType, dateBreakdownType, errorType } from "../../api/types/types"
import { FormProvider } from "react-hook-form"
import { Modal } from "../ModalContainer/Modal"
import { DateInputFieldGroup } from "../DateInputFieldGroup/DateInputFieldGroup"
import { TextPairComponent } from "../TextPairComponent/TextPairComponent"
import arrow from '../../assets/icon-arrow.svg'
import { useState } from "react"
import { ageCalculator } from "../../api/ageCalculator"


export const DateCollectorForm = () => {

    const formMethods = useCalculationForm<dateBreakdownType>({})
    const { formState  } = formMethods
    const { errors, isSubmitSuccessful } = formState
    const [differenceDate, setDifferenceDate] = useState<ageBreakdownType>({day: '--', months: '--', years: '--'})
    const [hasErrors, setErrors] = useState<errorType[]>([])

    if(errors && Object.keys(errors).length > 0){
        console.error('Errors when submitting the form', errors)
        
    }
    const styles = useMultiStyleConfig('DateCollectorFormTheme', {})

    const [isDesktop] = useMediaQuery('(min-width: 800px)')
    const screenSize = isDesktop ? 'desktop': 'mobile'

    const onSubmitCalculate = (data: any) => {
        const {answer, errors} = ageCalculator({day: Number(data.day), month: Number(data.month), year: Number(data.year)})
        setDifferenceDate({day: answer.day, months: answer.months, years: answer.years})
        errors !== undefined ? setErrors(errors) : setErrors([])
    }

    return (
        <FormProvider {...formMethods}>
            <chakra.form onSubmit={formMethods.handleSubmit(onSubmitCalculate)}>
                <Modal>
                <DateInputFieldGroup hasErrors={hasErrors} />
                <Box __css={styles.dividerWrapper} className={screenSize}>
                    <Divider className={screenSize} />            
                    <Button type="submit" 
                            variant='mainTheme' 
                            className={screenSize} 
                            onSubmit={formMethods.handleSubmit(onSubmitCalculate)}
                            isDisabled={isSubmitSuccessful}>
                        <Image src={arrow} className={screenSize}/>
                    </Button>
                </Box>  
                <Box __css={styles.answerWrapper}>
                    <TextPairComponent label="years" answer={differenceDate.years} placeholder="--"/>
                    <TextPairComponent label="months" answer={differenceDate.months} placeholder="--"/>
                    <TextPairComponent label="days" answer={differenceDate.day} placeholder="--"/>
                </Box>   
                </Modal>
            </chakra.form>
        </FormProvider>
    )
}