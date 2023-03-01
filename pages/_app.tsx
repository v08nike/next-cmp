import "@/styles/globals.css";
import type { AppProps } from "next/app";
import CookieBot from './CookieBot';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <CookieBot /> */}
      <Component {...pageProps} />
    </>
  );
}
