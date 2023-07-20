import { Inter } from "next/font/google";
import { useEffect } from "react";
import Head from "next/head";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Login from "./components/Login";
import { useAuth } from "../contexts/AuthContexts";
import Perfil from "./components/Perfil";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  

  const { currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/explorar");
    }
  });

  return (
    <>
      <Head>
        <title>FoodLink</title>
      </Head>
      <main className="bg-purple-300 flex justify-center">
        <div className="flex flex-row justify-center max-sm:[100%] w-[90%] h-max">
          <div className="w-[25%] h-screen max-md:w-[10%] sticky top-0">
          <Sidebar />
          </div>
          {currentUser &&
          <div className="mx-2 p-2 w-[50%] max-sm:w-[75%] border-2 border-purple-800 bg-purple-400">
          <Feed />
          </div>}
          {!currentUser &&
          <div className="mx-2 p-2 w-[50%] border-2 border-purple-800 bg-purple-400">
            <h1>Crie sua conta agora ou faça LogIn</h1>
          </div>}
          

          <div className="w-[25%] max-sm:hidden">
          {!currentUser && <Login />}
          {currentUser && <Perfil />}
          </div>

        </div>
      </main>
    </>
  )
}
