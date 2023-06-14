import React from 'react'
import InputBox from './InputBox'
import {useAuth} from '../../contexts/AuthContexts'
import Posts from './Posts'

function Feed() {
  const {currentUser} = useAuth()
  return (
    <>
    <div>{currentUser && <InputBox/>}</div>
    <Posts/>
    </>
  )
}

export default Feed