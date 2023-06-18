import React, { useRef,useState } from "react";
import { useAuth } from "../../contexts/AuthContexts";
import { updateProfile } from "firebase/auth";
import { uploadStorage } from "@component/firebase";

export default function Configuracoes() {
  const [imagem, setImagem] = useState(null);
  const { currentUser } = useAuth();
  const nome = useRef();
  const arquivoRef = useRef();

  function alterarNome() {
    updateProfile(currentUser, {
      displayName: nome,
    });
  }

  const alterarFoto = () => {
    const local = "fotos-perfil/";
    uploadStorage(imagem, local).then((url) => {
        updateProfile(currentUser, {
            photoURL: url,
        });
    });
  }

  const addImagem = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImagem(readerEvent.target.result);
    };
  };

  return (
    <div className="flex flex-col">
      <div className="font-bold text-black text-lg">Configurações</div>
      <h1 className="font-semibold inline">Alterar nome</h1>
      <div className="flex">
        <input
          className="input-padrao mr-2 placeholder:text-gray-400"
          type="text"
          ref={nome}
          placeholder={currentUser.displayName}
        />
        <button onClick={alterarNome} className="btn-pequeno">
          Enviar
        </button>
      </div>

      <h1 className="font-semibold inline">Alterar foto</h1>
      <div
        className="rounded bg-purple-500 hover:bg-purple-600 cursor-pointer w-12 h-12  flex justify-center"
        onClick={() => arquivoRef.current.click()}
      >
        <input type="file" onChange={addImagem} ref={arquivoRef} hidden />
        <img
          className="w-10 h-10 p-1"
          src="https://svgsilh.com/svg_v2/1710849.svg"
        />
      </div>
      <button className="btn-pequeno" onClick={alterarFoto}>Alterar Foto</button>
    </div>
  );
}
