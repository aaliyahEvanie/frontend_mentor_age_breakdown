import { createMultiStyleConfigHelpers } from "@chakra-ui/react"

export const helpers = createMultiStyleConfigHelpers([
    'container', 'inputWrapper', 'dividerWrapper', 'answerWrapper', 'answerValue'
])


/*
const breakpoints = {
  base: '0em', // 0px
  sm: '30em', // ~480px. em is a relative unit and is dependant on the font size.
  md: '48em', // ~768px
  lg: '62em', // ~992px
  xl: '80em', // ~1280px
  '2xl': '96em', // ~1536px
  360×800,
1440×900      (6.41%)
1280×720       (5.45%)
1280×1024    (4.52%)
} */
export const ModalContainerTheme = helpers.defineMultiStyleConfig({
    baseStyle:{
        container: {
            backgroundColor: 'brand.neutral.white',
            position: 'fixed',
            top: '0px',
            left: '0px',
            right: '0px',
            bottom: '0px',
            height: {base: '40%',sm: '45%', md:'45%', lg:'50%'},
            minHeight:{base: '60%',sm: '45%', md:'45%', lg:'50%'},
            width: {base: '80%',md: '65%', lg:'45%', xl:'40%'},
            margin: 'auto',
            borderRadius: {base: '6% 6% 22% 6%', md: '5% 5% 25% 5%'},   
            '> div': {
                mx: {sm: 'auto ', md:'1.5rem'},
            }         
        },

      
    }
})
