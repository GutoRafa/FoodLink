import React from 'react'
import {useAuth} from '../../contexts/AuthContexts'
import { sendEmailVerification } from 'firebase/auth';

export default function EmailVerificacao() {
    const {currentUser} = useAuth();
    function enviarEmail(){
        sendEmailVerification(currentUser)
    }
  return (
    <div className='flex flex-col items-center justify-center'>
        <h1 className='text-center font-bold'>Para postar, verifique seu email</h1>
        <button onClick={enviarEmail()} className='btn-pequeno'>Enviar email de verificação</button>
    </div>
  )
}
