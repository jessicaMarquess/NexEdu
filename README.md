# NexEdu API

API simples para gerenciamento de posts educacionais.

## Tecnologias

- Node.js + TypeScript
- Express.js
- Prisma ORM
### Como Usar

```bash
# Testes automáticos e build no push para main
git push origin main

# Apenas testes no push para develop  
git push origin develop

# Criar release (opcional)
git tag v1.0.0 && git push origin v1.0.0
```

> 💡 **Focado em qualidade!** O CI/CD valida código, roda testes e prepara builds sem deploy automático.

**📖 Documentação completa**: [GitHub Actions Guide](.github/ACTIONS.md)  
**⚡ Configuração rápida**: [Setup Guide](.github/SETUP.md)cker & Docker Compose

## Como usar

### 🐳 Opção 1: Usando Docker (Recomendado)

A forma mais fácil de executar o projeto é usando Docker:

```bash
# Clone o repositório
git clone https://github.com/Rafacolacio/NexEdu.git
cd NexEdu

# Copie o arquivo de ambiente
cp .env.example .env

# Inicie todos os serviços (API + PostgreSQL)
docker-compose up -d

# Visualizar logs em tempo real
docker-compose logs -f api
```

A API estará disponível em `http://localhost:3000` e o PostgreSQL na porta `5433`.

#### Comandos Docker úteis:

```bash
# Parar todos os serviços
docker-compose down

# Rebuildar e iniciar (após mudanças no código)
docker-compose up --build -d

# Modo desenvolvimento (com hot reload)
docker-compose --profile dev up -d

# Ver logs de um serviço específico
docker-compose logs -f api
docker-compose logs -f postgres

# Acessar o container da API
docker exec -it nexedu-api sh
```

### 💻 Opção 2: Executar Localmente

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

## Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` baseado no `.env.example`:

```env
# Configuração do Banco de Dados
DATABASE_URL="postgresql://nexedu:nexedu123@localhost:5433/nexedu_db"

# Configuração da API
PORT=3000
NODE_ENV=development
```

### Acessos (Docker)

- **API**: http://localhost:3000
- **API (dev)**: http://localhost:3001 (quando executado em modo dev)
- **PostgreSQL**: localhost:5433
  - **Usuário**: nexedu
  - **Senha**: nexedu123
  - **Database**: nexedu_db

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

## 🔄 CI com GitHub Actions

Este projeto utiliza GitHub Actions para automação de qualidade de código:

### Workflows Configurados

- **🧪 CI Pipeline**: Testes automáticos e build validation
- **🔍 Pull Request Checks**: Análise de qualidade de código em PRs
- **🚀 Releases**: Criação automática de releases e tags
- **🔒 Security Checks**: Verificações de segurança semanais

### Status Badges

![CI](https://github.com/Rafacolacio/NexEdu/workflows/CI%20Pipeline/badge.svg)
![Security](https://github.com/Rafacolacio/NexEdu/workflows/Security%20Checks/badge.svg)

### Como Usar

```bash
# Build e testes automáticos no push para main
git push origin main

# Apenas testes no push para develop
git push origin develop

# Criar release (opcional)
git tag v1.0.0 && git push origin v1.0.0
```

> 💡 **Zero configuração necessária!** O CI/CD funciona imediatamente sem Docker Hub ou secrets.

**📖 Documentação completa**: [GitHub Actions Guide](.github/ACTIONS.md)  
**⚡ Configuração rápida**: [Setup Guide](.github/SETUP.md)

## Testes

Use o arquivo `test-requests.http` com a extensão REST Client do VS Code.

---

Desenvolvido pela Equipe NexEdu
