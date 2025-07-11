# NexEdu API

API simples para gerenciamento de posts educacionais.

## Tecnologias

- Node.js + TypeScript
- Express.js
- Prisma ORM
- PostgreSQL

## Como usar

```bash
# Instalar dependências
npm install

# Configurar banco (.env)
DATABASE_URL="postgresql://user:pass@localhost:5432/nexedu"

# Executar migrações
npx prisma migrate dev

# Iniciar servidor
npm run dev
```

## Endpoints

```
GET    /              # Teste da API
GET    /posts         # Listar posts
GET    /posts/:id     # Buscar por ID
GET    /posts/search?q=termo  # Buscar por termo
POST   /posts         # Criar post
PUT    /posts/:id     # Atualizar post
DELETE /posts/:id     # Deletar post
```

## Modelo de Dados

```json
{
  "id": 1,
  "Title": "Título do post",
  "Content": "Conteúdo do post",
  "Author": "Nome do autor"
}
```

## Testes

Use o arquivo `test-requests.http` com a extensão REST Client do VS Code.

---
Desenvolvido pela Equipe NexEdu
