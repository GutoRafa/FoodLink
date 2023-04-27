import '@component/styles/globals.css'
import { AuthProvider } from '@component/contexts/AuthContexts'

export default function App({ Component, pageProps }) {
  return <AuthProvider>
    <Component {...pageProps} />
    </AuthProvider>
}
