import {inputAnatomy} from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const {defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(inputAnatomy.keys)

const baseStyle = definePartsStyle({
    field: {
        fontSize: '2rem', 
        fontWeight: 'semibold',
        size: {base: 'md', md: 'xl'},
    },
    
})

export const NumberInputTheme = defineMultiStyleConfig({baseStyle})