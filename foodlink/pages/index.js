import { Inter } from 'next/font/google'
import Head from 'next/head'
import Sidebar from './components/Sidebar'
import Signup from './components/Signup'
import { AuthProvider } from '@component/contexts/AuthContexts'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <AuthProvider>
    <div><Head>
      <title>FoodLink</title>
    </Head>
    <Sidebar/>
    <Signup />
    </div>
    </AuthProvider>
  )
}
