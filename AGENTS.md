# AGENTS.md – Guia para o Codex atuar no **audace-website**

> Este arquivo é lido antes de **cada tarefa** que o Codex executa.  
> Mantenha-o conciso, prescritivo e atualizado.

---

## 1. Objetivo do projeto

Site estático institucional da **Audace** (branding & marketing) feito em **HTML + SCSS + JS vanilla**.  
O foco é performance, acessibilidade AA e design elegante responsivo.

### Metas-chave
- **Pagespeed** ≥ 90 em todos os eixos (Desktop & Mobile)  
- **CLS ≤ 0.1** e **LCP ≤ 2.5 s**  
- Código claro, **sem** dependências JS pesadas  

---

## 2. Estrutura de pastas (referência)

```text
audace-website/
├── public/                # imagens, favicon
├── assets/
│   └── styles/            # SCSS/CSS
├── js/                    # scripts JS puros
├── .github/workflows/     # CI/CD GitHub Pages
│   └── deploy.yml
├── *.html                 # páginas estáticas
└── README.md / AGENTS.md
```

---

## 3. Build & Preview

| Tarefa          | Comando                                                                           |
| --------------- | --------------------------------------------------------------------------------- |
| Servidor local  | `python3 -m http.server --directory .`                                            |
| Compilar SCSS   | `sass assets/styles/main.scss assets/styles/main.css --style=compressed`          |
| Watch SCSS      | `sass assets/styles/main.scss assets/styles/main.css --watch`                     |
| Lighthouse CI   | `npx @lhci/cli collect && npx @lhci/cli upload --target=temporary-public-storage` |

### Requisitos de build
- Usar **Dart Sass** (já instalado na VM padrão)  
- **Não** adicionar bundlers (Webpack, Vite) sem aprovação prévia  

---

## 4. Testes & Qualidade
- Execute **HTMLHint**, **Stylelint** (SCSS) e **ESLint** (JS) antes de abrir PR.  
- Rumo a **cobertura 80 %** em testes unitários JS (vitest).  
- Inclua resultado **Lighthouse** no comentário do PR (`lhci autorun`).  

---

## 5. Convenções de código
- **HTML**: semântico; usar **BEM** para classes.  
- **SCSS**: variables, mixins, *nesting* máximo de 3 níveis.  
- **JavaScript**: módulos ES6 (`type="module"`), **sem jQuery**.  
- Formate com **Prettier** (80 cols, `tabWidth 2`).  

---

## 6. Ferramentas disponíveis ao agente

```jsonc
{
  "tools": [
    { "type": "code_interpreter" },
    {
      "type": "mcp",
      "server_label": "unsplash",
      "server_url": "https://unsplash.mcp.serp.ai"
    }
  ]
}
```

- Use **code_interpreter** para tarefas rápidas (minificar CSS, gerar sprites, calcular métricas).  
- Use **unsplash** para buscar e baixar imagens livres (ex.: hero, cases).  
  Salvar em `public/images/`.  

---

## 7. Processo de Pull Request
1. **Crie branch** `feature/<slug>`  
2. Garanta que `npm run lint && npm test` passam (quando aplicável)  
3. Anexe o reporte Lighthouse no PR.  
4. Marque reviewer **@robertoah13**.  

### Política de commits (Conventional Commits)
`feat:`, `fix:`, `chore:`, `style:`, etc.  

---

## 8. Roadmap sugerido (para dividir micro-tarefas)

1. **Refatorar CSS → SCSS completo** (variáveis de cor, mixins de *breakpoints*)  
2. **Menu mobile acessível** (`aria-expanded`; foco trap)  
3. **HeroCarousel** com imagens Unsplash  
4. **Página Cases** em grid Masonry animado  
5. **Formulário de Contato** – validação frontend & reCAPTCHA  
6. **CI/CD**: adicionar **LHCI** e **HTMLHint** passo a passo  

> **Sempre** descreva brevemente no PR como cada requisito acima foi atendido.

---

## 9. Variáveis de ambiente (exemplo)

```env
# .env.example
FORM_ENDPOINT="https://formspree.io/f/xxxxxxxx"
```

---

## 10. Glossário

| Termo    | Significado                       |
| -------- | --------------------------------- |
| **CLS**  | Cumulative Layout Shift           |
| **LCP**  | Largest Contentful Paint          |
| **LHCI** | Lighthouse Continuous Integration |

---

> Atualize este arquivo se o stack ou processos mudarem.  
> Mantenha-o **≤ 200 linhas**.
