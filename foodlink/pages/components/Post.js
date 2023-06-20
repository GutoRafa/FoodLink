import React,{useEffect} from "react";
import { useAuth } from "@component/contexts/AuthContexts";
import { useRouter } from "next/router";
import { collection , where , query , orderBy,getDoc,doc } from 'firebase/firestore'
import { db } from '@component/firebase'
import { useCollection } from 'react-firebase-hooks/firestore'

function Post({ nome, horario, desc, preco, imgUrl, fotoPerfil,id }) {


const docRef = doc(db, "numeros", `${id}`);
const docSnap = getDoc(docRef);
  
  const numero = "https://wa.me/5534991805952";
  var foto;


  if (fotoPerfil == null) {
    foto =
      "https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg";
  } else {
    foto = fotoPerfil;
  }


  return (
    <div className="flex flex-col text-white bg-purple-500 hover:bg-purple-600 my-4 p-2 rounded-2xl">
      <div className="m-2 flex">
        <img className="inline rounded-full h-10 w-10 mr-2" src={foto}></img>
        <p className="inline text-xl font-bold text-white pb-2">{nome}</p>
        <p className="inline pl-2">
          {new Date(horario?.toDate()).toLocaleDateString()} às{" "}
          {new Date(horario?.toDate()).toLocaleTimeString()}
        </p>
        <a className="ml-auto" href={numero}>
        <div className="ml-auto bg-purple-700 p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-whatsapp"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
        </div>
        </a>
      </div>
      <div>
        <img
          className="border-2 border-purple-900 my-2 w-[100%] h-[20vw] object-cover rounded-sm"
          src={imgUrl}
        />
      </div>
      <div className="flex flex-row">
        <p className="ml-2 font-semibold w-[70%]">{desc}</p>
        <p className=" font-bold">R${preco}</p>
      </div>
    </div>
  );
}

export default Post;
