/* ==========================================================================
   CONTEÚDO DO SITE
   Edite apenas este arquivo para atualizar o portfolio.

   Textos bilíngues usam { en: "...", pt: "..." } — inglês é o idioma padrão.
   Um texto simples ("...") aparece igual nos dois idiomas.
   Use *asteriscos* para destacar um trecho em itálico.
   Datas: "AAAA-MM" (ex.: "2025-12") ou só "AAAA". "end" vazio = atual.
   Tudo marcado com [FILL IN] / [PREENCHER] é placeholder.
   ========================================================================== */

window.PORTFOLIO = {
  name: "João Victor Balvedi",
  shortName: "JV",
  role: { en: "Full Stack Developer", pt: "Desenvolvedor Full Stack" },
  headline: {
    en: "I build *digital products* — from the interface to the AI behind it.",
    pt: "Construo *produtos digitais* — da interface à IA por trás dela.",
  },
  lede: {
    en: "Full stack developer and Computer Science student. Currently building SaaS products at Tog Lab with React, Next.js, NestJS and AI-assisted workflows.",
    pt: "Desenvolvedor full stack e estudante de Ciência da Computação. Hoje construo produtos SaaS na Tog Lab com React, Next.js, NestJS e workflows assistidos por IA.",
  },
  location: { en: "Curitiba, Brazil", pt: "Curitiba, Brasil" },
  timezone: "America/Sao_Paulo",
  status: { en: "Open to conversations", pt: "Aberto a conversas" },

  about: {
    en: [
      "Hi, I'm João — a full stack developer and Computer Science student at PUCPR. I like taking products from a blank screen all the way to production: interfaces, APIs, databases and, more and more, the *AI* that ties them together.",
      "Today I work at Tog Lab building SaaS applications with React, Next.js, NestJS and PostgreSQL. Before that, I co-founded a legal-tech startup that drafted legal filings with AI. I care about clean code, automation and finding better ways to work — lately, that means AI-assisted development workflows.",
    ],
    pt: [
      "Oi, eu sou o João — desenvolvedor full stack e estudante de Ciência da Computação na PUCPR. Gosto de levar produtos da tela em branco até a produção: interfaces, APIs, bancos de dados e, cada vez mais, a *IA* que conecta tudo isso.",
      "Hoje trabalho na Tog Lab construindo aplicações SaaS com React, Next.js, NestJS e PostgreSQL. Antes disso, co-fundei uma startup jurídica que gerava peças processuais com IA. Me importo com código limpo, automação e formas melhores de trabalhar — ultimamente, workflows de desenvolvimento assistido por IA.",
    ],
  },

  skills: [
    "TypeScript", "JavaScript", "Python", "React", "Next.js", "Node.js", "NestJS",
    "PostgreSQL", "Prisma", "Redis", "Docker", "CI/CD", "RAG", "Claude Code",
  ],

  now: [
    { en: "Building an event orchestration platform at Tog Lab", pt: "Construindo uma plataforma de orquestração de eventos na Tog Lab" },
    { en: "Exploring AI-assisted development workflows", pt: "Explorando workflows de desenvolvimento assistido por IA" },
    { en: "Studying Computer Science at PUCPR", pt: "Cursando Ciência da Computação na PUCPR" },
  ],

  languages: [
    { name: { en: "Portuguese", pt: "Português" }, level: { en: "Native", pt: "Nativo" } },
    { name: { en: "English", pt: "Inglês" }, level: { en: "Advanced", pt: "Avançado" } },
  ],

  /* ---------- EXPERIÊNCIA PROFISSIONAL (mais recente primeiro) ---------- */
  experience: [
    {
      start: "2025-12",
      end: "",
      role: { en: "Full Stack Developer", pt: "Desenvolvedor Full Stack" },
      org: "Tog Lab",
      url: "https://toglab.co",
      place: { en: "Brazil · Portugal · USA · Türkiye", pt: "Brasil · Portugal · EUA · Türkiye" },
      summary: {
        en: "Building SaaS products end to end with a distributed team.",
        pt: "Construindo produtos SaaS de ponta a ponta com um time distribuído.",
      },
      highlights: {
        en: [
          "Develop and evolve a web application across the stack — React, Next.js and TypeScript on the front end; NestJS, Prisma and PostgreSQL on the back end.",
          "Plan and build an internal platform for managing and orchestrating events, owning features from database to UI.",
          "Research and roll out *AI-assisted development workflows* that help the team ship faster with better code.",
        ],
        pt: [
          "Desenvolvo e evoluo uma aplicação web em toda a stack — React, Next.js e TypeScript no front; NestJS, Prisma e PostgreSQL no back.",
          "Planejo e construo uma plataforma interna de gestão e orquestração de eventos, cuidando das funcionalidades do banco à interface.",
          "Pesquiso e implemento *workflows de desenvolvimento assistido por IA* para o time entregar mais rápido e com código melhor.",
        ],
      },
      tags: ["TypeScript", "Next.js", "NestJS", "Prisma", "PostgreSQL"],
    },
    {
      start: "2024-01",
      end: "2025-12",
      role: { en: "Co-founder & Full Stack Developer", pt: "Co-fundador & Desenvolvedor Full Stack" },
      org: { en: "Legal AI Startup", pt: "Startup de IA Jurídica" },
      url: "",
      summary: {
        en: "Co-founded a startup that uses AI to automatically draft legal filings.",
        pt: "Co-fundei uma startup que usa IA para gerar peças processuais automaticamente.",
      },
      highlights: {
        en: [
          "Built the back end with NestJS, Prisma and relational databases, and the front end with React, Next.js and Tailwind.",
          "Integrated AI assistants (OpenAI API) to analyze and generate legal content.",
          "Winning project of PIBEP/PUCPR out of 15+ teams, later accelerated by Canastra Ventures and Sebrae.",
        ],
        pt: [
          "Construí o back-end com NestJS, Prisma e bancos relacionais, e o front-end com React, Next.js e Tailwind.",
          "Integrei assistants de IA (OpenAI API) para análise e geração de conteúdo jurídico.",
          "Projeto vencedor do PIBEP/PUCPR entre mais de 15 equipes, depois acelerado pela Canastra Ventures e pelo Sebrae.",
        ],
      },
      tags: ["NestJS", "React", "Next.js", "OpenAI API", "Tailwind"],
    },
    {
      start: "2023-10",
      end: "2024-12",
      role: { en: "Back-end Intern", pt: "Estagiário Back-end" },
      org: "RP Info Sistemas",
      url: "",
      summary: {
        en: "My first steps in the industry: back-end training, applied systems logic and following real projects while learning good programming practices.",
        pt: "Meus primeiros passos no mercado: capacitação em back-end, lógica aplicada a sistemas e acompanhamento de projetos reais aprendendo boas práticas de programação.",
      },
      tags: ["Back-end"],
    },
  ],

  education: [
    {
      title: { en: "B.Sc. in Computer Science", pt: "Bacharelado em Ciência da Computação" },
      org: { en: "Pontifical Catholic University of Paraná (PUCPR)", pt: "Pontifícia Universidade Católica do Paraná (PUCPR)" },
      start: "2023",
      end: "",
    },
  ],

  awards: [
    { title: { en: "Winner — Techstars Startup Weekend AI", pt: "Vencedor — Techstars Startup Weekend AI" }, org: "Curitiba", year: "2025" },
    { title: { en: "Winner — PIBEP", pt: "Vencedor — PIBEP" }, org: "PUCPR", year: "2024" },
  ],

  /* ---------- PROJETOS ----------
     image: caminho em assets/img (opcional, aparece ao passar o mouse)
     featured: true = aparece com destaque */
  projects: [
    {
      title: "Made in Heaven",
      year: "2026",
      description: {
        en: "A native desktop app that *listens to a song and shows the chords* — live, on a guitar neck, with nothing sent to a server. Paste a YouTube link or open a file: a Rust (Tauri) shell supervises a local Python worker running ML chord recognition, and results are cached by the audio's content hash. It also maps every scale across the fretboard and helps build chord progressions, suggesting what comes next.",
        pt: "App desktop nativo que *escuta uma música e mostra os acordes* — ao vivo, num braço de guitarra, sem enviar nada para servidor. Cole um link do YouTube ou abra um arquivo: um shell em Rust (Tauri) supervisiona um worker Python local com reconhecimento de acordes por ML, e o resultado fica em cache pelo hash do conteúdo do áudio. Também mostra todas as escalas pelo braço e ajuda a montar progressões, sugerindo o próximo acorde.",
      },
      tags: ["Rust", "Tauri", "Svelte", "Python", "AI"],
      link: "https://joaovictorbalvedi.github.io/made-in-heaven/",
      repo: "https://github.com/JoaoVictorBalvedi/made-in-heaven",
      image: "assets/img/made-in-heaven.png",
      featured: true,
    },
    {
      title: { en: "Project Two", pt: "Projeto Dois" },
      year: "2025",
      description: {
        en: "[FILL IN] A tool, a game, a script, a study — anything goes.",
        pt: "[PREENCHER] Uma ferramenta, um jogo, um script, um estudo — o que for.",
      },
      tags: ["Python", "AI"],
      link: "",
      repo: "",
      image: "",
    },
  ],

  /* ---------- PESSOAL ----------
     Blocos livres. type: "list" | "text" | "quote" */
  personalIntro: {
    en: "Away from the keyboard — things I like, do and collect.",
    pt: "Longe do teclado — coisas que eu gosto, faço e coleciono.",
  },
  personal: [
    { title: "Hobbies", type: "list", items: { en: ["[FILL IN]", "[FILL IN]"], pt: ["[PREENCHER]", "[PREENCHER]"] } },
    { title: { en: "Reading", pt: "Lendo" }, type: "list", items: { en: ["Book — Author"], pt: ["Livro — Autor"] } },
    { title: { en: "Listening to", pt: "Ouvindo" }, type: "list", items: { en: ["Artist / Album"], pt: ["Artista / Álbum"] } },
    { title: { en: "A quote", pt: "Uma frase" }, type: "quote", text: { en: "A quote you like.", pt: "Uma citação que você gosta." }, author: { en: "Author", pt: "Autor" } },
  ],

  /* ---------- CONTATO ---------- */
  contactLede: {
    en: "Want to talk about a project, a role or just exchange ideas?",
    pt: "Quer conversar sobre um projeto, uma vaga ou só trocar uma ideia?",
  },
  email: "joaovictor2005balvedi@gmail.com",
  socials: [
    { label: "GitHub", url: "https://github.com/JoaoVictorBalvedi" },
    { label: "LinkedIn", url: "https://linkedin.com/in/" }, // [PREENCHER]
  ],
};
