import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const helpers = createMultiStyleConfigHelpers(['wrapper', 'fields'])

export const FieldGroupTheme = helpers.defineMultiStyleConfig({
    baseStyle: {
        wrapper: {
            my: '1rem',
            display: 'grid',
            maxWidth: {sm: 'auto', lg:'80%'}
        },
        fields: {
         display: 'flex',
         mx: '1rem',
         '>div': {
            mr: '1rem',
            w: '30%'
         }
        }
    }
})