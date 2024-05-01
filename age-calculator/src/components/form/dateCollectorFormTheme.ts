 import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const helper= createMultiStyleConfigHelpers(['dividerWrapper', 'answerWrapper'])

export const DateCollectorFormTheme = helper.defineMultiStyleConfig({
    baseStyle: {
        dividerWrapper: {
            '&.mobile': {
              position: 'relative',
              padding: '10px'
            },
            pb: '10px',
            display: 'flex', 
            mb: 0,
            button:{
                '&.mobile': {
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    right:'0px',
                    bottom: '0px',
                    margin: 'auto'
                  },
                  _disabled: {
                    '>img': {
                        bg: 'brand.neutral.smokeyGrey'
                    }
                  }
            },
            img: {
                backgroundColor: 'brand.primary.purple',
                borderRadius: '50%',
                padding: '12px',
                m: '12px',
                _disabled: {
                    backgroundColor: 'black'    
                },     
                h: {base: '50px'},
                '&.mobile': {
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    right:'0px',
                    bottom: '0px',
                    margin: 'auto'
                  },

            },
            hr: {
                mt: '32px',
                '&.mobile': {
                    mt: 'auto',
                    mb: '1rem'
                }
            }
        },
        answerWrapper: {
            '> div': {
                display: 'flex',
                fontFamily: `'Poppins-ExtraBold-Italic'`
            }
        },
    }
})