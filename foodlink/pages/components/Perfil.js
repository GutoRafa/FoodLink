import React from "react";
import { useAuth } from "../../contexts/AuthContexts";
import { useRouter } from "next/router";

export default function Perfil() {
  const { currentUser, logout } = useAuth();
  const router = useRouter();
  var foto;


  if (!currentUser.photoURL) {
    foto = "https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg";
  } else {
    foto = currentUser.photoURL;
  }

  return (
    <div className="sticky top-2">
    <div className="w-[100%] my-2 rounded-xl bg-purple-400 border-2 border-purple-800 p-2 flex flex-col">
      <div>
      <img className="rounded-full w-10 h-10 inline" alt="foto de perfil" src={foto} />
      <h1 className="inline text-black font-bold px-2">{currentUser?.displayName}</h1>
      </div>
      <button className="btn-pequeno mt-2" onClick={logout}>
        logout
      </button>
    </div>
    </div>
  );
}
