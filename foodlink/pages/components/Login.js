import { useAuth } from "@component/contexts/AuthContexts";
import React, { useRef, useState } from "react";

export default function Login() {
  const emailRef = useRef();
  const senhaRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      setError("");
      await login(emailRef.current.value, senhaRef.current.value);
    } catch {
      setError("Email ou senha incorretos");
    }
  }
  return (
    <>
      <div className="sticky top-2 justify-center text-center p-2 border-2 border-purple-800 bg-purple-400  w-auto h-min rounded-xl container">
        <h1 className="text-white font-bold text-center">LogIn</h1>
        {error && (
          <h1 className="text-center text-red-700 font-bold">{error}</h1>
        )}
        <form className="flex flex-col items-center" onSubmit={handleSubmit} id="login">
          <input
            className="input-padrao"
            type="email"
            placeholder="email"
            ref={emailRef}
            required
          />

          <input
            className="input-padrao"
            type="password"
            placeholder="senha"
            ref={senhaRef}
          />

          <button type="submit" className="mt-2 btn-pequeno">
            Entrar
          </button>
        </form>
        <a href="/signupPage"><p className="text-white mt-2">Não possui uma conta? Crie agora!</p></a>
      </div>
    </>
  );
}
