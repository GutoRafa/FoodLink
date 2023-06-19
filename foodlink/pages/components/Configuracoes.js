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

  const handleSubmit = () => {
    alterarFoto();
    alterarNome();
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
      <div className="font-bold text-black text-lg mb-4">Configurações</div>
      <div className="" onClick={() => arquivoRef.current.click()}>
        <img className="rounded-full h-40 w-40 object-cover" src={currentUser.photoURL}></img>
      </div>
      <div>
      <h1 className="font-semibold inline">Alterar nome</h1>
      <div className="flex">
        <input
          className="input-padrao mr-2 placeholder:text-gray-400"
          type="text"
          ref={nome}
          placeholder={currentUser.displayName}
          value={currentUser.displayName}
        />
      
        
        </div>
      </div>

      
        <input type="file" onChange={addImagem} ref={arquivoRef} hidden />
        <img
          className="w-10 h-10 p-1"
          src="https://svgsilh.com/svg_v2/1710849.svg"
        />
      
      <button className="btn-pequeno" onClick={handleSubmit}>Alterar Foto</button>
    </div>
  );
}
