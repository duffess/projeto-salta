import React from "react";
import { Link } from "react-router-dom";
import "./areaRegistros.css";

function Home() {
  return (
    <div>
      <div className="header-Area-Registros">
        <div className="logo">SALTA INTELIGÊNCIA</div>
      </div>
      <main className="main-Area-Registros">
  <div className="row">
    <section className="section-Area-Registros">
      <h2>REGISTRO DE FORNECEDOR</h2>
      <Link to="/registroDeFornecedor">ENTRAR</Link>
    </section>

    <section className="section-Area-Registros">
      <h2>REGISTRO DE CONTRATOS</h2>
      <Link to="/acompanhamento">ENTRAR</Link>
    </section>

    <section className="section-Area-Registros">
      <h2>REGISTRO DE PROJETOS</h2>
      <Link to="/pagamentos">ENTRAR</Link>
    </section>
  </div>

  <div className="row">
    <section className="section-Area-Registros">
      <h2>REGISTRO DE PROPOSTAS</h2>
      <Link to="/diretor">ENTRAR</Link>
    </section>

    <section className="section-Area-Registros">
      <h2>APROVAÇÃO DE CONTRATOS</h2>
      <Link to="/diretor">ENTRAR</Link>
    </section>

    <section className="section-Area-Registros">
      <h2>APROVAÇÃO DE PROPOSTAS</h2>
      <Link to="/diretor">ENTRAR</Link>
    </section>
  </div>
</main>

      <footer className="footer">
        <p>Criado por @...</p>
        <p>Powered by Django</p>
      </footer>
    </div>
  );
}

export default Home;
