# 🏢 Gerenciador de Clientes

## 🔥 Introdução
Um sistema simples de gerenciamento de clientes, desenvolvido com **Fastify**, **Prisma** e **MongoDB**.

### 🎯 Funcionalidades
✔️ Cadastrar novos clientes
✔️ Listar clientes cadastrados
✔️ Excluir clientes

## 🚀 Tecnologias Utilizadas
- **Fastify** ⚡
- **TypeScript** 🟦
- **Prisma** 🛢️
- **MongoDB** 🏦
- **Fastify CORS** 🔐 

## 📂 Estrutura do Projeto
``` bash
 ┣ 📂 backend
 ┃ ┣ 📂 prisma
 ┃ ┗ schema.prisma
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 controllers
 ┃ ┃ ┣ 📜 CreateCustomerController.ts
 ┃ ┃ ┣ 📜 DeleteCustomerController.ts
 ┃ ┃ ┗ 📜 ListCustomerController.ts
 ┃ ┃ ┣ 📂 prisma
 ┃ ┃ ┃ ┗ 📜 index.ts
 ┃ ┃ ┣ 📂 services
 ┃ ┃ ┃ ┣ 📜 CreateCustomerService.ts
 ┃ ┃ ┃ ┣ 📜 DeleteCustomerService.ts
 ┃ ┃ ┃ ┗ 📜 ListCustomerService.ts
 ┃ ┃ ┣ 📜 routes.ts
 ┃ ┃ ┗ 📜 server.ts
 ┃ ┣ 📜 .gitignore
 ┃ ┣ 📜 api.http
 ┃ ┣ 📜 package.json
 ┃ ┣ 📜 package-lock.json
 ┃ ┣ 📜 README.md
 ┃ ┗ 📜 tsconfig.json

```

## 🛠️ Como Executar o Projeto

1️⃣ Clone o repositório

```bash
 git clone https://github.com/tatyanepgoncalves/gerenciador_clientes_back.git
```

2️⃣ Instale as dependências

```bash
cd gerenciador_clientes_back
npm install  # ou yarn install
```

3️⃣ Configure a API Backend
Certifique-se de que a API está rodando localmente na porta `3333`.

4️⃣ Inicie o projeto
```bash
npm run dev # ou yarn dev
```

## 🌍 API Endpoints Utilizados
- `GET /customers` -> Lista todos os clientes
- `POST /customer` -> Adiciona um novo cliente
- `DELETE /customer/:id` -> Remove um cliente pelo ID


## 

🚀 Desenvolvido por [@tatyanepgoncalves](https://github.com/tatyanepgoncalves)