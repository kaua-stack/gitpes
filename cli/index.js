#!/usr/bin/env node

// Importa as bibliotecas que vamos usar:
import enquirer from "enquirer"; // CORRIGIDO: Importa o objeto padrão exportado
const { prompt } = enquirer; // CORRIGIDO: Desestrutura para obter a função 'prompt'

import chalk from "chalk"; // Para colorir o texto no terminal
import got from "got"; // Para fazer requisições HTTP à nossa API (e, se for o caso, à do GitHub)

// Define a URL base da nossa API Express que criamos.
const API_BASE_URL = "http://localhost:3000";

// Função principal da CLI
async function runCli() {
  console.clear();
  console.log(chalk.bold.blue("🚀 Bem-vindo ao GitPes CLI! 🚀"));
  console.log(
    chalk.gray("Sua ferramenta para encontrar repositórios no GitHub.\n")
  );

  try {
    const response = await prompt({
      type: "input",
      name: "searchTerm",
      message: chalk.yellow("Qual repositório você está procurando no GitHub?"),
      validate: (value) =>
        value.length > 0 ? true : "Por favor, digite um termo de busca.",
    });

    const { searchTerm } = response;

    if (!searchTerm) {
      console.log(chalk.red("\n🚫 Nenhuma busca informada. Saindo..."));
      return;
    }

    console.log(
      chalk.cyan(`\n🔍 Buscando repositórios para: "${searchTerm}"...`)
    );

    const githubRepos = await got(`${API_BASE_URL}/search/repos`, {
      searchParams: { q: searchTerm },
      responseType: "json",
    }).json();

    if (githubRepos && githubRepos.length > 0) {
      console.log(chalk.green("\n✅ Repositórios encontrados:"));
      githubRepos.forEach((repo) => {
        console.log(chalk.whiteBright(`\n${chalk.bold(repo.name)}`));
        console.log(chalk.grey(`  ${repo.description || "Sem descrição."}`));
        console.log(
          chalk.magenta(
            `  Stars: ${repo.stargazers_count} ⭐ | Language: ${
              repo.language || "N/A"
            }`
          )
        );
        console.log(chalk.blue(`  URL: ${repo.html_url}`));
        console.log(chalk.dim("---"));
      });
    } else {
      console.log(
        chalk.yellow(
          "\n😔 Nenhum repositório encontrado para este termo de busca."
        )
      );
    }
  } catch (error) {
    console.error(chalk.red("\n❌ Ocorreu um erro ao buscar os repositórios:"));
    if (error.response) {
      console.error(chalk.red(`  Status: ${error.response.statusCode}`));
      console.error(
        chalk.red(
          `  Mensagem: ${
            error.response.body.error ||
            error.response.body.message ||
            "Erro desconhecido."
          }`
        )
      );
    } else {
      console.error(chalk.red(`  ${error.message}`));
    }
    console.log(
      chalk.yellow(
        "Verifique se sua API Express está rodando (npm run start:api) e seu token do GitHub está configurado no .env."
      )
    );
  } finally {
    console.log(chalk.bold.green("\n--- GitPes CLI finalizado. ---\n"));
  }
}

runCli();
