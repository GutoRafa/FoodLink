import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContexts";
import { updateProfile } from "firebase/auth";
import { uploadStorage} from "@component/firebase";
import { getFirestore, setDoc , serverTimestamp , doc , addDoc, app, collection } from "firebase/firestore";
import { useRouter } from "next/router";


export default function Configuracoes() {
  const [imagem, setImagem] = useState(null);
  const router = useRouter();
  const { currentUser } = useAuth();
  const db = getFirestore(app);
  const telRef = useRef();
  const arquivoRef = useRef();
  var foto = currentUser.photoURL;

  const alterarFoto = () => {
    const local = "fotos-perfil/";
    uploadStorage(imagem, local).then((url) => {
      updateProfile(currentUser, {
        photoURL: url,
      });
    }).then(() => router.reload());
    
  };

  async function alterarTelefone(telefone) {
    const docData = {
      numero: telefone,
    }
    const docRef = await setDoc(doc(db, "numeros/" + `${currentUser.uid}`), docData);
  }

  const handleSubmit = () => {
    
    alterarTelefone(telRef.current.value);
  };

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
          {!imagem && (
            <img
              className="rounded-full h-40 w-40 object-cover"
              src={foto}
            ></img>
          )}
          {imagem && (
            <img
              className="rounded-full h-40 w-40 object-cover"
              src={imagem}
            ></img>
          )}
        </div>
        <input type="file" onChange={addImagem} ref={arquivoRef} hidden />
            
        <button className="btn-pequeno h-16 ml-4" onClick={alterarFoto}>
          Alterar Foto
        </button>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-row items-center">
        <label
          for="telefone"
          className="mr-2 font-bold placeholder:text-gray-500"
        >
          Telefone
        </label>
        <input
          id="telefone"
          ref={telRef}
          className="input-padrao"
          placeholder="55 XX XXXXX-XXXX"
        ></input>
        <button className="btn-pequeno ml-2">Alterar telefone</button>
      </form>
    </div>
  );
}
