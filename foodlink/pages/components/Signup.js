import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContexts";

function Signup() {
  const nomeRef = useRef();
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
      await signup(
        emailRef.current.value,
        senhaRef.current.value,
        nomeRef.current.value
      );
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
          className="input-padrao"
          type="text"
          placeholder="nome"
          ref={nomeRef}
        />

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

        <input
          className="input-padrao"
          type="password"
          placeholder="confirme sua senha"
          ref={senhaConfirmaRef}
        />

      <input type="file" 
      />

        <button type="submit" disabled={carregando} className="btn-pequeno">
          Criar conta
        </button>
      </form>
    </div>
  );
}

export default Signup;
