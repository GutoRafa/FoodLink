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
    <div className='inline-block bg-purple-500 hover:bg-purple-600 my-1 p-2 rounded-2xl w-[20vw]'>
        <div className='m-2'>
          <img className='inline rounded-full h-10 w-10 mr-2' src={foto}></img>
            <p className='inline text-xl font-bold text-black pb-2'>{nome}</p>
        </div>
        <div>
            <img className='border-2 border-purple-900 my-2 w-[100%] h-[10vw] object-cover rounded-sm'
            src={imgUrl}
            />
        </div>
        <div className='flex flex-row'>
            <p className='text-black w-[70%]'>{desc}</p>
            <p className='text-black font-semibold'>R${preco}</p>
        </div>
    </div>
  )
}

export default PostExplorar