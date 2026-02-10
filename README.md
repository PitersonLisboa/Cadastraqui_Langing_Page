# 🎓 Cadastraqui — Landing Page

Landing page institucional B2B da plataforma **Cadastraqui**, sistema de gestão CEBAS e governança de bolsas de estudo, em conformidade com a Lei Complementar nº 187/2021 e Portaria 15/2017.

## 📋 Visão Geral

Esta aplicação serve como portal de entrada do ecossistema Cadastraqui:

| URL | Serviço | Descrição |
|-----|---------|-----------|
| `www.cadastraqui.net.br` | **Landing Page** (este repositório) | Página institucional e comercial |
| `www.cadastraqui.net.br/PUCMinas` | **Plataforma** (repositório separado) | Sistema de gestão de bolsas |

O botão **"Acessar a plataforma"** na landing page redireciona para a plataforma através da variável de ambiente `VITE_PORTAL_URL`.

## 🛠️ Stack Tecnológica

- **React 18** + **TypeScript**
- **Vite 5** (build e dev server)
- **Tailwind CSS 3** + **shadcn/ui** (componentes)
- **Framer Motion** (animações)
- **Wouter** (roteamento SPA)
- **Express** (servidor de produção para arquivos estáticos)

## 📁 Estrutura do Projeto

```
├── attached_assets/          # Imagens e assets da landing page
├── client/
│   ├── index.html            # HTML base
│   ├── public/               # Favicon e assets estáticos
│   └── src/
│       ├── components/       # Componentes React da landing page
│       │   ├── ui/           # Componentes shadcn/ui
│       │   ├── HeaderB2B.tsx  # Navegação principal
│       │   ├── HeroB2B.tsx    # Seção hero
│       │   ├── StatsBar.tsx   # Barra de estatísticas
│       │   └── ...            # Demais seções
│       ├── hooks/            # Hooks customizados
│       ├── lib/              # Utilitários (cn, WhatsApp, queryClient)
│       ├── pages/            # Páginas (Home, 404)
│       ├── App.tsx           # Componente raiz com roteamento
│       └── main.tsx          # Entry point
├── server/
│   └── index.ts              # Servidor Express para produção
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── .env.example
```

## ⚙️ Variáveis de Ambiente

Copie o arquivo `.env.example` para `.env` e configure:

```env
# URL da plataforma CADASTRAQUI (botão "Acessar a plataforma")
VITE_PORTAL_URL=https://www.cadastraqui.net.br/PUCMinas

# Número do WhatsApp para contato comercial (com DDI, sem +)
VITE_PHONE_CONTACT=5531999999999

# Porta do servidor (Railway define automaticamente)
PORT=3000
```

> **Nota:** Variáveis com prefixo `VITE_` são embutidas no build pelo Vite. Qualquer alteração nelas exige um novo build.

## 🚀 Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O dev server estará disponível em `http://localhost:5173`.

## 📦 Build e Produção

```bash
# Gerar build de produção
npm run build

# Iniciar servidor de produção
npm start
```

O comando `build` executa dois passos:
1. `vite build` — compila o frontend React em `dist/public/`
2. `esbuild` — compila o servidor Express em `dist/index.js`

O comando `start` inicia o servidor Express que serve os arquivos estáticos e faz fallback SPA (todas as rotas retornam `index.html`).

## 🚂 Deploy no Railway

### 1. Preparar o repositório

```bash
git init
git add .
git commit -m "Initial commit - Landing page Cadastraqui"
git remote add origin https://github.com/seu-usuario/cadastraqui-landing-page.git
git push -u origin main
```

### 2. Criar o serviço no Railway

1. Acesse [railway.app](https://railway.app) e crie um novo projeto (ou use o projeto existente do Cadastraqui)
2. Clique em **"New Service"** → **"GitHub Repo"** → selecione o repositório
3. O Railway detecta automaticamente os scripts `build` e `start` do `package.json`

### 3. Configurar variáveis de ambiente

No painel do serviço, vá em **Variables** e adicione:

| Variável | Valor |
|----------|-------|
| `VITE_PORTAL_URL` | `https://www.cadastraqui.net.br/PUCMinas` |
| `VITE_PHONE_CONTACT` | `5531XXXXXXXXX` |
| `NODE_ENV` | `production` |

> A variável `PORT` é definida automaticamente pelo Railway.

### 4. Configurar domínio customizado

No painel do serviço, vá em **Settings** → **Networking** → **Public Networking**:

1. Adicione o domínio `www.cadastraqui.net.br`
2. Configure o DNS do seu domínio com o CNAME fornecido pelo Railway

### 5. Roteamento por path (dois serviços no mesmo domínio)

Para que a landing page e a plataforma coexistam em `www.cadastraqui.net.br`:

- **Serviço da Plataforma**: configure path prefix `/PUCMinas`
- **Serviço da Landing Page**: configure path prefix `/` (fallback)

Ambos os serviços devem estar no mesmo projeto Railway.

## 🔧 Seções da Landing Page

| Componente | Seção |
|------------|-------|
| `HeroB2B` | Banner principal com CTA |
| `StatsBar` | Números e métricas da plataforma |
| `AISelectionProcess` | Processo de seleção com IA |
| `CEBASOnboarding` | Fluxo de onboarding CEBAS |
| `BenefitsCEBAS` | Benefícios da certificação |
| `DataComplianceAlert` | Alerta de conformidade de dados |
| `CoreFeatures` | Funcionalidades principais |
| `ComplianceSection` | Compliance e governança |
| `CaseStudies` | Casos de uso e depoimentos |
| `PricingSection` | Planos e preços |
| `FAQB2B` | Perguntas frequentes |
| `FinalCTA` | CTA final |

## 📄 Licença

MIT — RW Engenharia
