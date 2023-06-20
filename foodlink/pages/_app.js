import '@component/styles/globals.css'
import { AuthProvider } from '@component/contexts/AuthContexts'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
  <AuthProvider>
    <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
    <Component {...pageProps} />
    </AuthProvider>)
}
