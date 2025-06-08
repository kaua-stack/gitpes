import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css"; // Mantenha esta linha para o CSS que você criou

// Remova ou comente a linha abaixo que importava './index.css'
// import './index.css'; // <--- ESTA LINHA CAUSAVA O ERRO

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
