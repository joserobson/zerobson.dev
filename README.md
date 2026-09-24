# Site Pessoal - Desenvolvedor Full Stack

Site pessoal profissional desenvolvido com Next.js, TypeScript e Tailwind CSS.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **MDX** - Markdown com componentes React para o blog
- **Lucide React** - Ícones modernos

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 13+)
│   ├── page.tsx           # Página inicial
│   ├── curriculo/         # Página de currículo
│   ├── blog/              # Blog e posts individuais
│   └── layout.tsx         # Layout principal
├── components/            # Componentes reutilizáveis
│   ├── Header.tsx         # Navegação
│   ├── Footer.tsx         # Rodapé
│   └── TechStack.tsx      # Seção de tecnologias
├── content/blog/          # Posts do blog em MDX
├── lib/                   # Utilitários
│   └── blog.ts           # Funções para gerenciar posts
└── styles/               # Estilos globais
```

## 🎨 Funcionalidades

### Página Inicial
- Hero section com apresentação pessoal
- Seção "Sobre Mim" com destaque para especialidades
- Stack tecnológica organizada por categorias
- Call-to-action para contato

### Currículo
- Informações de contato e links profissionais
- Experiência profissional detalhada
- Habilidades técnicas com níveis de proficiência
- Formação acadêmica e certificações
- Projetos destacados

### Blog Técnico
- Sistema de posts em MDX
- Listagem com filtros por tags
- Páginas individuais para cada post
- Metadados para SEO
- Design responsivo

## 📝 Adicionando Novos Posts

1. Crie um arquivo `.mdx` em `src/content/blog/`
2. Adicione o frontmatter com metadados:

```mdx
---
title: "Título do Post"
date: "2024-01-15"
excerpt: "Resumo do post..."
tags: ["Angular", ".NET", "TypeScript"]
---

# Conteúdo do post em Markdown
```

## 🛠️ Desenvolvimento

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start
```

## 📱 Design Responsivo

O site é totalmente responsivo com:
- Layout mobile-first
- Navegação adaptável
- Componentes flexíveis
- Tipografia escalável

## 🚀 Deploy

O site pode ser facilmente deployado em:
- **Vercel** (recomendado para Next.js)
- **Netlify**
- O deploy requer runtime Next.js/Node.js para ISR e o endpoint de revalidação.

### Deploy na Vercel
```bash
npm install -g vercel
vercel
```

### Currículo dinâmico (SPEC-098)

Configure no servidor `RESUME_API_BASE_URL` com a origem absoluta do backend. O frontend faz `GET /api/profile/resume` nessa origem; a resposta deve ser um objeto JSON com a estrutura de `src/data/resume-en.json` (basics, experience, skills, education, certifications e projects opcional). Sem configuração, com erro HTTP/rede, timeout de 5 segundos ou resposta inválida, as páginas usam esse JSON local em inglês.

As páginas `/` e `/resume` compartilham cache com a tag `resume`, atualizado a cada hora. Configure `RESUME_REVALIDATION_SECRET` pelo gerenciador de segredos do deploy, sem versionar seu valor. Para invalidar o cache após atualizar o backend, envie `POST /api/resume/revalidate/` com o cabeçalho `Authorization: Bearer ${RESUME_REVALIDATION_SECRET}`. A barra final segue a configuração `trailingSlash` do projeto. O endpoint retorna 200 após invalidar os dados e ambas as páginas; a regeneração é disparada no próximo acesso e pode servir a versão anterior enquanto termina. Credenciais inválidas retornam 401 e segredo não configurado retorna 503.

O Netlify deve usar sua integração Next.js e publicar `.next`; hospedagem apenas estática não suporta essa funcionalidade. Localmente, execute `npm run build` seguido de `npm start`. O script legado `npm run export` também gera um build Next.js, sem exportação estática.

Execute `npm test` para validar consumo, fallback e autenticação/revalidação. Após `npm run build`, execute também `npm run test:integration` para validar as duas páginas e a revalidação em um servidor de produção com backend simulado. Os testes geram as credenciais dinamicamente.

## 📊 SEO e Performance

- Metadados otimizados
- Open Graph tags
- Sitemap automático
- Imagens otimizadas
- Lazy loading
- Service Worker (PWA ready)

## 🎯 Personalização

Para personalizar o site:

1. **Informações Pessoais**: Edite os componentes em `src/components/`
2. **Cores e Tema**: Modifique `tailwind.config.js`
3. **Conteúdo**: Atualize as páginas em `src/app/`
4. **Blog**: Adicione posts em `src/content/blog/`

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.