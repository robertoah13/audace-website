# Audace Website

Este repositório contém o código-fonte do site estático da Audace, agência-boutique de branding, comunicação e marketing, desenvolvido com HTML5, CSS (SCSS) e JavaScript puros.

## Estrutura do projeto

```
audace-website/
├── public/                # pasta para imagens e favicon
├── assets/
│   └── styles/            # arquivos CSS/SCSS
├── js/                    # scripts JavaScript
├── .github/workflows/     # CI/CD para GitHub Pages
│   └── deploy.yml
├── index.html             # Página inicial
├── sobre.html             # Quem somos
├── servicos.html          # Serviços oferecidos
├── cases.html             # Portfólio de cases
└── contato.html           # Página de contato
```

## Tecnologias

- **HTML5** semântico e acessível.
- **SCSS/CSS3** modular, com variáveis e layout responsivo (mobile-first).
- **JavaScript** puro para navegação mobile e animações de entrada (IntersectionObserver).
- **Google Fonts** – Playfair Display para títulos e Inter para textos.
- **Font Awesome** para ícones.

## Rodando localmente

Clone ou baixe este repositório e abra `index.html` no seu navegador. Para um servidor local (recomendado), execute:

```bash
python3 -m http.server --directory .
```

e acesse `http://localhost:8000`.

## Comandos úteis

Para compilar o arquivo SCSS manualmente, utilize o [Dart Sass](https://sass-lang.com/install):

```bash
sass assets/styles/main.scss assets/styles/main.css --watch
```

Assim as alterações em `main.scss` serão refletidas automaticamente em `main.css`.

## Personalização

- **Cores e tipografia:** edite as variáveis em `assets/styles/main.css` (ou o SCSS equivalente) para alterar a paleta de cores ou fontes.
- **Novos cases e serviços:** modifique os arquivos HTML correspondentes adicionando novos cards seguindo o padrão existente.
- **Formulário de contato:** o formulário utiliza o [Formspree](https://formspree.io/) via atributo `action`. Altere o endpoint para o seu ID de formulário ou configure o atributo `netlify` para utilizar o Netlify Forms.

## Deploy

O workflow `deploy.yml` utiliza GitHub Actions para publicar o site na branch `gh-pages` através do GitHub Pages sempre que um push é realizado na branch `main`. Para habilitar:

1. No GitHub, vá em **Settings > Pages** e selecione a branch `gh-pages`.
2. Ajuste o campo de `source` e defina `/` como diretório de publicação.
3. Atualize o domínio personalizado, se necessário.

## Licença

Distribuído para fins educacionais.
