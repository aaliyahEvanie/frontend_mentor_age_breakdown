import { defineStyle, defineStyleConfig } from '@chakra-ui/react'
const bold = defineStyle({
  borderWidth: 4, // change the thickness of the spinner
})
export const SpinnerTheme = defineStyleConfig({
  baseStyle: {
    ml: '1.5rem',
    color: 'brand.primary.purple'
  },
  variants: { bold },
})