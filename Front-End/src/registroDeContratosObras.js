import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./registroDeFornecedor.css";

const RegistroDeContratosObras = () => {
  const [marca, setMarca] = useState("");
  const [unidade, setUnidade] = useState("");
  const [fornecedor, setFornecedor] = useState("");
  const [linhaOrcamentaria, setLinhaOrcamentaria] = useState("");
  const [anoVigencia, setAnoVigencia] = useState("");
  const [descricaoServico, setDescricaoServico] = useState("");
  const [valorContratado, setValorContratado] = useState("");
  const [distribuicaoMes, setDistribuicaoMes] = useState("");
  const [solicitante, setSolicitante] = useState("");
  const [linkDocumentacao, setLinkDocumentacao] = useState("");
  const [nOTRS, setNOTRS] = useState("");
  const [dataRegistroOTRS, setDataRegistroOTRS] = useState("");
  const [proposta, setProposta] = useState("");
  const [infoDiversas, setInfoDiversas] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);

  const handleSubmit = async (
    e,
    marca,
    unidade,
    fornecedor,
    linhaOrcamentaria,
    descricaoServico,
    valorContratado,
    distribuicaoMes,
    nOTRS,
    dataRegistroOTRS,
    linkDocumentacao,
    anoVigencia,
    solicitante,
    infoDiversas,
    proposta,
  ) => {
    e.preventDefault();
    console.log("Dados a serem enviados:", {
      marca: marca,
      unidade: unidade,
      fornecedor: fornecedor,
      linhaOrcamentaria: linhaOrcamentaria,
      descricaoServico: descricaoServico,
      valorContratado: valorContratado,
      distribuicaoMes: distribuicaoMes,
      nOTRS: nOTRS,
      linkDocumentacao: linkDocumentacao,
      data_registro_otrs: dataRegistroOTRS,
      ano_vigencia: anoVigencia,
      solicitante: solicitante,
      info_diversas: infoDiversas,
      proposta: proposta,
    });
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/registro/contrato_obras/",
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
            ano_vigencia: anoVigencia,
            descricao_servico: descricaoServico,
            valor_contratado: valorContratado,
            distribuicao_mes: distribuicaoMes,
            solicitante: solicitante,
            links_docs: linkDocumentacao,
            numero_otrs: nOTRS,
            data_registro_otrs: dataRegistroOTRS,
            info_diversas: infoDiversas,
            contr_prop: proposta,
          }),
        }
      );
      setMarca("");
      setUnidade("");
      setFornecedor("");
      setLinhaOrcamentaria("");
      setAnoVigencia("");
      setDescricaoServico("");
      setValorContratado("");
      setDistribuicaoMes("");
      setSolicitante("");
      setLinkDocumentacao("");
      setNOTRS("");
      setDataRegistroOTRS("");
      setProposta("")
      setInfoDiversas("");
      setShowPopUp(true);
    } catch (error) {
      console.error("Erro ao enviar os dados:", error.message);
    }
  };

  const handleClosePopUp = () => {
    setShowPopUp(false);
  };

  const PopUp = ({ onClose }) => {
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
                valorContratado,
                distribuicaoMes,
                nOTRS,
                dataRegistroOTRS,
                linkDocumentacao,
                anoVigencia,
                solicitante,
                infoDiversas,
                proposta,
              )
            }
          >
            <div className="inputs-container">
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
                <label htmlFor="solicitante">Solicitante</label>
                <input
                  type="text"
                  id="solicitante"
                  name="solicitante"
                  value={solicitante}
                  onChange={(e) => setSolicitante(e.target.value)}
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
                <label htmlFor="nOTRS">Data de Registro OTRS</label>
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
                <label htmlFor="proposta">Proposta</label>
                <input
                  type="text"
                  id="proposta"
                  name="proposta"
                  value={proposta}
                  onChange={(e) => setProposta(e.target.value)}
                  autoComplete="off"
                />
              </div>

              <div className="input-group">
                <label htmlFor="infoDiversas">Informações Diversas</label>
                <input
                  type="text"
                  id="infoDiversas"
                  name="infoDiversas"
                  value={infoDiversas}
                  onChange={(e) => setInfoDiversas(e.target.value)}
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

export default RegistroDeContratosObras;
