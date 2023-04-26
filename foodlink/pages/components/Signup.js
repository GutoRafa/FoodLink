import React, { useRef } from 'react'
import { useAuth } from '@component/contexts/AuthContexts'

function Signup() {
    const emailRef = useRef()
    const senhaRef = useRef()
    const senhaConfirmaRef = useRef()
    const {signup} = useAuth()

    function handleSubmit(e) {
        e.preventDefault()

        signup(emailRef.current.value,senhaRef.current.value)
    }

  return (
    <>
    <div>
        <h1>Crie sua conta</h1>
        <form>
            <label>Email</label>
            <input ref={emailRef} type='email' required></input>
            <label>Senha</label>
            <input ref={senhaRef} type='password' required></input>
            <label>Confirme a senha</label>
            <input id='email' ref={senhaConfirmaRef} type='password' required></input>
            <button type='submit'>Criar Conta</button>
        </form>
    </div>
    <div>Já possui uma conta? Log In</div>
    </>
  )
}

export default Signup