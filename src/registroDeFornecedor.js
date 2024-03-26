import React, { useState } from "react";
import "./registroDeFornecedor.css";

function App() {
  const [cnpjCpf, setCnpjCpf] = useState("");
  const [razaoSocial, setRazaoSocial] = useState("");
  const [email, setEmail] = useState("");
  const [tipoPagamento, setTipoPagamento] = useState("");
  const [tipoConta, setTipoConta] = useState("");
  const [banco, setBanco] = useState("");
  const [agencia, setAgencia] = useState("");
  const [conta, setConta] = useState("");
  const [dv, setDv] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCnpjCpf("");
    setRazaoSocial("");
    setEmail("");
    setTipoPagamento("");
    setTipoConta("");
    setBanco("");
    setAgencia("");
    setConta("");
    setDv("");
  
    alert("Dados enviados com sucesso!");
  };
  

  return (
    <div className="container-registro-de-fornecedor">
      <header>
        <h1>SALTA INTELIGÊNCIA</h1>
      </header>
      <main>

        <div className="botoesAjuste" >
          <button>Registro</button>
          <button>Ajuste</button>
        </div>

        <section className="content-registro-de-fornecedor">
          <form onSubmit={handleSubmit}>
            <div className="inputs-container">
              <div className="input-group">
                <label htmlFor="cnpjCpf">CNPJ/CPF</label>
                <input
                  type="text"
                  id="cnpjCpf"
                  name="cnpjCpf"
                  value={cnpjCpf}
                  onChange={(e) => setCnpjCpf(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="razaoSocial">Razão Social</label>
                <input
                  type="text"
                  id="razaoSocial"
                  name="razaoSocial"
                  value={razaoSocial}
                  onChange={(e) => setRazaoSocial(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="tipoPagamento">Tipo Pagamento</label>
                <select
                  id="tipoPagamento"
                  name="tipoPagamento"
                  value={tipoPagamento}
                  onChange={(e) => setTipoPagamento(e.target.value)}
                >
                  <option value="">Selecione...</option>
                  <option value="boleto">Boleto</option>
                  <option value="transferenciaBancaria">Transferência Bancária</option>
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="tipoConta">Tipo Conta</label>
                <select
                  id="tipoConta"
                  name="tipoConta"
                  value={tipoConta}
                  onChange={(e) => setTipoConta(e.target.value)}
                >
                  <option value="">Selecione...</option>
                  <option value="contaCorrente">Conta Corrente</option>
                  <option value="poupanca">Poupança</option>
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="banco">Banco</label>
                <input
                  type="text"
                  id="banco"
                  name="banco"
                  value={banco}
                  onChange={(e) => setBanco(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="agencia">Agência</label>
                <input
                  type="text"
                  id="agencia"
                  name="agencia"
                  value={agencia}
                  onChange={(e) => setAgencia(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="conta">Conta</label>
                <input
                  type="text"
                  id="conta"
                  name="conta"
                  value={conta}
                  onChange={(e) => setConta(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="dv">DV</label>
                <input
                  type="text"
                  id="dv"
                  name="dv"
                  value={dv}
                  onChange={(e) => setDv(e.target.value)}
                />
              </div>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
