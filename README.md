# NexEdu A### Como Usar

```bash
# Build Docker automático no push para main
git push origin main

# Deploy de desenvolvimento
git push origin develop

# Release com versioning
git tag v1.0.0 && git push origin v1.0.0
```

> 🐳 **Docker-first!** Tudo é testado e empacotado em containers para máxima portabilidade.

**📖 Documentação completa**: [GitHub Actions Guide](.github/ACTIONS.md)  
**⚡ Configuração rápida**: [Setup Guide](.github/SETUP.md)  
**🐳 Deploy com Docker**: [Docker Deployment Guide](DOCKER-DEPLOY.md)ara gerenciamento de posts educacionais.

## Tecnologias

- Node.js + TypeScript
- Express.js
- Prisma ORM

### Como Funciona

```bash
# Dispara testes + build + push para Docker Hub
git push origin main

# Dispara apenas testes (não faz push)
git push origin develop

# Cria release automático com changelog e assets
git tag v1.0.0 
git push origin v1.0.0
```

### Criando Releases

Para criar uma nova release:

```bash
# 1. Faça suas mudanças e commits
git add .
git commit -m "feat: nova funcionalidade"

# 2. Crie e push a tag
git tag v1.2.0
git push origin v1.2.0

# 3. O workflow automaticamente:
#    - Gera changelog dos commits
#    - Cria release no GitHub
#    - Anexa arquivos de deploy
#    - Documenta como usar a versão
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

## 🔄 CI/CD com GitHub Actions

Este projeto utiliza GitHub Actions para automação completa com Docker.

### Workflows Configurados

**🐳 Docker Build and Push** (`main.yml`):
- **Triggers**: Push para `main`/`develop`, tags `v*`, pull requests
- **Test Phase**: Testes automatizados com Docker + PostgreSQL
- **Build Phase**: Build multi-arquitetura (linux/amd64, linux/arm64)
- **Push Phase**: Upload automático para Docker Hub
- **Artifacts**: Gera arquivos de deployment para produção

**🚀 Create Release** (`release.yml`):
- **Triggers**: Tags `v*` (ex: v1.0.0, v2.1.3)
- **Auto Changelog**: Gera changelog baseado nos commits
- **Release Assets**: Inclui docker-compose.prod.yml, deploy.sh, .env.example
- **GitHub Release**: Cria release automático com documentação

### Status dos Pipelines

![Docker Build and Push](https://github.com/jessicaMarquess/NexEdu/workflows/Docker%20Build%20and%20Push/badge.svg)
![Create Release](https://github.com/jessicaMarquess/NexEdu/workflows/Create%20Release/badge.svg)

## Testes

Use o arquivo `test-requests.http` com a extensão REST Client do VS Code.

---

Desenvolvido pela Equipe NexEdu
