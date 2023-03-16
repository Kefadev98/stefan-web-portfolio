import "../styles/globals.css";
import "typeface-poppins";
import type { AppProps } from "next/app";
import { ThemeContextProvider } from "../context/ThemeContext";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={client}>
        <ThemeContextProvider>
          <Component {...pageProps} />
        </ThemeContextProvider>
      </QueryClientProvider>
    </>
  );
}
