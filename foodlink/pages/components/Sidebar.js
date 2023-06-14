import React from 'react'

function Sidebar() {
  return (
    <div className='h-full left-0 m-0 flex flex-col bg-purple-400 border-2 border-purple-800'>
      <a href='/'><p className='font-bold text-black ml-4 mt-2 text-xl'>Home</p></a>
      <a href='/'><p className='font-bold text-black ml-4 mt-2 text-xl'>Explorar</p></a>
      <a href='/'>
      <p className='font-bold text-black ml-4 mt-2 text-xl'>Configurações</p></a>

    </div>
  )
}

export default Sidebar