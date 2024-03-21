import React, { useState } from "react";
import "./registro.css";

function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Enviar dados para o servidor
  };

  return (
    <div className="container">
      <header>
        <h1>SALTA INTELIGÊNCIA</h1>
      </header>
      <main>
        <section className="content">
          <form onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Enviar</button>
          </form>
        </section>
      </main>
      <footer>
        <p>Criado por @</p>
        <p>Powered by Django</p>
      </footer>
    </div>
  );
}

export default App;
