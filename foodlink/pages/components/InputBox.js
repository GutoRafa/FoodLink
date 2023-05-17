import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContexts";
import { db, storage } from "../../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  setDoc,
  doc,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes, uploadString } from "firebase/storage";

export default function InputBox() {
  const { currentUser } = useAuth();
  const descRef = useRef();
  const precoRef = useRef();
  const arquivoRef = useRef();
  const [imagem, setImagem] = useState(null);

  const postar = () => {
    e.preventDefault();
    if (
      descRef.current.value === "" ||
      precoRef.current.value === "" ||
      !imagem
    ) {
      return alert("preencha todos os campos");
    }
    try {
      const storageRef = ref(storage, `posts/${v4()}`);
      uploadString(storageRef, imagem, "data_url")
    } catch (e) {
      console.error(err);
    }
    descRef.current.value = "";
    precoRef.current.value = "";
  };

  const addImagem = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImagem(readerEvent.target.result);
    }
  }

  function removerImagem() {
    setImagem(null);
  }

  return (
    <>
      <form className="p-2 bg-orange-300 rounded-xl">
        <div className="flex justify-between">
          <input
            className="input-padrao"
            type="text"
            placeholder="Descrição"
            ref={descRef}
          />

          <input
            ref={precoRef}
            className="input-padrao"
            type="number"
            min="0.01"
            step="any"
            placeholder="preço"
          />

          <div
            className="rounded bg-orange-500 w-12 h-12 flex justify-center"
            onClick={() => arquivoRef.current.click()}
          >
            <input
              type="file"
              onChange={addImagem}
              ref={arquivoRef}
              hidden
            />
            <img
              className="w-10 h-10 p-1"
              src="https://svgsilh.com/svg_v2/1710849.svg"
            />
          </div>
        </div>

        {imagem && (
          <div onClick={removerImagem}>
            <img className="h-[300px]" src={imagem} alt="imagem" />
            <p className="text-red-700 text-bold">Clique para remover</p>
          </div>
        )}

        <button onClick={postar} className="mt-2 btn-pequeno">
          Enviar postagem
        </button>
      </form>
    </>
  );
}