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
Para acessar localmente, rode `npx decap-server` na pasta raiz junto com o `npm run dev`.

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
