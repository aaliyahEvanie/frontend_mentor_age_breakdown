import { Box, useMultiStyleConfig } from "@chakra-ui/react"
import { ComponentsChildProp } from "../../api/types/componentProps"

export const Modal = ({children} : ComponentsChildProp)=> {

    const styles = useMultiStyleConfig('ModalContainerTheme', {})

    return (
        <Box __css={styles.container}>
            {children}  
        </Box>
    )
}