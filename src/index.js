import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./login";
import Home from "./home";
import Registro from "./registro";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/registro" element={<Registro />} />
  </Routes>
</BrowserRouter>

  </React.StrictMode>
);
