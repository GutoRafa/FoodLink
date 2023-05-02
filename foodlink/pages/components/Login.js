import { useAuth } from '@component/contexts/AuthContexts';
import React, { useRef, useState } from 'react'

export default function Login() {
    const emailRef = useRef();
    const senhaRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            await login(emailRef.current.value, senhaRef.current.value).then(
                cred => console.log(cred.user)
            );
          } catch {
            setError("Email ou senha incorretos");
          }
    }
  return (
    <>
    <div className="justify-center text-center p-2 bg-orange-400 m-6 w-auto h-min rounded-xl">
      <h1 className="text-white font-bold text-center">LogIn</h1>
      {error && <h1 className="text-center text-red-700 font-bold">{error}</h1>}
      <form onSubmit={handleSubmit} id="login">
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-orange-500 block w-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 m-2"
          type="email"
          placeholder="email"
          ref={emailRef}
          required
        />

        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 m-2"
          type="password"
          placeholder="senha"
          ref={senhaRef}
        />

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-xl m-2"
        >
          Entrar
        </button>
      </form>
    </div>
    </>
  )
}
