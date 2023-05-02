import { Inter } from 'next/font/google'
import Head from 'next/head'
import Sidebar from './components/Sidebar'
import Signup from './components/Signup'
import Feed from './components/Feed'
import Login from './components/Login'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <><Head>
      <title>FoodLink</title>
    </Head>
    <main className='bg-orange-700'>
    <div className='flex justify-center'>
    <Sidebar/>
    <Feed/>
    <Login/>
    <Signup/>
    </div>
    </main>
    </>
  )
}
