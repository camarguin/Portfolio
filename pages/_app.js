import Head from 'next/head'
import { ChakraProvider } from "@chakra-ui/react"
import { GlobalStyle } from "../styles/global"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <title>Lucasgc - Portfolio</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </ChakraProvider>
  )
}

export default MyApp
