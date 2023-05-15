import React from 'react'
import InputBox from './InputBox'
import {useAuth} from '../../contexts/AuthContexts'

function Feed() {
  const {currentUser} = useAuth()
  return (
    <div>{currentUser && <InputBox/>}</div>
  )
}

export default Feed