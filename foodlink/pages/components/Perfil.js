import React from "react";
import { useAuth } from "../../contexts/AuthContexts";

export default function Perfil() {
  const { currentUser, logout } = useAuth();

  return (
    <div className="w-[300px] my-2 rounded-xl bg-orange-400 p-2 flex flex-col">
      <div>
      <img className="rounded-full w-10 inline" alt="foto de perfil" src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg" />
      <h1 className="inline text-white font-bold px-2">{currentUser?.displayName}</h1>
      </div>
      <button className="btn-pequeno" onClick={logout}>
        logout
      </button>
    </div>
  );
}
