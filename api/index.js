// Importa o módulo 'express', que é o framework web que vamos usar para criar nosso servidor.
const express = require("express");

// Importa o módulo 'dotenv'. Ele nos permite carregar variáveis de ambiente
// de um arquivo .env para o objeto process.env. Isso é crucial para dados sensíveis.
require("dotenv").config();

// Importa o módulo 'cors'. Ele lida com a política de segurança de "Requisições entre Origens".
// Basicamente, permite que um site (seu futuro React) em um endereço diferente
// possa se comunicar com esta API sem ser bloqueado pelo navegador.
const cors = require("cors");

// Cria uma instância do aplicativo Express. É o nosso "servidor" em si.
const app = express();

// Define a porta em que o servidor irá rodar.
// Primeiro, ele tenta pegar a porta da variável de ambiente PORT (muito comum em ambientes de produção).
// Se não encontrar (o que acontece em desenvolvimento), ele usa a porta 3000 como padrão.
const PORT = process.env.PORT || 3000;

// --- Configuração de Middlewares ---
// Middlewares são funções que o Express executa sequencialmente em cada requisição recebida.

// Usa o middleware 'cors' para habilitar o CORS para todas as requisições.
// Por enquanto, ele permite qualquer origem (*), mas em produção, é bom ser mais específico.
app.use(cors());

// Usa o middleware 'express.json()'. Isso é vital!
// Ele faz com que o Express entenda e parseie (converta) o corpo de requisições
// que vêm em formato JSON (por exemplo, quando o frontend envia dados para o backend).
// Sem isso, req.body viria como 'undefined'.
app.use(express.json());

// --- Definição de Rotas (Endpoints da API) ---
// Rotas definem como nosso servidor responde a diferentes tipos de requisições HTTP (GET, POST, etc.)
// em diferentes URLs (endpoints).

// Rota Raiz (GET /)
// Quando alguém faz uma requisição GET para o endereço base do servidor (ex: http://localhost:3000/),
// esta função é executada. 'req' é o objeto de requisição, 'res' é o objeto de resposta.
app.get("/", (req, res) => {
  res.send("API GitPes está rodando! 🚀 Bem-vindo!"); // Envia uma mensagem simples como resposta.
});

// Rota de Teste (GET /teste)
// Útil para verificar rapidamente se o servidor está funcionando e respondendo JSON.
// Ex: http://localhost:3000/teste
app.get("/teste", (req, res) => {
  res.json({
    message: "Esta é uma rota de teste da API GitPes!",
    status: "OK",
  }); // Envia um JSON.
});

// --- Inicialização do Servidor ---
// Faz o aplicativo Express começar a "escutar" por requisições na porta especificada.
app.listen(PORT, () => {
  console.log(`Servidor Express rodando em: http://localhost:${PORT}`);
  console.log("Para parar, pressione Ctrl+C.");
});
