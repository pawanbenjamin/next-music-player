import "../styles/globals.css";
import type { AppProps } from "next/app";
import "reset-css";
import { ChakraProvider } from "@chakra-ui/react";
import PlayerLayout from "../components/PlayerLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <PlayerLayout>
        <Component {...pageProps} />
      </PlayerLayout>
    </ChakraProvider>
  );
}
