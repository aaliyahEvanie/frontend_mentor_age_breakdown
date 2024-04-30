import React, { useEffect, useState } from 'react';
import { DateCollectorForm } from './components/form/DateCollectorForm';
import { CalculationFormStateProvider } from './api/CalculationFormStateProvider';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { mainTheme } from './themes/mainTheme';
import { Fonts } from './fonts/fonts';
import { LoadingComponent } from './components/loadingComponent/LoadingComponet';

function App() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
      const timeoutId = setTimeout(()=> {
        setIsLoading(false)
      }, 5000  )

      return () => clearTimeout(timeoutId)
  }, [])
    return (
      <ChakraProvider theme={mainTheme}>
        {
          isLoading ? <LoadingComponent/> : 
          <Box className="App">
            <Fonts/>
              <header className="App-header">
                <CalculationFormStateProvider>
                  <DateCollectorForm/>
                </CalculationFormStateProvider>
              </header>
            </Box> 
        }
      </ChakraProvider>
    );
}

export default App;
