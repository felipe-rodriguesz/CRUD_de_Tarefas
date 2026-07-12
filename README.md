# 🚀 CRUD de Tarefas API

![Demonstração da API](./print.png)

Uma API RESTful desenvolvida do absoluto zero utilizando **Node.js puro** (sem frameworks como Express).

## 🧠 Conceitos Aplicados
- **Arquitetura Modular**: Separação de responsabilidades com padrão de Roteamento (Controllers) e Middlewares.
- **Streams e Buffers**: Processamento de requisições assíncronas em pedaços para lidar com o Body.
- **Regex Dinâmico**: Conversão automática de strings (ex: `/tasks/:id`) em Expressões Regulares de captura para os Route Params.
- **File System (fs/promises)**: Persistência de dados física criando um banco de dados local em formato JSON.

## 🛠️ Como rodar o projeto

1. Clone o repositório.
2. Não é necessário instalar nenhuma dependência, o projeto roda apenas com a biblioteca padrão do Node.js.
3. No terminal, inicie o servidor:
   ```bash
   npm start
   ```
4. A API estará escutando na porta `http://localhost:3000`.

*(Dica: Você pode importar o arquivo `insomnia.json` presente neste repositório diretamente no seu aplicativo Insomnia para ter todas as rotas já configuradas!)*

## 📌 Rotas e Exemplos de Requisição

### 1. Criar Tarefa (`POST /tasks`)
**Corpo da requisição (JSON):**
```json
{
  "titulo": "Estudar Node.js",
  "descricao": "Revisar os conceitos de File System e HTTP"
}
```

### 2. Listar Tarefas (`GET /tasks`)
Pode receber parâmetros de busca opcionais, como: `/tasks?search=Node`

### 3. Atualizar Tarefa Completa (`PUT /tasks/:id`)
**Corpo da requisição (JSON):**
```json
{
  "titulo": "Estudar Node.js Avançado",
  "descricao": "Aprender sobre Streams e Buffers"
}
```

### 4. Marcar Tarefa como Concluída (`PATCH /tasks/:id/complete`)
Não requer corpo na requisição. Apenas o ID na URL.

### 5. Deletar Tarefa (`DELETE /tasks/:id`)
Não requer corpo na requisição. Apenas o ID na URL.
