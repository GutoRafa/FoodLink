import React, { useRef,useState } from "react";
import { useAuth } from "../../contexts/AuthContexts";
import { updateProfile } from "firebase/auth";
import { uploadStorage } from "@component/firebase";

export default function Configuracoes() {
  const [imagem, setImagem] = useState(null);
  const { currentUser } = useAuth();
  const nome = useRef();
  const arquivoRef = useRef();
  var foto = currentUser.photoURL;
const alterarNome = (e) => {
  e.preventDefault();
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
      <div className="flex items-center">
      <div className="" onClick={() => arquivoRef.current.click()}>
        {!imagem && <img className="rounded-full h-40 w-40 object-cover" src={foto}></img>}
        {imagem && <img className="rounded-full h-40 w-40 object-cover" src={imagem}></img>}
        
      </div>
      <input type="file" onChange={addImagem} ref={arquivoRef} hidden />
        
      
      <button className="btn-pequeno h-16 ml-4" onClick={alterarFoto}>Alterar Foto</button>
        </div>
      
      
      
        
    </div>
  );
}
