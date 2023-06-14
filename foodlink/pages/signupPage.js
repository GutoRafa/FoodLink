import React from 'react'
import Signup from './components/Signup'

export default function signupPage() {
  return (
    <div className='flex items-center justify-center bg-purple-300'>
      <div className="w-[50vw] inline" ><Signup className="h-screen"/></div>
      <div className="w-[50vw]" ><img src='https://assets.unileversolutions.com/recipes-v2/99460.jpg' className=' h-screen'></img></div>
    </div>
  )
}
