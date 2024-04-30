import { isFuture, isLeapYear, isValid } from 'date-fns'
import {z} from 'zod'


 export const dateSchema = z.object({
    day: z.number({
        required_error: 'Day is required'
    }).refine(value => {
        return 'Must be a valid day'
    }),
    month: z.number(
        {
         required_error: 'Month is required'
        }).refine(value => {
        return 'Must be a valid month'
    }),
    year: z.number({
        required_error: 'Year is required'
    }).refine(value => {
        return 'Must be a valid year'
    })
  }).superRefine((data, cxz)=> {
        const {day, month, year} = data
        const date = new Date(year, month - 1, day)
        if(!isValid(date)){
            cxz.addIssue({
                code: z.ZodIssueCode.custom, 
                message:  `Please add a valid date`
            })
        }
        if(isFuture(date)){
            cxz.addIssue({
                code: z.ZodIssueCode.invalid_date,
                message: `Please add a date before today.`,
            });
        }
        if(isLeapYear(date) && (month === 2 && day > 29) ){
            cxz.addIssue({
                code: z.ZodIssueCode.invalid_date,
                message: `Please add a valid date`
            })
        }
        if(!isLeapYear(date) && (month === 2 && day > 28)){
            cxz.addIssue({
                code: z.ZodIssueCode.invalid_date, 
                message: `Please add a valid date`
            })
        }
  })

export type dateBreakdownType = z.infer<typeof dateSchema>
  
const ageSchema = z.object({
    day: z.string().default('--'),
    months: z.string().default('--'), 
    years: z.string().default('--')
})

export type ageBreakdownType = z.infer<typeof ageSchema>

const errorSchema = z.object({
    message: z.string(),
    code: z.string(),
    type: z.string().optional()
})

export type errorType = z.infer<typeof errorSchema>

const formResponseSchema = z.object({
    errors: z.array(errorSchema).optional(),
    answer: ageSchema
})

export type formResponseType = z.infer<typeof formResponseSchema>