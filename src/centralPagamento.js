import React from "react";
import { Link } from "react-router-dom";
import "./centralPagamento.css";

function Home() {
  return (
    <div>
      <div className="header-central-Pagamento">
        <div className="logo">SALTA INTELIGÊNCIA</div>
      </div>
      <main className="main-central-Pagamento">
  <div className="row">
    <section className="section-central-Pagamento">
      <h2>REGISTRO DE FORNECEDOR</h2>
      <Link to="/registro">ENTRAR</Link>
    </section>

    <section className="section-central-Pagamento">
      <h2>REGISTRO DE CONTRATOS</h2>
      <Link to="/acompanhamento">ENTRAR</Link>
    </section>

    <section className="section-central-Pagamento">
      <h2>REGISTRO DE PROJETOS</h2>
      <Link to="/pagamentos">ENTRAR</Link>
    </section>
  </div>

  <div className="row">
    <section className="section-central-Pagamento">
      <h2>REGISTRO DE PROPOSTAS</h2>
      <Link to="/diretor">ENTRAR</Link>
    </section>

    <section className="section-central-Pagamento">
      <h2>APROVAÇÃO DE CONTRATOS</h2>
      <Link to="/diretor">ENTRAR</Link>
    </section>

    <section className="section-central-Pagamento">
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
