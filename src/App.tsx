import { Container, MantineProvider, Text } from '@mantine/core';
import Home from "@/pages/Home";

const App = () => {

  return (
    <MantineProvider 
      theme={{
        colors: {
          primary: ['#101113']
        }
      }} 
      withGlobalStyles withNormalizeCSS
    >
        <Home />
    </MantineProvider>
  )
}

export default App
