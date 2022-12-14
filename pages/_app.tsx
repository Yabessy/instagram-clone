import "../styles/globals.css"
import type { AppProps } from "next/app"
import { SessionProvider } from "next-auth/react"
import { RecoilRoot } from "recoil"

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  return (
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
  )
}

export default MyApp
