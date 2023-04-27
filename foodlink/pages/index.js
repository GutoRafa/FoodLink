import { Inter } from 'next/font/google'
import Head from 'next/head'
import Sidebar from './components/Sidebar'
import Signup from './components/Signup'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <><Head>
      <title>FoodLink</title>
    </Head>
    <main className='bg-orange-700'>
    <div className='flex justify-center'>
    <Sidebar/>
    <Signup/>
    </div>
    </main>
    </>
  )
}
