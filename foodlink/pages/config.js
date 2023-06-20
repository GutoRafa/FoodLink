import React from 'react'
import { useAuth } from "../contexts/AuthContexts";
import Head from 'next/head'
import Sidebar from './components/Sidebar'
import Login from './components/Login'
import Perfil from './components/Perfil'
import Configuracoes from './components/Configuracoes'

export default function config() {
    const { currentUser } = useAuth();
  return (
    <>
      <Head>
        <title>Configurações - FoodLink</title>
      </Head>
      <main className="bg-purple-300 flex justify-center">
        <div className="flex flex-row justify-center w-[90%] h-max">
          <div className="w-[25%] h-screen sticky top-0 max-md:w-[10%]">
          <Sidebar />
          </div>

          <div className="mx-2 p-2 w-[50%] border-2 border-purple-800 bg-purple-400">
            <Configuracoes />
          </div>
          

          <div className="w-[25%]">
          {!currentUser && <Login />}
          {currentUser && <Perfil />}
          </div>

        </div>
      </main>
    </>
  )
}
