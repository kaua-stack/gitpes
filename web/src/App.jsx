import { useState } from "react"; // Hook para gerenciar estado em componentes funcionais

// URL base da sua API Express.
// Lembre-se: sua API Express precisa estar rodando na porta 3000!
const API_BASE_URL = "http://localhost:3000";

function App() {
  // Estado para armazenar o termo de busca digitado pelo usuário
  const [searchTerm, setSearchTerm] = useState("");
  // Estado para armazenar a lista de repositórios retornados pela API
  const [repos, setRepos] = useState([]);
  // Estado para gerenciar mensagens de carregamento (loading)
  const [loading, setLoading] = useState(false);
  // Estado para gerenciar mensagens de erro
  const [error, setError] = useState(null);

  // Função assíncrona para lidar com o envio do formulário de busca
  const handleSearch = async (event) => {
    event.preventDefault(); // Previne o recarregamento padrão da página ao enviar o formulário

    // Limpa estados anteriores
    setRepos([]);
    setError(null);

    // Se o termo de busca estiver vazio, não faz nada e exibe um erro
    if (!searchTerm.trim()) {
      setError("Por favor, digite um termo de busca.");
      return;
    }

    setLoading(true); // Ativa o estado de carregamento

    try {
      // Faz a requisição para a sua API Express (que por sua vez chama a API do GitHub)
      // LINHA CORRIGIDA AQUI: Removidas as tags HTML e a sintaxe incorreta
      const response = await fetch(
        `${API_BASE_URL}/search/repos?q=${encodeURIComponent(searchTerm)}`
      );

      // Verifica se a resposta foi bem-sucedida (status 2xx)
      if (!response.ok) {
        // Se não for bem-sucedida, tenta ler a mensagem de erro da API
        const errorData = await response.json();
        throw new Error(errorData.error || `Erro HTTP: ${response.status}`);
      }

      // Se a resposta for OK, parseia o JSON
      const data = await response.json();
      setRepos(data); // Atualiza o estado com os repositórios encontrados
    } catch (err) {
      // Captura e exibe qualquer erro que ocorra durante a requisição
      console.error("Erro ao buscar repositórios:", err);
      setError(
        err.message || "Ocorreu um erro desconhecido ao buscar os repositórios."
      );
      // Mantendo esta segunda linha setError para a mensagem customizada que você quer exibir ao usuário
      setError(
        "Ocorreu um erro ao buscar os repositórios. Verifique se a sua API está rodando e o token do GitHub está configurado."
      );
    } finally {
      setLoading(false); // Desativa o estado de carregamento, independentemente do sucesso ou falha
    }
  };

  return (
    <div className="App">
      <h1>GitPes Web 🌐</h1>
      <p>Encontre repositórios no GitHub usando sua API Express.</p>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Ex: react, nodejs, typescript"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o estado searchTerm conforme o usuário digita
        />
        <button type="submit">Pesquisar</button>
      </form>

      {loading && <p className="loading-message">Carregando repositórios...</p>}
      {error && <p className="error-message">{error}</p>}

      <ul className="repo-list">
        {repos.length > 0 &&
          repos.map((repo) => (
            <li key={repo.id} className="repo-item">
              <h3>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.name}
                </a>
              </h3>
              <p>{repo.description || "Sem descrição."}</p>
              <p>
                Stars: <strong>{repo.stargazers_count} ⭐</strong> | Language:{" "}
                <strong>{repo.language || "N/A"}</strong>
              </p>
            </li>
          ))}
        {!loading && !error && repos.length === 0 && searchTerm && (
          <p>Nenhum repositório encontrado para "{searchTerm}".</p>
        )}
      </ul>
    </div>
  );
}

export default App;
