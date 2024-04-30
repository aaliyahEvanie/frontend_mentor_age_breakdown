import { defineStyle, defineStyleConfig } from "@chakra-ui/react"

const mainTheme = defineStyle({
    bg: 'transparent',
    _hover: {
        bg: 'transparent'
    }
})

export const ButtonTheme = defineStyleConfig({
  variants: {mainTheme}
})
