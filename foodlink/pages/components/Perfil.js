import React from "react";
import { useAuth } from "../../contexts/AuthContexts";

export default function Perfil() {
  const { currentUser, logout } = useAuth();
  return (
    <div>
      <img alt="foto de perfil" src={currentUser?.photoURL}/>
      <h1>{currentUser?.displayName}</h1>
      <button className="btn-pequeno" onClick={logout}>
        logout
      </button>
    </div>
  );
}
