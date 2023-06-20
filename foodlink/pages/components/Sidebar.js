import React from "react";
import { useAuth } from "../../contexts/AuthContexts";

function Sidebar() {
  const { currentUser } = useAuth();
  return (
    <div className="h-full left-0 m-0 flex flex-col bg-purple-400 border-2 border-purple-800">
      <a href="/"><img className="h-20 w-20 my-2 mx-auto rounded-full" src="https://firebasestorage.googleapis.com/v0/b/foodlink-dev.appspot.com/o/assets%2Flogobranco.png?alt=media&token=37cdd207-e2bf-46a7-a7ac-7189c485cb01"></img></a>
      <a href="/">
        <p className="font-bold text-black ml-4 mt-2 text-xl">Home</p>
      </a>
      <a href="/">
        <p className="font-bold text-black ml-4 mt-2 text-xl">Explorar</p>
      </a>
      {currentUser &&
      <a href="/config">
        <p className="font-bold text-black ml-4 mt-2 text-xl">Configurações</p>
      </a>}
    </div>
  );
}

export default Sidebar;
