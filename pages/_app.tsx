import "../styles/globals.css";
import type { AppProps } from "next/app";
import "reset-css";
import { ChakraProvider } from "@chakra-ui/react";
import PlayerLayout from "../components/PlayerLayout";
import { useMe } from "../lib/hooks";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const { user } = useMe();
  console.log({ user });
  const router = useRouter();
  console.log(router);
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
  );
}
