import React from 'react'
import Signup from './components/Signup'
import Head from 'next/head'
import { useAuth} from '../contexts/AuthContexts'

export default function signupPage() {
  const { currentUser } = useAuth();
  return (
    <>
    <Head>
      <title>Crie sua conta - Foodlink</title>
    </Head>
    <main className=''>
    <div className='w-full h-screen flex text-center items-center justify-center bg-purple-300'>
      <div className="w-[50vw] max-md:w-[85%] inline " >{!currentUser && <Signup className="h-full w-full"/>}
      {currentUser && <a href="/" ><button className='btn-pequeno'>Voltar para a home</button></a>}</div>
      <div className="w-[50vw] max-sm:hidden" ><img src='https://firebasestorage.googleapis.com/v0/b/foodlink-dev.appspot.com/o/assets%2Fsanduicheroxo.jpg?alt=media&token=23e854d5-fdd0-4aab-b240-904e4bbba2db' className='h-screen'></img></div>
    </div>
    </main>
    </>
  )
}
