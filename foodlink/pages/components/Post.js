import React from 'react'

function Post({nome, horario, desc, preco , imgUrl}) {
  
  return (
    <div className='flex flex-col border-2 border-orange-400 my-2 p-2 rounded'>
        <div>
            <p className='text-medium font-bold text-black py-2'>{nome}</p>
            <p>{}</p>
        </div>
        <div>
            <img className='border-2 border-orange-100 w-[100%] h-[300px] object-cover rounded-sm'
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