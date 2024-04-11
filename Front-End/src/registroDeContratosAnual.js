import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./registroDeFornecedor.css";

const App = () => {
  const [codigoContrato, setCodigoContrato] = useState("");
  const [marca, setMarca] = useState("");
  const [unidade, setUnidade] = useState("");
  const [fornecedor, setFornecedor] = useState("");
  const [anoVigencia, setAnoVigencia] = useState("");
  const [linhaOrcamentaria, setLinhaOrcamentaria] = useState("");
  const [descricaoServico, setDescricaoServico] = useState("");
  const [categoria, setCategoria] = useState("");
  const [valorContratado, setValorContratado] = useState("");
  const [distribuicaoMes, setDistribuicaoMes] = useState("");
  const [nOTRS, setNOTRS] = useState("");
  const [linkDocumentacao, setLinkDocumentacao] = useState("");
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
          codigoContrato: "",
          marca: "",
          unidade: "",
          fornecedor: "",
          anoVigencia: "",
          linhaOrcamentaria: "",
          descricaoServico: "",
          categoria: "",
          valorContratado: "",
          distribuicaoMes: "",
          nOTRS: "",
          linkDocumentacao: "",
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

  return (
    <div className="container-registro-de-fornecedor">
      <header>
        <h1>SALTA INTELIGÊNCIA</h1>
      </header>
      <main className="main-fornecedor">

      <div className="paiBotoes">
          <div className="botoesAjuste">
            <button>Registro</button>
            <button>Ajuste</button>
          </div>

          <div className="botoesContratos">
          <Link to="/registroDeContratosSpot">SPOT</Link>
          <Link to="/registroDeContratosAnual">ANUAL</Link>
          <Link to="/registroDeContratosObras">OBRAS</Link>
          </div>
        </div>
        <section className="content-registro-de-fornecedor">
          <form onSubmit={handleSubmit}>
            <div className="inputs-container">
              <div className="input-group">
              </div>
              <div className="input-group">
                <label htmlFor="marca">Marca</label>
                <input
                  type="text"
                  id="marca"
                  name="marca"
                  value={marca}
                  onChange={(e) => setMarca(e.target.value)}
                  autoComplete="off"
                />
              </div>
              <div className="input-group">
                <label htmlFor="unidade">Unidade</label>
                <input
                  type="text"
                  id="unidade"
                  name="unidade"
                  value={unidade}
                  onChange={(e) => setUnidade(e.target.value)}
                  autoComplete="off"
                />
              </div>
              <div className="input-group">
                <label htmlFor="fornecedor">Fornecedor</label>
                <input
                  type="text"
                  id="fornecedor"
                  name="fornecedor"
                  value={fornecedor}
                  onChange={(e) => setFornecedor(e.target.value)}
                  autoComplete="off"
                />
              </div>
              <div className="input-group">
                <label htmlFor="anoVigencia">Ano de Vigência</label>
                <input
                  type="text"
                  id="anoVigencia"
                  name="anoVigencia"
                  value={anoVigencia}
                  onChange={(e) => setAnoVigencia(e.target.value)}
                  autoComplete="off"
                />
              </div>
              <div className="input-group">
                <label htmlFor="linhaOrcamentaria">Linha Orçamentária</label>
                <input
                  type="text"
                  id="linhaOrcamentaria"
                  name="linhaOrcamentaria"
                  value={linhaOrcamentaria}
                  onChange={(e) => setLinhaOrcamentaria(e.target.value)}
                  autoComplete="off"
                />
              </div>
              <div className="input-group">
                <label htmlFor="descricaoServico">Descrição de Serviço</label>
                <input
                  type="text"
                  id="descricaoServico"
                  name="descricaoServico"
                  value={descricaoServico}
                  onChange={(e) => setDescricaoServico(e.target.value)}
                  autoComplete="off"
                />
              </div>
              <div className="input-group">
                <label htmlFor="categoria">Categoria</label>
                <input
                  type="text"
                  id="categoria"
                  name="categoria"
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                  autoComplete="off"
                />
              </div>
              <div className="input-group">
                <label htmlFor="valorContratado">Valor Contratado</label>
                <input
                  type="text"
                  id="valorContratado"
                  name="valorContratado"
                  value={valorContratado}
                  onChange={(e) => setValorContratado(e.target.value)}
                  autoComplete="off"
                />
              </div>
              <div className="input-group">
                <label htmlFor="distribuicaoMes">Distribuição Mês</label>
                <input
                  type="text"
                  id="distribuicaoMes"
                  name="distribuicaoMes"
                  value={distribuicaoMes}
                  onChange={(e) => setDistribuicaoMes(e.target.value)}
                  autoComplete="off"
                />
              </div>
              <div className="input-group">
                <label htmlFor="nOTRS">Nº OTRS</label>
                <input
                  type="text"
                  id="nOTRS"
                  name="nOTRS"
                  value={nOTRS}
                  onChange={(e) => setNOTRS(e.target.value)}
                  autoComplete="off"
                />
              </div>
              <div className="input-group">
                <label htmlFor="linkDocumentacao">Link Documentação</label>
                <input
                  type="text"
                  id="linkDocumentacao"
                  name="linkDocumentacao"
                  value={linkDocumentacao}
                  onChange={(e) => setLinkDocumentacao(e.target.value)}
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
