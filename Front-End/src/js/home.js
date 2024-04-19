import React from "react";
import { Link } from "react-router-dom";
import '../css/areaRegistros.css';

function Home() {
  return (
    <div>
      <div className="header">
        <div className="logo">SALTA INTELIGÊNCIA</div>
      </div>
      <main className="main-home">
        <section className="section">
          <h2>ÁREA DE REGISTROS</h2>
          <Link to="/areaRegistro">ENTRAR</Link>
        </section>

        <section className="section">
          <h2>ÁREA DE ACOMPANHAMENTO</h2>
          <Link to="/areaAcompanhamento">ENTRAR</Link>
        </section>

        <section className="section">
          <h2>CENTRAL DE PAGAMENTOS</h2>
          <Link to="/centralPagamento">ENTRAR</Link>
        </section>

        <section className="section">
          <h2>CENTRAL DO DIRETOR</h2>
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
