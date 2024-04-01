import React, { useState } from "react";
import { IMaskInput } from "react-imask";
import "./registroDeFornecedor.css";

const App = () => {
  const [documento, setDocumento] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState("cpf"); 
  const [razaoSocial, setRazaoSocial] = useState("");
  const [email, setEmail] = useState("");
  const [tipoPagamento, setTipoPagamento] = useState("");
  const [tipoConta, setTipoConta] = useState("");
  const [banco, setBanco] = useState("");
  const [agencia, setAgencia] = useState("");
  const [conta, setConta] = useState("");
  const [dv, setDv] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);

  const handleSubmit = async (e, formData, setFormData) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8000/api/registros/fornecedores/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setFormData({
          documento: "",
          tipoDocumento: "cpf",
          razaoSocial: "",
          email: "",
          tipoPagamento: "",
          tipoConta: "",
          banco: "",
          agencia: "",
          conta: "",
          dv: "",
        });

        setShowPopUp(true);
      } else {
        console.error("Erro ao enviar os dados:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao enviar os dados:", error.message);
    }
  };

  const handleClosePopUp = () => {
    setShowPopUp(false);
  };

  const PopUp = ({ onClose }) => {
    console.log("teste");
    return (
      <div className="popup-overlay">
        <div className="popup-content">
          <p className="cookieHeading">Dados enviados com sucesso!</p>
          <div className="buttonContainer">
            <button className="acceptButton" onClick={() => onClose(true)}>
              Ok!
            </button>
          </div>
        </div>
      </div>
    );
  };

  function getMask() {
    if (tipoDocumento === "cpf") {
      return "000.000.000-00";
    } else if (tipoDocumento === "cnpj") {
      return "00.000.000/0000-00";
    }
    return "";
  }

  return (
    <div className="container-registro-de-fornecedor">
      <header>
        <h1>SALTA INTELIGÊNCIA</h1>
      </header>
      <main>
        <div className="botoesAjuste">
          <button>Registro</button>
          <button>Ajuste</button>
        </div>

        <section className="content-registro-de-fornecedor">
          <form onSubmit={handleSubmit}>
            <div className="inputs-container">
              <div className="input-group">
                <label htmlFor="tipoDocumento">Tipo de Documento</label>
                <select
                  id="tipoDocumento"
                  name="tipoDocumento"
                  value={tipoDocumento}
                  onChange={(e) => setTipoDocumento(e.target.value)}
                >
                  <option value="cpf">CPF</option>
                  <option value="cnpj">CNPJ</option>
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="documento">
                  {tipoDocumento === "cpf" ? "CPF" : "CNPJ"}
                </label>
                <IMaskInput
                  mask={getMask()}
                  value={documento}
                  onChange={(e) => setDocumento(e.target.value)}
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
                  autoComplete="off"
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
                  autoComplete="off"
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
                  <option value="transferenciaBancaria">
                    Transferência Bancária
                  </option>
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
                  autoComplete="off"
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
                  autoComplete="off"
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
                  autoComplete="off"
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
                  autoComplete="off"
                />
              </div>
            </div>
            <button type="submit">Enviar</button>
          </form>
          {showPopUp && <PopUp onClose={handleClosePopUp} />}
        </section>
      </main>
      <footer className="footer">
        <p>Criado por @...</p>
        <p>Powered by Django</p>
      </footer>
    </div>
  );
};

export default App;
