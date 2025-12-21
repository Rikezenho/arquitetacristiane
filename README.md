# Arquiteta Cristiane David - Landing Page

Landing page para arquiteta de interiores Cristiane David, desenvolvida com Astro e integrada com Decap CMS.

## 🚀 Funcionalidades

- ✨ Site estático gerado com Astro
- 📝 Gerenciamento de conteúdo com Decap CMS
- 🎨 Design responsivo com Tailwind CSS
- 📱 Totalmente responsivo
- 🖼️ Galeria de projetos
- 📧 Seção de contato e redes sociais

## 📋 Estrutura do Projeto

```
/
├── public/
│   ├── admin/           # Decap CMS admin
│   │   ├── index.html
│   │   └── config.yml
│   ├── images/          # Imagens estáticas
│   └── favicon.svg
├── src/
│   ├── components/      # Componentes Astro
│   │   ├── Hero.astro
│   │   ├── HighlightedProjects.astro
│   │   ├── Services.astro
│   │   └── Contact.astro
│   ├── content/         # Conteúdo gerenciado pelo CMS
│   │   ├── projects/    # Projetos markdown
│   │   ├── services/    # Serviços markdown
│   │   ├── settings/    # Configurações JSON
│   │   └── config.ts    # Schema do conteúdo
│   ├── layouts/
│   │   └── Layout.astro # Layout principal
│   └── pages/
│       ├── index.astro  # Home page
│       └── projetos/    # Páginas de projetos
└── package.json
```

## 🛠️ Instalação e Uso

### 1. Instalar dependências

```bash
npm install
```

### 2. Executar em desenvolvimento

```bash
npm run dev
```

O site estará disponível em `http://localhost:4321`

### 3. Build para produção

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`

### 4. Preview da build

```bash
npm run preview
```

## 📝 Configuração do Decap CMS

### Acesso ao CMS

Após o deploy, acesse: `https://seu-dominio.com/admin/`

### Autenticação

O Decap CMS está configurado para usar **Git Gateway** com **Netlify Identity**. Para configurar:

1. Faça deploy no Netlify
2. Ative o **Netlify Identity** nas configurações do site
3. Ative o **Git Gateway** nas configurações do Identity
4. Convide usuários para acessar o CMS

### Coleções Disponíveis

- **Configurações do Site**: Hero, redes sociais, contato
- **Projetos**: Portfólio de projetos com imagens e galeria
- **Serviços**: Descrição dos serviços oferecidos

## 🎨 Personalização

### Cores

As cores primárias podem ser alteradas em `tailwind.config.mjs`:

```js
colors: {
  primary: {
    // Seus tons personalizados
  }
}
```

### Conteúdo

Todo o conteúdo pode ser editado através do Decap CMS em `/admin/` ou diretamente nos arquivos markdown em `src/content/`.

## 📦 Deploy

### Netlify (Recomendado)

1. Conecte seu repositório GitHub ao Netlify
2. Configure o build:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Ative Netlify Identity
4. Ative Git Gateway

### Vercel

1. Conecte seu repositório ao Vercel
2. A configuração será detectada automaticamente
3. Para o CMS, você precisará configurar OAuth do GitHub manualmente

## 🔄 Workflow de Atualização de Conteúdo

1. Acesse o CMS em `/admin/`
2. Faça login com Netlify Identity
3. Edite/Adicione conteúdo
4. Salve as alterações (commit automático no GitHub)
5. O deploy é acionado automaticamente
6. Site atualizado em minutos

## 📄 Licença

Este projeto foi desenvolvido para Cristiane David.

## 👤 Contato

Para suporte ou dúvidas sobre o projeto, entre em contato.
