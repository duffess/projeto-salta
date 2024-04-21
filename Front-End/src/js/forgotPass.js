import React, { useState } from "react";
import { IMaskInput } from "react-imask";
import "../css/telaCadastro.css";

function Cadastro() {
  const [nome, setUser] = useState("");
  const [senha, setSenha] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState("cpf");
  const [documento, setDocumento] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulário enviado:", { nome, senha });
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
    <div className="main">
      <div className="form-container">
        <h2>Recuperação de senha</h2>
        <form>
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
        </form>
        <form onSubmit={handleSubmit}>
          <label htmlFor="documento">
            {tipoDocumento === "cpf" ? "CPF" : "CNPJ"}
          </label>
          <IMaskInput
            mask={getMask()}
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
            placeholder="Digite aqui"
          />

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
