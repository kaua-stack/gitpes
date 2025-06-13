
🚀 GitPes: Sua Ferramenta Full-Stack para Pesquisa de Repositórios GitHub 🚀

&lt;p align="center">
&lt;a href="[link suspeito removido]" target="_blank">
&lt;img src="[link suspeito removido]" alt="Repositório GitPes no GitHub">
&lt;/a>
&lt;img src="[link suspeito removido]" alt="Status Concluído">
&lt;img src="[link suspeito removido]" alt="Licença ISC">
&lt;/p>

&lt;p align="center">
&lt;img src="[link suspeito removido]" alt="Tecnologia Node.js">
&lt;img src="[link suspeito removido]" alt="Tecnologia Express.js">
&lt;img src="[link suspeito removido]" alt="Tecnologia React">
&lt;img src="[link suspeito removido]" alt="Tecnologia Vite">
&lt;img src="[link suspeito removido]" alt="Tecnologia GitHub API">
&lt;img src="[link suspeito removido]" alt="Tipo CLI">
&lt;/p>

&lt;h1 align="center">🚀 GitPes: Sua Ferramenta Full-Stack para Pesquisa de Repositórios GitHub 🚀&lt;/h1>

&lt;p align="center">
Uma solução completa para buscar e visualizar repositórios do GitHub, combinando o poder de uma API robusta, uma CLI interativa e uma interface web moderna.
&lt;/p>

🎯 Sobre o Projeto

O GitPes é um projeto Full-Stack desenvolvido para demonstrar a criação de uma aplicação completa, desde a API de backend, passando por uma ferramenta de linha de comando (CLI), até uma interface web moderna. O objetivo principal é permitir a pesquisa de repositórios públicos no GitHub de diversas formas.

Este projeto explora a comunicação eficiente entre diferentes camadas, o gerenciamento seguro de variáveis de ambiente, o consumo de APIs externas (GitHub API) e a construção de interfaces de usuário ricas e intuitivas tanto no terminal quanto na web.

✨ Funcionalidades em Destaque
API Backend (Node.js com Express.js)
Servidor leve e eficiente que atua como intermediário seguro para as requisições à API oficial do GitHub.
Gerencia as credenciais (GitHub Personal Access Token) de forma segura através de variáveis de ambiente (.env).
Oferece um endpoint de busca (/search/repos) para pesquisar repositórios de maneira otimizada.
CLI (Command Line Interface com Node.js)
Ferramenta interativa para pesquisar repositórios diretamente do seu terminal.
Utiliza enquirer para prompts dinâmicos e chalk para estilização e cores vibrantes no console, proporcionando uma experiência de usuário envolvente.
Frontend Web (React.js com Vite)
Interface web intuitiva e responsiva para pesquisar e visualizar os resultados dos repositórios GitHub.
Construída com React.js para uma experiência de usuário dinâmica e o Vite para um ambiente de desenvolvimento rápido e moderno.
Comunica-se diretamente com a API de backend para obter e exibir os dados.
🛠️ Tecnologias Utilizadas
O GitPes foi construído com as seguintes tecnologias e bibliotecas:

Backend:
Node.js: Ambiente de execução JavaScript.
Express.js: Framework web para Node.js.
got: Cliente HTTP para Node.js.
dotenv: Para carregar variáveis de ambiente de um arquivo .env.
cors: Middleware para habilitar o CORS.
CLI:
Node.js: Ambiente de execução JavaScript.
enquirer: Biblioteca para prompts de linha de comando interativos.
chalk: Biblioteca para colorir o texto do terminal.
got: Cliente HTTP para Node.js.
Frontend:
React.js: Biblioteca JavaScript para construção de interfaces de usuário.
Vite: Ferramenta de build de frontend moderna e rápida.
Outros:
Git: Sistema de controle de versão.
GitHub API: API oficial do GitHub para acesso a dados.
🚀 Como Rodar o Projeto Localmente
Siga estas instruções detalhadas para configurar e executar todas as partes do projeto em sua máquina local.

1. Pré-requisitos
Certifique-se de ter o seguinte software instalado em seu sistema:

Node.js: Versão 18.x ou superior. Recomenda-se usar um gerenciador de versões como nvm (Node Version Manager) ou nvs (Node Version Switcher).
npm: O gerenciador de pacotes do Node.js (geralmente vem junto com a instalação do Node.js).
Git: Para clonar o repositório.
2. Clonar o Repositório
Abra seu terminal ou Prompt de Comando (CMD) e clone este repositório para o local desejado:

