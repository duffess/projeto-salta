import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./registroDeFornecedor.css";

const App = () => {
  const [marca, setMarca] = useState("");
  const [unidade, setUnidade] = useState("");
  const [fornecedor, setFornecedor] = useState("");
  const [linhaOrcamentaria, setLinhaOrcamentaria] = useState("");
  const [descricaoServico, setDescricaoServico] = useState("");
  const [valorMensal, setValorMensal] = useState("");
  const [linkDocumentacao, setLinkDocumentacao] = useState("");
  const [nOTRS, setNOTRS] = useState("");
  const [dataRegistroOTRS, setDataRegistroOTRS] = useState("");
  const [renovacaoAutomatica, setRenovacaoAutomatica] = useState("");
  const [indiceReajuste, setIndiceReajuste] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);

  const handleSubmit = async (
    e,
    marca,
    unidade,
    fornecedor,
    linhaOrcamentaria,
    descricaoServico,
    valorMensal,
    linkDocumentacao,
    nOTRS,
    dataRegistroOTRS,
    renovacaoAutomatica,
    indiceReajuste
  ) => {
    e.preventDefault();
    console.log("Dados a serem enviados:", {
      marca: marca,
      unidade: unidade,
      fornecedor: fornecedor,
      linhaOrcamentaria: linhaOrcamentaria,
      descricaoServico: descricaoServico,
      valorMensal: valorMensal,
      linkDocumentacao: linkDocumentacao,
      nOTRS: nOTRS,
      dataRegistroOTRS: dataRegistroOTRS,
      renovacaoAutomatica: renovacaoAutomatica,
      indiceReajuste: indiceReajuste,
    });
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/registro/contrato_anual/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            marca: marca,
            unidade: unidade,
            fornecedor: fornecedor,
            natureza_orcamentaria: linhaOrcamentaria,
            descricao_servico: descricaoServico,
            valor_mensal: valorMensal,
            links_docs: linkDocumentacao,
            numero_otrs: nOTRS,
            data_registro_otrs: dataRegistroOTRS,
            renovacao_automatica: renovacaoAutomatica,
            indice_reajuste: indiceReajuste,
          }),
        }
      );
      setMarca("");
      setUnidade("");
      setFornecedor("");
      setLinhaOrcamentaria("");
      setDescricaoServico("");
      setValorMensal("");
      setLinkDocumentacao("");
      setNOTRS("");
      setDataRegistroOTRS("");
      setRenovacaoAutomatica("");
      setIndiceReajuste("");
      setShowPopUp(true);
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
          <form
            onSubmit={(e) =>
              handleSubmit(
                e,
                marca,
                unidade,
                fornecedor,
                linhaOrcamentaria,
                descricaoServico,
                valorMensal,
                linkDocumentacao,
                nOTRS,
                dataRegistroOTRS,
                renovacaoAutomatica,
                indiceReajuste
              )
            }
          >
            <div className="inputs-container">
              <div className="input-group"></div>
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
                <label htmlFor="valorMensal">Valor mensal</label>
                <input
                  type="text"
                  id="valorMensal"
                  name="valorMensal"
                  value={valorMensal}
                  onChange={(e) => setValorMensal(e.target.value)}
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
                <label htmlFor="dataDeRegistroOTRS">
                  Data de Registro OTRS
                </label>
                <input
                  type="text"
                  id="dataRegistroOtrs"
                  name="dataRegistroOtrs"
                  value={dataRegistroOTRS}
                  onChange={(e) => setDataRegistroOTRS(e.target.value)}
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
              <div className="input-group">
                <label htmlFor="renovacaoAutomatica">
                  Renovação Automática
                </label>
                <input
                  type="text"
                  id="renovacaoAutomatica"
                  name="renovacaoAutomatica"
                  value={renovacaoAutomatica}
                  onChange={(e) => setRenovacaoAutomatica(e.target.value)}
                  autoComplete="off"
                />
              </div>
              <div className="input-group">
                <label htmlFor="indiceReajuste">Índice de Reajuste</label>
                <input
                  type="text"
                  id="indiceReajuste"
                  name="indiceReajuste"
                  value={indiceReajuste}
                  onChange={(e) => setIndiceReajuste(e.target.value)}
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
