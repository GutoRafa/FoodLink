import { Inter } from "next/font/google";
import Head from "next/head";
import Sidebar from "./components/Sidebar";
import Signup from "./components/Signup";
import Feed from "./components/Feed";
import Login from "./components/Login";
import { useAuth } from "../contexts/AuthContexts";
import Perfil from "./components/Perfil";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const { currentUser } = useAuth();

  return (
    <>
      <Head>
        <title>FoodLink</title>
      </Head>
      <main className="bg-orange-700">
        <div className="flex justify-center">
          <Sidebar />
          <Feed />
          {!currentUser && <Login />}
          {!currentUser && <Signup />}
          {currentUser && <Perfil />}
        </div>
      </main>
    </>
  );
}