Bash

git clone https://github.com/kaua-stack/gitpes.git
cd gitpes
3. Configurar Variáveis de Ambiente
Para que sua API possa se comunicar com a API do GitHub, você precisará de um Personal Access Token (PAT) do GitHub.

Criar um PAT no GitHub:

Acesse as Configurações de Desenvolvedor do GitHub (escolha "Tokens clássicos").
Clique em "Generate new token (classic)".
Dê um nome descritivo para o token (ex: gitpes-api-token).
Marque apenas o escopo public_repo (ou repo se você planeja pesquisar seus próprios repositórios privados com este projeto).
⚠️ IMPORTANTE: Copie o token gerado IMEDIATAMENTE. Ele será exibido apenas uma vez!
Criar o arquivo .env:
Na raiz do projeto gitpes/ (onde você clonou), crie um novo arquivo chamado .env e adicione a seguinte linha, substituindo SEU_TOKEN_AQUI pelo token real que você acabou de gerar:

Snippet de código

GITHUB_TOKEN=ghp_SEU_TOKEN_AQUI
Lembre-se: O arquivo .env está configurado no .gitignore e NÃO DEVE SER ENVIADO PARA O GITHUB por questões de segurança.

4. Instalar Dependências
Ainda na raiz do projeto gitpes/, instale as dependências para todas as subpastas (API, CLI) e depois instale as dependências específicas do frontend:

Bash

npm install # Instala dependências da raiz (API e CLI)
cd web      # Navega para a pasta do frontend
npm install # Instala dependências do React (Vite)
cd ..       # Retorna para a raiz do projeto
5. Iniciar a API Backend (Primeiro Terminal)
Abra um novo terminal/CMD (deixe este rodando em segundo plano), navegue até a raiz do projeto e inicie o servidor Express:

Bash

npm run start:api
Você deverá ver a mensagem: Servidor Express rodando em: http://localhost:3000.
Para verificar se a API está online, abra seu navegador e acesse: http://localhost:3000/teste. Você deverá ver uma mensagem JSON de sucesso.

6. Rodar a CLI (Segundo Terminal)
Abra um terceiro terminal/CMD (diferente dos anteriores), navegue até a raiz do projeto. Para usar a CLI como um comando global no seu sistema (apenas na primeira vez):

Bash

npm link
Agora, você pode executar o comando da sua CLI:

Bash

gitpes
Siga os prompts interativos no terminal para realizar suas pesquisas.

7. Iniciar o Frontend Web (Terceiro Terminal)
Abra um quarto terminal/CMD (diferente dos anteriores), navegue até a raiz do projeto e inicie a aplicação React:

Bash

npm run start:web
O Vite iniciará o servidor de desenvolvimento do React. Ele indicará a URL onde a aplicação está rodando (geralmente http://localhost:5173/). Abra essa URL em seu navegador para interagir com a interface web.

🌐 Deploy (Colocando o Projeto Online)
Para disponibilizar seu projeto para o mundo, você precisará de serviços de hospedagem. Como é um projeto Full-Stack, você fará o deploy do Frontend e do Backend separadamente:

Frontend (React): Altamente recomendado usar plataformas como Vercel ou Netlify. Eles se integram facilmente com o GitHub.
Backend (Node.js/Express): Plataformas como Render ou Railway são excelentes escolhas.
Passos Cruciais para o Deploy:

Variáveis de Ambiente: No painel da sua plataforma de deploy do backend, você deve adicionar o seu GITHUB_TOKEN como uma variável de ambiente, assim como fez no .env local.
Atualizar a URL da API no Frontend: Após fazer o deploy do seu backend e obter a URL pública (ex: https://sua-api-gitpes.onrender.com), você precisará atualizar o arquivo web/src/App.jsx no seu projeto local:
JavaScript

// Altere esta linha no App.jsx:
const API_BASE_URL = 'http://localhost:3000';
// Para a URL pública da sua API:
const API_BASE_URL = 'https://sua-api-gitpes.onrender.com';
Depois de atualizar e salvar o App.jsx, faça um novo commit e push para o GitHub. Sua plataforma de deploy do frontend (Vercel/Netlify) detectará a mudança e fará o redeploy automaticamente.
🤝 Contribuições
Contribuições, sugestões e relatórios de bugs são sempre bem-vindos! Sinta-se à vontade para abrir uma Issue ou enviar um Pull Request.

