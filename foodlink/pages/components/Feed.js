import React from 'react'
import InputBox from './InputBox'
import {useAuth} from '../../contexts/AuthContexts'
import Posts from './Posts'
import EmailVerificacao from './EmailVerificacao'

function Feed() {
  const {currentUser} = useAuth()
  return (
    <>
    <div>{currentUser?.emailVerified && <InputBox/>}
    {!currentUser?.emailVerified && <EmailVerificacao/>}</div>
    <Posts/>
    </>
  )
}

export default Feed