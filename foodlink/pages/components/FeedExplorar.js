import React from 'react'
import InputBox from './InputBox'
import {useAuth} from '../../contexts/AuthContexts'
import PostsExplorar from './PostsExplorar'
import EmailVerificacao from './EmailVerificacao'

function FeedExplorar() {
  const {currentUser} = useAuth()

  return (
    <>
    
    <PostsExplorar/>
    </>
  )
}

export default FeedExplorar