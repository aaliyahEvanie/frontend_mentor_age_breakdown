import { createMultiStyleConfigHelpers } from "@chakra-ui/react"

const helper = createMultiStyleConfigHelpers(['inputWrapper', 'labelStyle','errorMessage', 'grid'])

export const DateInputFieldGrouptheme = helper.defineMultiStyleConfig({
    baseStyle: {
        inputWrapper: {
            display: 'grid',
            Input: {
                p: {base: '2px' ,sm:'25px 15px'},
                _hover: {
                    borderColor: 'brand.primary.purple'
                },
                _active: {
                    borderColor: 'brand.primary.purple',
                    outline: 'none'
                },
                _focus: {
                    borderColor: 'brand.primary.purple',
                    outline: 'none'
                },
                '&.hasErrors':{
                    borderColor: 'brand.primary.lightRed'
                }, 
                fontSize: {base: '1rem', sm: '1.5rem', xl:'2rem'}
            },
        },
        labelStyle: {
            color: 'brand.neutral.smokeyGrey',
            fontSize:  '0.625rem',
            '&.hasErrors':{
                color: 'brand.primary.lightRed'
            }
        },
        errorMessage: {
            color: 'brand.primary.lightRed',
            fontSize: '0.5rem'
        },
    }
})