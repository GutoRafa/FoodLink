import { useAuth } from "@component/contexts/AuthContexts";
import React, { useRef, useState } from "react";

export default function Login() {
  const emailRef = useRef();
  const senhaRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      await login(emailRef.current.value, senhaRef.current.value).then((cred) =>
        console.log(cred.user)
      );
    } catch {
      setError("Email ou senha incorretos");
    }
  }
  return (
    <>
      <div className="justify-center text-center p-2 bg-orange-400 m-6 w-auto h-min rounded-xl">
        <h1 className="text-white font-bold text-center">LogIn</h1>
        {error && (
          <h1 className="text-center text-red-700 font-bold">{error}</h1>
        )}
        <form onSubmit={handleSubmit} id="login">
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

          <button type="submit" className="btn-pequeno">
            Entrar
          </button>
        </form>
      </div>
    </>
  );
}
