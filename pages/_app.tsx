import "../styles/globals.css"
import type { AppProps } from "next/app"
import "reset-css"
import { ChakraProvider } from "@chakra-ui/react"
import PlayerLayout from "../components/PlayerLayout"
import { useRouter } from "next/router"

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <ChakraProvider>
      {router.pathname === "/signin" || router.pathname === "/signup" ? (
        <Component {...pageProps} />
      ) : (
        <PlayerLayout>
          <Component {...pageProps} />
        </PlayerLayout>
      )}
    </ChakraProvider>
  )
}
