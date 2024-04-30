import moment from 'moment'
import { dateBreakdownType, dateSchema, formResponseType } from './types/types'


export const ageCalculator  = ({day, month, year}: dateBreakdownType) : formResponseType => {
    const inputDate = new Date(year, month - 1 , day)
    
       const validSchema = dateSchema.safeParse({day , month, year})
        if (!validSchema.success){
            
            const errorsArray = Object.entries(validSchema.error)[0][1]
    
            return {answer: {day: '-', months: '-', years: '-'}, errors: errorsArray}
        }
    

    const today =  moment()
    const duration = moment.duration(today.diff(inputDate))
    const answer = {
        day: duration.days().toString(),
        months: duration.months().toString(), 
        years: duration.years().toString()
    }
    
    return {answer}
}