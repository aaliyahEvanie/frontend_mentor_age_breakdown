import { Box, chakra, useMultiStyleConfig } from "@chakra-ui/react"
import { TextPairComponentProps } from "../../api/types/componentProps"



export const TextPairComponent = ({label, answer, placeholder}: TextPairComponentProps) => {
    const styles = useMultiStyleConfig('TextPairComponentTheme')
    
    return (
    <Box __css={styles.wrapper}>
        <chakra.h1 __css={styles.answerValue}>{answer}</chakra.h1>
        <chakra.h1>{label}</chakra.h1>
     </Box>
    )
}