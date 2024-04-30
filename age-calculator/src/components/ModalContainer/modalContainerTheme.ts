import { createMultiStyleConfigHelpers } from "@chakra-ui/react"

export const helpers = createMultiStyleConfigHelpers([
    'container', 'inputWrapper', 'dividerWrapper', 'answerWrapper', 'answerValue'
])

export const ModalContainerTheme = helpers.defineMultiStyleConfig({
    baseStyle:{
        container: {
            backgroundColor: 'brand.neutral.white',
            position: 'fixed',
            top: '0px',
            left: '0px',
            right: '0px',
            bottom: '0px',
            height: {base: '60%', lg:'50%'},
            minHeight:{base: '60%', sm:'70%'},
            width: {base: '80%',md: '65%', lg:'45%', xl:'40%'},
            margin: 'auto',
            borderRadius: {base: '6% 6% 22% 6%', md: '5% 5% 25% 5%'},   
            '> div': {
                mx: {sm: 'auto ', md:'1.5rem'},
            }         
        },

      
    }
})
