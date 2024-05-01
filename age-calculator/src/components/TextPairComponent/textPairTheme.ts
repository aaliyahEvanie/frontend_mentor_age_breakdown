import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const helper = createMultiStyleConfigHelpers(['wrapper', 'answerValue', 'label'])

export const TextPairComponentTheme = helper.defineMultiStyleConfig({
    baseStyle: {
        wrapper: {
            fontSize: {base:'3rem', sm:'4rem'}
        },
        answerValue: {
            color: 'brand.primary.purple',
            mx: '1rem',
            fontFamily: `'Poppins-ExtraBold-Italic'`,
            fontSize: {base:'3rem', sm:'4rem'}
        },
        
    }
})