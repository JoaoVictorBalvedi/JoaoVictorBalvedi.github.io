# Portfolio

Site pessoal estático (HTML + CSS + JS puro, sem build), pronto para GitHub Pages.

## Estrutura

| Arquivo      | O que é                                                        |
|--------------|----------------------------------------------------------------|
| `data.js`    | **Todo o conteúdo** (sobre, experiências, projetos, pessoal…). |
| `index.html` | Estrutura das seções.                                          |
| `style.css`  | Visual (cores e fontes nos tokens do topo do arquivo).         |
| `main.js`    | Renderização, filtros, tema claro/escuro e a arte do topo.     |
| `assets/img` | Imagens dos projetos (preview ao passar o mouse).              |

## Como editar

Abra `data.js` e substitua os `[FILL IN]` / `[PREENCHER]`. Para adicionar um projeto ou experiência,
copie um objeto da lista. No `headline` e nas descrições, `*texto*` vira itálico destacado.

O site é bilíngue: inglês por padrão, com botão `EN/PT` no topo (a escolha fica salva, e
`?lang=pt` na URL abre direto em português). Textos traduzidos usam `{ en: "...", pt: "..." }`;
um texto simples aparece igual nos dois idiomas. Os textos fixos da interface ficam em `UI`, no `main.js`.

## Rodar localmente

Abra `index.html` no navegador, ou rode `python -m http.server` e acesse `localhost:8000`.

## Publicar no GitHub Pages

1. Crie um repositório chamado `SEU-USUARIO.github.io`.
2. Suba estes arquivos na branch `main`.
3. Em **Settings → Pages**, escolha `Deploy from a branch` → `main` / `(root)`.
4. O site fica em `https://SEU-USUARIO.github.io`.
