// Mude de 'require' para 'import' para usar ES Modules
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import got from "got";

// Inicia o dotenv.config() para carregar as variáveis de ambiente
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API GitPes está rodando! 🚀 Bem-vindo!");
});

app.get("/teste", (req, res) => {
  res.json({
    message: "Esta é uma rota de teste da API GitPes!",
    status: "OK",
  });
});

app.get("/search/repos", async (req, res) => {
  const searchTerm = req.query.q;

  if (!searchTerm) {
    return res
      .status(400)
      .json({ error: 'Parâmetro de busca "q" é obrigatório.' });
  }

  const githubToken = process.env.GITHUB_TOKEN;

  try {
    const response = await got("https://api.github.com/search/repositories", {
      searchParams: {
        q: searchTerm,
      },
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `token ${githubToken}`,
      },
      responseType: "json",
    });

    res.json(response.body.items);
  } catch (error) {
    console.error("Erro ao buscar repositórios no GitHub:", error.message);
    res.status(500).json({ error: "Erro ao buscar repositórios no GitHub." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor Express rodando em: http://localhost:${PORT}`);
  console.log("Para parar, pressione Ctrl+C.");
});
