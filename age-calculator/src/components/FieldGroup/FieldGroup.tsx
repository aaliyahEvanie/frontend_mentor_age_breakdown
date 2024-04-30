import { Box, chakra, useMultiStyleConfig } from "@chakra-ui/react"
import { FieldGroupProps } from "../../api/types/componentProps"

export const FieldGroup = ({legend, children}: FieldGroupProps) => {
    const styles = useMultiStyleConfig('FieldGroupTheme', {})

    return (
      <Box role="group" __css={styles.wrapper}>
        <chakra.p >
          {legend}
        </chakra.p>
        <Box __css={styles.fields}>{children}</Box>
      </Box>
    )

}