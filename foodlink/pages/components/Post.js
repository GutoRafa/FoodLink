import React from 'react'
import { useAuth } from "@component/contexts/AuthContexts";

function Post({nome, horario, desc, preco , imgUrl}) {
  const {currentUser} = useAuth()

  return (
    <div className='flex flex-col border-2 border-purple-800 my-2 p-2 rounded'>
        <div className='m-2'>
          <img className='inline rounded-full h-10 mr-2' src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"></img>
            <p className='inline text-xl font-bold text-black pb-2'>{nome}</p>
            <p>{}</p>
        </div>
        <div>
            <img className='border-2 border-purple-900 my-2 w-[100%] h-[300px] object-cover rounded-sm'
            src={imgUrl}
            />
        </div>
        <div className='flex flex-row'>
            <p className='text-gray-700 w-[70%]'>{desc}</p>
            <p className='text-gray-600'>R${preco}</p>
        </div>
    </div>
  )
}

export default Post