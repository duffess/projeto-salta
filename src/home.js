import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div>
      <div className="header">
        <div className="logo">SALTA INTELIGÊNCIA</div>
      </div>
      <main className="main">
        <section className="section">
          <h2>REGISTRO DE FORNECEDOR</h2>
          <Link to="/registro">ENTRAR</Link>
        </section>

        <section className="section">
          <h2>REGISTRO DE CONTRATOS</h2>
          <Link to="/acompanhamento">ENTRAR</Link>
        </section>

        <section className="section">
          <h2>REGISTRO DE PROJETOS</h2>
          <Link to="/pagamentos">ENTRAR</Link>
        </section>

        <section className="section">
          <h2>REGISTRO DE PROPOSTAS</h2>
          <Link to="/diretor">ENTRAR</Link>
        </section>
      </main>
      <footer className="footer">
        <p>Criado por @...</p>
        <p>Powered by Django</p>
      </footer>
    </div>
  );
}

export default Home;
