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
    <main>
    <div className='w-full h-full flex text-center items-center justify-center bg-purple-300'>
      <div className="w-[50vw] inline" >{!currentUser && <Signup className="h-full w-full"/>}
      {currentUser && <a href="/" ><button className='btn-pequeno'>Voltar para a home</button></a>}</div>
      <div className="w-[50vw]" ><img src='https://assets.unileversolutions.com/recipes-v2/99460.jpg' className='h-screen'></img></div>
    </div>
    </main>
    </>
  )
}
