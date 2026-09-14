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
    { en: "Researching and studying a predictive AI model for commodity prices — from the data pipeline to the app that puts it to work", pt: "Pesquisando e estudando um modelo preditivo de IA para commodities — do pipeline de dados ao app que coloca ele para trabalhar" },
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
      place: "Curitiba",
      start: "2023",
      end: "",
      summary: {
        en: "Where I joined PIBEP and co-founded my first startup, EstagIArio — now Super ADV.",
        pt: "Onde participei do PIBEP e co-fundei minha primeira startup, a EstagIArio — hoje Super ADV.",
      },
    },
  ],

  /* ---------- RECONHECIMENTOS ----------
     Clicar expande: description (texto ou lista de parágrafos) + media.
     media: [{ type: "image" | "video", src: "assets/...", alt: { en, pt }, poster?: "capa do vídeo" }] */
  recognitionIntro: {
    en: "Competitions and programs where our ideas came out on top.",
    pt: "Competições e programas em que nossas ideias saíram na frente.",
  },
  awards: [
    {
      title: "Techstars Startup Weekend AI",
      badge: { en: "1st place", pt: "1º lugar" },
      org: "Techstars · Curitiba",
      year: "2025",
      summary: {
        en: "54 hours, a team formed at the event itself and an AI-powered MVP for agribusiness that took first place.",
        pt: "54 horas, uma equipe formada no próprio evento e um MVP com IA para o agronegócio que ficou em 1º lugar.",
      },
      description: {
        en: "I won 1st place at Techstars Startup Weekend AI 2025, an intensive 54-hour competition where I teamed up with people I met at the event itself. We built an MVP for agribusiness: a solution that centralizes relevant information, generates personalized alerts and connects data between farmers in the same region to help them anticipate risks, make better decisions about the harvest and optimize resources — with mentorship throughout from experienced professionals in entrepreneurship, innovation and investment.",
        pt: "Conquistei o 1º lugar no Techstars Startup Weekend AI 2025, uma competição intensiva de 54 horas na qual formei equipe com participantes que conheci durante o próprio evento e desenvolvemos um MVP voltado ao agronegócio, criando uma solução capaz de centralizar informações relevantes, gerar alertas personalizados e conectar dados entre produtores de uma mesma região para ajudá-los a antecipar riscos, tomar melhores decisões sobre a safra e otimizar recursos, contando durante o processo com mentorias de profissionais experientes em empreendedorismo, inovação e investimento.",
      },
      media: [
        { type: "image", src: "assets/img/recognition/techstars-trofeu.jpg", alt: { en: "Holding the 1st place trophy at Techstars Startup Weekend AI Curitiba", pt: "Com o troféu de 1º lugar no Techstars Startup Weekend AI Curitiba" } },
        { type: "image", src: "assets/img/recognition/techstars-equipe.jpg", alt: { en: "The team planning the business model on a sticky-note board", pt: "A equipe planejando o modelo de negócio num quadro de post-its" } },
      ],
    },
    {
      title: "PIBEP — PUCPR",
      badge: { en: "Winner", pt: "Vencedor" },
      org: "PUCPR · Sebrae Paraná",
      year: "2024",
      summary: {
        en: "Entrepreneurship and research program where we founded EstagIArio — later Super ADV — and took first place.",
        pt: "Programa de empreendedorismo e pesquisa em que fundamos a EstagIArio — depois Super ADV — e conquistamos o 1º lugar.",
      },
      description: {
        en: [
          "I was a winner of PIBEP — PUCPR's Institutional Entrepreneurship and Research Scholarship Program, run in partnership with Sebrae Paraná — a journey focused on developing innovative ideas and training new entrepreneurs. Throughout the program, I went through every stage of structuring and validating a business, with mentorship from PUCPR professors and entrepreneurship experts, plus hands-on activities, pitches and networking opportunities.",
          "It was within PIBEP that we founded EstagIArio, a startup later renamed Super ADV, which took first place in the program. The experience was key to turning the initial idea into a business, developing our entrepreneurial vision and opening doors to new pitches, competitions, connections with the innovation ecosystem and opportunities with Sebrae and other startup development programs.",
        ],
        pt: [
          "Fui vencedor do PIBEP, Programa Institucional de Bolsas de Empreendedorismo e Pesquisa da PUCPR em parceria com o Sebrae Paraná, uma jornada voltada ao desenvolvimento de ideias inovadoras e à formação de novos empreendedores. Ao longo do programa, passei por todas as etapas de estruturação e validação de um negócio, contando com mentorias de professores e especialistas em empreendedorismo da PUCPR, além de atividades práticas, apresentações e oportunidades de networking.",
          "Foi dentro do PIBEP que fundamos a EstagIArio, startup posteriormente renomeada para Super ADV, com a qual conquistamos o primeiro lugar do programa. A experiência foi fundamental para transformar a ideia inicial em um negócio, desenvolver nossa visão empreendedora e abrir portas para novas apresentações, competições, conexões com o ecossistema de inovação e oportunidades junto ao Sebrae e a outros programas de desenvolvimento de startups.",
        ],
      },
      media: [
        { type: "image", src: "assets/img/recognition/pibep-vencedores.jpg", alt: { en: "The winning team with the PIBEP Garage 2024 plaque at PUCPR", pt: "A equipe vencedora com a placa do PIBEP Garage 2024 na PUCPR" } },
        { type: "image", src: "assets/img/recognition/pibep-turma.jpg", alt: { en: "PIBEP participants and mentors", pt: "Participantes e mentores do PIBEP" } },
      ],
    },
  ],

  /* ---------- PROJETOS ----------
     image: caminho em assets/img (opcional, aparece ao passar o mouse)
     imageStyle: "icon" = mostra a imagem pequena, girando, sem moldura (bom para ícones/logos)
     clicar no projeto abre "link" (ou "repo", se não houver link)
     sem link nem repo: clicar expande o projeto. Nesse caso use
       summary: resumo curto, sempre visível (description aparece ao expandir)
       gallery: [{ src: "assets/img/...", alt: { en, pt } }] — imagens mostradas ao expandir
     featured: true = aparece com destaque */
  projects: [
    {
      title: "Made in Heaven",
      year: "2026",
      description: {
        en: "A desktop app that *listens to a song and shows the chords* live on a guitar neck — fully local, nothing sent to a server. A Rust (Tauri) shell runs a Python ML worker for chord recognition; the app also maps scales across the fretboard and suggests chord progressions.",
        pt: "App desktop que *escuta uma música e mostra os acordes* ao vivo num braço de guitarra — tudo local, nada enviado para servidor. Um shell em Rust (Tauri) roda um worker Python com ML para reconhecer acordes; o app também mostra escalas pelo braço e sugere progressões.",
      },
      tags: ["Rust", "Tauri", "Svelte", "Python", { en: "AI", pt: "IA" }],
      link: "https://joaovictorbalvedi.github.io/made-in-heaven/",
      repo: "https://github.com/JoaoVictorBalvedi/made-in-heaven",
      image: "assets/img/made-in-heaven-icon.png",
      imageStyle: "icon",
      featured: true,
    },
    {
      title: { en: "AI Assistant for Agriculture", pt: "Assistente de IA para o Agro" },
      year: "2026",
      summary: {
        en: "An AI-powered field companion for farmers and agronomists — built to work even with limited internet.",
        pt: "Um app com IA para acompanhar produtores rurais e agrônomos no campo — feito para funcionar mesmo com pouca internet.",
      },
      description: {
        en: "A smart app that supports farmers and agronomists in the field: weather monitoring, commodity prices, a guide to pests, diseases and agricultural products, and *voice-logged* field activities. It uses computer vision to spot crop problems from a photo and an AI model trained on agribusiness data that keeps giving technical support even with limited internet access.",
        pt: "Aplicativo inteligente de apoio a produtores rurais e agrônomos no campo: monitoramento climático, cotações de commodities, guia de pragas, doenças e produtos agrícolas e registro de atividades *por voz*. Usa visão computacional para identificar problemas na lavoura por foto e um modelo de IA treinado com dados do setor que oferece suporte técnico mesmo com pouca internet.",
      },
      tags: [{ en: "AI", pt: "IA" }, { en: "Computer Vision", pt: "Visão Computacional" }, { en: "Voice", pt: "Voz" }, "Offline-first", "Agro"],
      link: "",
      repo: "",
      note: { en: "Private · built at Tog Lab", pt: "Privado · feito na Tog Lab" },
      image: "",
      gallery: [
        { src: "assets/img/agro/diario.png", alt: { en: "Farm diary with field activities", pt: "Diário da fazenda com atividades de campo" } },
        { src: "assets/img/agro/clima.png", alt: { en: "Weather forecast, UV index and wind", pt: "Previsão do tempo, índice UV e vento" } },
        { src: "assets/img/agro/cotacoes.png", alt: { en: "Commodity and farm input prices", pt: "Cotações de commodities e insumos" } },
      ],
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
