import React from 'react'

function Post({nome, horario, desc, preco , imgUrl}) {
  return (
    <div className='flex flex-col bg-orange-300 my-2 p-2 rounded'>
        <div>
            <p className='text-medium font-bold text-white py-2'>{nome}</p>
        </div>
        <div>
            <img className='w-[100%] h-[300px] object-cover rounded-sm'
            src={imgUrl}
            />
        </div>
        <div className='flex flex-row'>
            <p className='text-white w-[70%]'>{desc}</p>
            <p className='text-white'>R${preco}</p>
        </div>
    </div>
  )
}

export default Post