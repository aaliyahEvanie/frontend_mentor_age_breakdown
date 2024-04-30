import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const helper = createMultiStyleConfigHelpers(['loadingWrapper', 'innerWrapper'])

export const LoadingComponentTheme = helper.defineMultiStyleConfig({
    baseStyle: {
        loadingWrapper: {
            position: 'absolute',
            top: '0px',
            left: '0px',
            right: '0px',
            bottom: '0px',
            width: '100%',
            height: '100%',
            margin: 'auto',
            background: 'red'
        }, 
        innerWrapper: {
            position: 'fixed',
            top: '0px',
            left: '0px',
            right: '0px',
            bottom: '0px',
            height: '10%',
            width: '15%',
            margin: 'auto',
            '>h1': {
                fontSize: '1.5rem',
                fontWeight: '800'
            }
        },

    }
})