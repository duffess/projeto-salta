// import React, { useState } from "react";
// import "../css/telaCadastro.css";

// function Cadastro() {
//   const [user, setser] = useState("");
//   const [senha, setSenha] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Formulário enviado:", { nome, email, senha, confirmarSenha });
//   };

//   return (
//     <div className="main">
//       <div className="form-container">
//         <h2>Cadastro</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             className="input-cadastro"
//             type="text"
//             placeholder="User"
//             value={user}
//             onChange={(event) => setNome(event.target.value)}
//           />
//           <input
//             className="input-cadastro"
//             type="password"
//             placeholder="Password"
//             value={senha}
//             onChange={(event) => setSenha(event.target.value)}
//           />
//           <button type="submit">Cadastrar</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Cadastro;
