import React from "react";
import { Link } from "react-router-dom";
import "./areaAcompanhamento.css";

function Home() {
  return (
    <div>
      <div className="header-Area-Acompanhamento">
        <div className="logo">SALTA INTELIGÊNCIA</div>
      </div>
      <main className="main-Area-Acompanhamento">
        <section className="section-Area-Acompanhamento">
          <h2>ACOMPANHAMENTO DE CONTRATOS</h2>
          <Link to="">ENTRAR</Link>
        </section>

        <section className="section-Area-Acompanhamento">
          <h2>ACOMPANHAMENTO DE PROJETOS</h2>
          <Link to="">ENTRAR</Link>
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
