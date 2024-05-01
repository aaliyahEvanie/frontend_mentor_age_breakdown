import { ChakraTheme, extendTheme } from "@chakra-ui/react"
import { ModalContainerTheme } from "../components/ModalContainer/modalContainerTheme"
import { NumberInputTheme } from "../components/NumberInput/numberInputTheme"
import { FieldGroupTheme } from "../components/FieldGroup/fieldGroupTheme"
import { DateInputFieldGrouptheme } from "../components/DateInputFieldGroup/dateInputTheme"
import { TextPairComponentTheme } from "../components/TextPairComponent/textPairTheme"
import { DateCollectorFormTheme } from "../components/form/dateCollectorFormTheme"
import { ButtonTheme } from "./buttonTheme"
import { LoadingComponentTheme } from "../components/loadingComponent/loadingComponentTheme"
import { SpinnerTheme } from "./spinnerTheme"

const fonts = {    
    popExtraBold: `'Poppins-ExtraBold', sans-serif`,
    popBold: `'Poppins-Bold', sans-serif`,
    popRegular: `'Poppins-Regular', sans-serif`,
    popExtraBoldItalic: `'Poppins-ExtraBold-Italic', sans-serif`,
    popItalic: `'Poppins-Italic', sans-serif` 
}

export const mainTheme = extendTheme({
    styles:{
        global:{
            body:{
                background: 'brand.neutral.lightGrey',
                fontFamily: `'Poppins-Regular'`
            },
            h1: {
                fontFamily: `'Poppins-ExtraBold-Italic'`
            }
        }
    },
    fonts: {
        fonts
    },
    colors:{
        brand: {
            primary: {
                purple: 'hsl(259, 100%, 65%)',
                lightRed: 'hsl(0, 100%, 67%)',
            },
            neutral: {
                white: 'hsl(0, 0%, 100%)',
                offWhite: 'hsl(0, 0%, 94%)',
                lightGrey: 'hsl(0, 0%, 86%)',
                smokeyGrey: 'hsl(0, 1%, 44%)',
            }
        },
    },
    sizes: {
        small: '2rem'
    },
    textStyles: {
        weights: {
            normal: 400,
            medium: 500,
            semibold: 700,
            bold: 800,
          },
    },
    components: {
        ModalContainerTheme,
        Input: NumberInputTheme,
        DateInputFieldGrouptheme,
        FieldGroupTheme,
        TextPairComponentTheme,
        DateCollectorFormTheme,
        Button: ButtonTheme,
        LoadingComponentTheme,
        Spinner: SpinnerTheme
    }
}) as ChakraTheme