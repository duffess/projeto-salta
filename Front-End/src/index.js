import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./login.js";
import Home from "./home.js";
import AreaRegistro from "./areaRegistros.js";
import RegistroDeFornecedor from "./registroDeFornecedor.js";
import RegistroDeContratosSpot from "./registroDeContratosSpot.js";
import RegistroDeContratosAnual from "./registroDeContratosAnual.js";
import RegistroDeContratosObras from "./registroDeContratosObras.js";
import AreaAcompanhamento from "./areaAcompanhamento.js";
import CentralPagamento from "./centralPagamento.js";

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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
