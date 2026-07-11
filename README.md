# 🚀 CRUD de Tarefas API

Uma API RESTful desenvolvida do absoluto zero utilizando **Node.js puro** (sem frameworks como Express).

## 🧠 Conceitos Aplicados
- Arquitetura HTTP (Criação do Servidor, Status Codes, Request/Response).
- Streams e Buffers (Processamento de requisições POST/PUT em pedaços).
- Regex e manipuladores nativos (`URL`) para Query Params e Route Params.
- Persistência de dados físicos no disco usando o módulo `node:fs`.

## 🛠️ Como rodar o projeto

1. Clone o repositório.
2. Não é necessário instalar nenhuma dependência, o projeto roda apenas com a biblioteca padrão do Node.js.
3. No terminal, inicie o servidor:
   npm start
4. A API estará escutando na porta `http://localhost:3000`.

## 📌 Rotas da API

| Método | Rota | Descrição |
|---|---|---|
| `POST` | `/tasks` | Cria uma nova tarefa (Requer `titulo` e `descricao` no Body JSON) |
| `GET` | `/tasks` | Lista as tarefas (Aceita o filtro `?search=`) |
| `PUT` | `/tasks/:id` | Atualiza o título e descrição de uma tarefa |
| `PATCH`| `/tasks/:id/complete` | Marca a tarefa como concluída |
| `DELETE`| `/tasks/:id` | Exclui a tarefa do banco de dados |
