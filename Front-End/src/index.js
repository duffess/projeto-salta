import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./js/login.js";
import Home from "./js/home.js";
import AreaRegistro from "./js/areaRegistros.js";
import RegistroDeFornecedor from "./js/registroDeFornecedor.js";
import RegistroDeContratosSpot from "./js/registroDeContratosSpot.js";
import RegistroDeContratosAnual from "./js/registroDeContratosAnual.js";
import RegistroDeContratosObras from "./js/registroDeContratosObras.js";
import AreaAcompanhamento from "./js/areaAcompanhamento.js";
import CentralPagamento from "./js/centralPagamento.js";
import Cadastro from "./js/cadastro.js";
import ForgotPass from "./js/forgotPass.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/areaRegistro" element={<AreaRegistro />} />
        <Route path="/registroDeFornecedor" element={<RegistroDeFornecedor />} />
        <Route path="/registroDeContratosSpot" element={<RegistroDeContratosSpot />} />
        <Route path="/registroDeContratosAnual" element={<RegistroDeContratosAnual />} />
        <Route path="/registroDeContratosObras" element={<RegistroDeContratosObras />} />
        <Route path="/areaAcompanhamento" element={<AreaAcompanhamento />} />
        <Route path="/centralPagamento" element={<CentralPagamento />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/forgotPass" element={<ForgotPass />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
