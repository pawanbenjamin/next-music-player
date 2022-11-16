import "../styles/globals.css";
import type { AppProps } from "next/app";
import "reset-css";
import { ChakraProvider } from "@chakra-ui/react";
import PlayerLayout from "../components/PlayerLayout";
import { StoreProvider } from "easy-peasy";
import { store } from "../lib/store";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ChakraProvider>
      <StoreProvider store={store}>
        {router.pathname === "/signin" || router.pathname === "/signup" ? (
          <Component {...pageProps} />
        ) : (
          <PlayerLayout>
            <Component {...pageProps} />
          </PlayerLayout>
        )}
      </StoreProvider>
    </ChakraProvider>
  );
}
