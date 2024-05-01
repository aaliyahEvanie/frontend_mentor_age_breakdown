import { createMultiStyleConfigHelpers } from "@chakra-ui/react"

const helpers = createMultiStyleConfigHelpers([
    'appBody'
])
export const AppTheme = helpers.defineMultiStyleConfig({
    baseStyle: {
        appBody: {
            '> div':{font: 'popRegular'}
        }

    }
})