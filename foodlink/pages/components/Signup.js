import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContexts";

function Signup() {
  const emailRef = useRef();
  const senhaRef = useRef();
  const senhaConfirmaRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (senhaRef.current.value !== senhaConfirmaRef.current.value) {
      return setError("as senhas não são iguais");
    }

    try {
      setError("");
      setCarregando(true);
      await signup(emailRef.current.value, senhaRef.current.value);
    } catch {
      setError("falha ao criar conta");
    }
    setCarregando(false);
  }

  return (
    <div className="justify-center text-center p-2 bg-orange-400 m-6 w-auto h-min rounded-xl">
      <h1 className="text-white font-bold text-center">Crie sua conta</h1>
      {error && <h1 className="text-center text-red-700 font-bold">{error}</h1>}
      <form onSubmit={handleSubmit} id="signup">
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

        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 m-2"
          type="password"
          placeholder="confirme sua senha"
          ref={senhaConfirmaRef}
        />

        <button
          type="submit"
          disabled={carregando}
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-xl m-2"
        >
          Criar conta
        </button>
      </form>
    </div>
  );
}

export default Signup;
