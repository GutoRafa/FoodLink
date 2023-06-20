import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContexts";
import { criarDocPost, uploadStorage } from "../../firebase";

export default function InputBox() {
  const { currentUser } = useAuth();
  const descRef = useRef();
  const precoRef = useRef();
  const arquivoRef = useRef();
  const [imagem, setImagem] = useState(null);

  const postar = (e) => {
    if (
      descRef.current.value === "" ||
      precoRef.current.value === "" ||
      !imagem
    ) {
      return alert("preencha todos os campos");
    }
    
    async function fetchLoc() {
      let url = 'https://ipinfo.io/json?token=e2670438e2eb02';
      let response = await fetch(url);
      var data = await response.json();
      return data;
    }

    e.preventDefault();
    
    const local = "posts";
    uploadStorage(imagem, local).then((url) => {
      criarDocPost(
        descRef.current.value,
        precoRef.current.value,
        url,
        currentUser.displayName,
        currentUser.uid,
        currentUser.photoURL,
        "Patos de Minas"
        ).then(removerImagem(),
        descRef.current.value = "",
        precoRef.current.value = "",);
    });
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

  function removerImagem() {
    setImagem(null);
  }

  return (
    <>
      <form className="p-2 bg-purple-400 border-2 border-purple-800 rounded-2xl">
        <div className="flex justify-between">
          <input
            className="input-padrao mr-2"
            type="text"
            placeholder="Descrição"
            ref={descRef}
          />

          <input
            ref={precoRef}
            className="input-padrao "
            type="number"
            min="0.01"
            step="any"
            placeholder="preço"
          />

          
        </div>

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

        {imagem && (
          <div onClick={removerImagem}>
            <img className="w-[100%] h-[20vw] mt-2 object-cover" src={imagem} alt="imagem" />
            <p className="text-red-700 text-bold">Clique para remover</p>
          </div>
        )}

        <button onClick={postar} className="mt-2 btn-pequeno hover:bg-purple-600">
          Enviar postagem
        </button>
      </form>
    </>
  );
}
