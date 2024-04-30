import { Box, chakra, Spinner, useMultiStyleConfig } from "@chakra-ui/react"

export const LoadingComponent = () => {

    const styles = useMultiStyleConfig('LoadingComponentTheme', {})
    return (
        <Box __css={styles.loadingWrapper}>
            <Box __css={styles.innerWrapper}>
                <Spinner/>
                <chakra.h1>Loading...</chakra.h1>
            </Box>
        </Box>
    )
}