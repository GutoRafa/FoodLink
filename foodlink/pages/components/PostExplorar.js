import React from 'react'
import { useAuth } from "@component/contexts/AuthContexts";

function PostExplorar({nome, horario, desc, preco , imgUrl, fotoPerfil}) {
  const {currentUser} = useAuth()
  var foto;

  if (fotoPerfil == null) {
    foto = "https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
  } else {
    foto = fotoPerfil
  }

  return (
    <div className='inline-block bg-purple-500 hover:bg-purple-600 mb-2 pb-2 rounded-md w-[20vw] max-sm:w-full'>
        <div className='max-sm:hidden flex items-center bg-purple-700 absolute  ml-0 py-0 px-2'>
          <img className='shadow-lg inline rounded-full h-6 w-6 mr-2' src={foto}></img>
            <p className='inline text-xl font-bold text-white drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]  pb-2'>{nome}</p>
        </div>
        <div className='block'>
            <img className='border-2 border-purple-900 mb-2 w-[100%] h-[10vw] max-sm:h-[40vw] object-cover rounded-sm'
            src={imgUrl}
            />
        </div>
        <div className='flex flex-row'>
            <p className='text-white  font-semibold w-[70%] ml-2'>{desc}</p>
            <p className='text-white font-bold mr-2'>R${preco}</p>
        </div>
    </div>
  )
}

export default PostExplorar