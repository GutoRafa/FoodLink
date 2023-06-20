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
            className="rounded bg-purple-500 hover:bg-purple-600 cursor-pointer pt-1 w-12 h-12  flex justify-center"
            onClick={() => arquivoRef.current.click()}
          >
            <input type="file" onChange={addImagem} ref={arquivoRef} hidden />
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-camera text-white" viewBox="0 0 16 16">
  <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
  <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
</svg>
          </div>

        {imagem && (
          <div onClick={removerImagem}>
            <img className="w-[100%] h-[20vw] mt-2 object-cover" src={imagem} alt="imagem" />
            <p className="text-white font-bold">Clique na imagem para remove-la</p>
          </div>
        )}

        <button onClick={postar} className="mt-2 btn-pequeno hover:bg-purple-600">
          Enviar postagem
        </button>
      </form>
    </>
  );
}
