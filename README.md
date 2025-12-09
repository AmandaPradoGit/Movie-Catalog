# 🎬 Projeto de Filmes – Next.js + TailwindCSS

Este projeto exibe filmes da API TMDB com React.js + Next.js + TailwindCSS + TanStack.

---
## Funcionalidades
- Tela inicial com listagem de filmes em alta e melhores avaliados
- Tela de exibição de detalhes dos filmes e sugestão de semelhantes
- Tela de busca de filmes

## Pré-requisitos

Antes de começar, instale:

- [Node.js](https://nodejs.org/)
- Gere uma chave de API em: https://www.themoviedb.org/login

## Instalação das dependências
- npm install<br><br>

  Tailwind:<br>
- npm install -D tailwindcss postcss autoprefixer<br>
- npx tailwindcss init -p<br><br>
  
  TanStack Query<br>
- npm install @tanstack/react-query


## Configurar variáveis de ambiente
- Crie um arquivo .env.local na raiz do projeto:
- Adicione sua chave da API do TMDB:
NEXT_PUBLIC_TMDB_API_KEY=SUA_API_KEY_AQUI

## Rodar o Projeto
- npm run dev <br>
-acesso em http://localhost:3000
