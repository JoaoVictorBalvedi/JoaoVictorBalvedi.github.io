/* ==========================================================================
   CONTEÚDO DO SITE
   Edite apenas este arquivo para atualizar o portfolio.

   Textos bilíngues usam { en: "...", pt: "..." } — inglês é o idioma padrão.
   Um texto simples ("...") aparece igual nos dois idiomas.
   Use *asteriscos* para destacar um trecho em itálico.
   Datas: "AAAA-MM" (ex.: "2025-12") ou só "AAAA". "end" vazio = atual.
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
    en: "Full stack developer and Computer Science student. Currently building SaaS products at Tog Lab with React, Next.js, NestJS and AI built into the workflow.",
    pt: "Desenvolvedor full stack e estudante de Ciência da Computação. Hoje construo produtos SaaS na Tog Lab com React, Next.js, NestJS e IA no fluxo de trabalho.",
  },
  location: { en: "Curitiba, Brazil", pt: "Curitiba, Brasil" },
  timezone: "America/Sao_Paulo",
  status: { en: "Open to conversations", pt: "Aberto a conversas" },

  about: {
    en: [
      "Hi, I'm João, a full stack developer and Computer Science student at PUCPR. I like turning a problem into something that actually works: designing the solution, picking the right pieces and putting them together end to end, interfaces, APIs, databases and, more and more, the AI that ties them together.",
      "Today I work at Tog Lab, where I'm building an event management platform for Cresol cooperative, and developing an application for the agribusiness sector with AI integrated to support producers directly. Before that, I cofounded a legal tech startup that drafted legal filings with AI, which only fueled my taste for entrepreneurship and building things from scratch. I'm currently researching predictive models for commodity pricing, one of several things I dig into on the side: I seek to understand real world problems to actually solve them, and I'm always looking for ways my work can be useful to someone.",
      "What I actually care about is using AI well, building things that push forward instead of just following trends, and making sure what I ship actually helps the people using it. Outside of code, music and art take up a good part of my time, guitar, photography, video, drawing, whatever lets me make something with my hands and express my mind.",
    ],
    pt: [
      "Oi, eu sou o João, desenvolvedor full stack e estudante de Ciência da Computação na PUCPR. Gosto de transformar um problema em algo que realmente funciona: desenhar a solução, escolher as peças certas e juntar tudo de ponta a ponta, interfaces, APIs, bancos de dados e, cada vez mais, a IA que conecta tudo isso.",
      "Hoje trabalho na Tog Lab, onde estou construindo uma plataforma de gestão de eventos para a cooperativa Cresol e desenvolvendo um aplicativo para o agronegócio com IA integrada para apoiar os produtores diretamente. Antes disso, cofundei uma startup jurídica que gerava peças processuais com IA, o que só aumentou meu gosto por empreender e construir coisas do zero. Atualmente pesquiso modelos preditivos para preços de commodities, uma das várias coisas que exploro por conta própria: busco entender problemas do mundo real e resolver de verdade, e estou sempre procurando formas de o meu trabalho ser útil para alguém.",
      "O que realmente me importa é usar bem a IA, construir coisas que fazem avançar em vez de só seguir tendências e garantir que o que eu entrego realmente ajude quem usa. Fora do código, música e arte ocupam boa parte do meu tempo, guitarra, fotografia, vídeo, desenho, qualquer coisa que me deixe criar algo com as mãos e expressar o que penso.",
    ],
  },

  skills: [
    "TypeScript", "JavaScript", "Python", "React", "Next.js", "Node.js", "NestJS",
    "PostgreSQL", "Prisma", "Redis", "Docker", "CI/CD", "RAG", "Claude Code",
  ],

  now: [
    { en: "Researching and studying a predictive AI model for commodity prices, from the data pipeline to the app that puts it to work", pt: "Pesquisando e estudando um modelo preditivo de IA para commodities, do pipeline de dados ao app que coloca ele para trabalhar" },
    { en: "Exploring how AI can make development workflows faster and better", pt: "Explorando como a IA pode deixar o desenvolvimento mais rápido e melhor" },
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
          "Develop and evolve a web application across the stack: React, Next.js and TypeScript on the front end; NestJS, Prisma and PostgreSQL on the back end.",
          "Plan and build an internal platform for managing and orchestrating events, owning features from database to UI.",
          "Research and roll out *AI in the development workflow* to help the team ship faster with better code.",
        ],
        pt: [
          "Desenvolvo e evoluo uma aplicação web em toda a stack: React, Next.js e TypeScript no front; NestJS, Prisma e PostgreSQL no back.",
          "Planejo e construo uma plataforma interna de gestão e orquestração de eventos, cuidando das funcionalidades do banco à interface.",
          "Pesquiso e implemento *workflows de desenvolvimento assistido por IA* para o time entregar mais rápido e com código melhor.",
        ],
      },
      tags: ["TypeScript", "Next.js", "NestJS", "Prisma", "PostgreSQL"],
    },
    {
      start: "2024-01",
      end: "2025-12",
      role: { en: "Cofounder & Full Stack Developer", pt: "Cofundador & Desenvolvedor Full Stack" },
      org: { en: "Legal AI Startup", pt: "Startup de IA Jurídica" },
      url: "",
      summary: {
        en: "Cofounded a startup that uses AI to automatically draft legal filings.",
        pt: "Cofundei uma startup que usa IA para gerar peças processuais automaticamente.",
      },
      highlights: {
        en: [
          "Built the back end with NestJS, Prisma and relational databases, and the front end with React, Next.js and Tailwind.",
          "Integrated AI assistants (OpenAI API) to analyze and generate legal content.",
          "Winning project of PIBEP/PUCPR out of 15+ teams, later accelerated by Canastra Ventures and Sebrae.",
        ],
        pt: [
          "Construí o backend com NestJS, Prisma e bancos relacionais, e o frontend com React, Next.js e Tailwind.",
          "Integrei assistants de IA (OpenAI API) para análise e geração de conteúdo jurídico.",
          "Projeto vencedor do PIBEP/PUCPR entre mais de 15 equipes, depois acelerado pela Canastra Ventures e pelo Sebrae.",
        ],
      },
      tags: ["NestJS", "React", "Next.js", "OpenAI API", "Tailwind"],
    },
    {
      start: "2023-10",
      end: "2024-12",
      role: { en: "Backend Intern", pt: "Estagiário Backend" },
      org: "RP Info Sistemas",
      url: "",
      summary: {
        en: "My first steps in the industry: backend training, applied systems logic and following real projects while learning good programming practices.",
        pt: "Meus primeiros passos no mercado: capacitação em backend, lógica aplicada a sistemas e acompanhamento de projetos reais aprendendo boas práticas de programação.",
      },
      tags: ["Backend"],
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
        en: "Where I joined PIBEP and cofounded my first startup, EstagIArio, now Super ADV.",
        pt: "Onde participei do PIBEP e cofundei minha primeira startup, a EstagIArio, hoje Super ADV.",
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
        en: "54 hours, a team formed at the event itself and an MVP using AI for agribusiness that took first place.",
        pt: "54 horas, uma equipe formada no próprio evento e um MVP com IA para o agronegócio que ficou em 1º lugar.",
      },
      description: {
        en: "I won 1st place at Techstars Startup Weekend AI 2025, an intensive 54 hour competition where I teamed up with people I met at the event itself. We built an MVP for agribusiness: a solution that centralizes relevant information, generates personalized alerts and connects data between farmers in the same region to help them anticipate risks, make better decisions about the harvest and optimize resources, with mentorship throughout from experienced professionals in entrepreneurship, innovation and investment.",
        pt: "Conquistei o 1º lugar no Techstars Startup Weekend AI 2025, uma competição intensiva de 54 horas na qual formei equipe com participantes que conheci durante o próprio evento e desenvolvemos um MVP voltado ao agronegócio, criando uma solução capaz de centralizar informações relevantes, gerar alertas personalizados e conectar dados entre produtores de uma mesma região para ajudá-los a antecipar riscos, tomar melhores decisões sobre a safra e otimizar recursos, contando durante o processo com mentorias de profissionais experientes em empreendedorismo, inovação e investimento.",
      },
      media: [
        { type: "image", src: "assets/img/recognition/techstars-trofeu.jpg", alt: { en: "Holding the 1st place trophy at Techstars Startup Weekend AI Curitiba", pt: "Com o troféu de 1º lugar no Techstars Startup Weekend AI Curitiba" } },
        { type: "image", src: "assets/img/recognition/techstars-equipe.jpg", alt: { en: "The team planning the business model on a board of sticky notes", pt: "A equipe planejando o modelo de negócio num quadro de anotações" } },
      ],
    },
    {
      title: "PIBEP",
      badge: { en: "Winner", pt: "Vencedor" },
      org: "PUCPR · Sebrae Paraná",
      year: "2024",
      summary: {
        en: "Entrepreneurship and research program where we founded EstagIArio (later Super ADV) and took first place.",
        pt: "Programa de empreendedorismo e pesquisa em que fundamos a EstagIArio (depois Super ADV) e conquistamos o 1º lugar.",
      },
      description: {
        en: [
          "I was a winner of PIBEP, PUCPR's Institutional Entrepreneurship and Research Scholarship Program run in partnership with Sebrae Paraná, a journey focused on developing innovative ideas and training new entrepreneurs. Throughout the program, I went through every stage of structuring and validating a business, with mentorship from PUCPR professors and entrepreneurship experts, plus hands on activities, pitches and networking opportunities.",
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
        en: "A desktop app that *listens to a song and shows the chords* live on a guitar neck, fully local, with nothing sent to a server. A Rust (Tauri) shell runs a Python ML worker for chord recognition; the app also maps scales across the fretboard and suggests chord progressions.",
        pt: "App desktop que *escuta uma música e mostra os acordes* ao vivo num braço de guitarra, tudo local, sem enviar nada para servidor. Um shell em Rust (Tauri) roda um worker Python com ML para reconhecer acordes; o app também mostra escalas pelo braço e sugere progressões.",
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
        en: "An AI field companion for farmers and agronomists, built to work even with limited internet.",
        pt: "Um app com IA para acompanhar produtores rurais e agrônomos no campo, feito para funcionar mesmo com pouca internet.",
      },
      description: {
        en: "A smart app that supports farmers and agronomists in the field: weather monitoring, commodity prices, a guide to pests, diseases and agricultural products, and field activities *logged by voice*. It uses computer vision to spot crop problems from a photo and an AI model trained on agribusiness data that keeps giving technical support even with limited internet access.",
        pt: "Aplicativo inteligente de apoio a produtores rurais e agrônomos no campo: monitoramento climático, cotações de commodities, guia de pragas, doenças e produtos agrícolas e registro de atividades *por voz*. Usa visão computacional para identificar problemas na lavoura por foto e um modelo de IA treinado com dados do setor que oferece suporte técnico mesmo com pouca internet.",
      },
      tags: [{ en: "AI", pt: "IA" }, { en: "Computer Vision", pt: "Visão Computacional" }, { en: "Voice", pt: "Voz" }, "Offline", "Agro"],
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
    en: "Away from the keyboard: things I like, do and collect.",
    pt: "Longe do teclado: coisas que eu gosto, faço e coleciono.",
  },
  personal: [
    { title: { en: "Reading", pt: "Lendo" }, type: "list", items: { en: ["The Myth of Sisyphus, by Albert Camus"], pt: ["O Mito de Sísifo, de Albert Camus"] } },
    { title: { en: "Listening to", pt: "Ouvindo" }, type: "list", items: { en: ["Discipline, by King Crimson"], pt: ["Discipline, do King Crimson"] } },
    {
      title: { en: "A quote", pt: "Uma frase" },
      type: "quote",
      text: {
        en: "A man is more a man through the things he keeps to himself than through those he says.",
        pt: "Um homem é mais homem pelas coisas que cala do que pelas que diz.",
      },
      author: "Albert Camus",
    },
  ],

  /* ---------- CRIAÇÕES ----------
     Cards com capa + texto curto; clicar expande com os detalhes.
     cover: imagem da capa (coverPosition opcional, ex.: "center 70%")
     status: selo (ex.: Em andamento); soon: true deixa o selo vazado ("em breve")
     description, media, tags, links [{ label, url }] e note aparecem ao expandir */
  creationsIntro: {
    en: "A collection of things I make: code, instruments, AI models, art and whatever comes next.",
    pt: "Uma coleção das coisas que eu crio: código, instrumentos, modelos de IA, arte e o que vier depois.",
  },
  creations: [
    {
      title: "Claude Review Action",
      kind: { en: "Dev tool", pt: "Ferramenta dev" },
      cover: "assets/img/creations/claude-review.svg",
      coverAlt: { en: "Illustration of a pull request diff with an AI review comment", pt: "Ilustração de um diff de pull request com um comentário de revisão por IA" },
      summary: {
        en: "A Claude powered reviewer that reads every pull request before a human does.",
        pt: "Um revisor com Claude que lê cada pull request antes de qualquer humano.",
      },
      description: {
        en: [
          "Code review is where quality is won or lost, and also where teams wait the longest. Claude Review Action is a GitHub Action that puts Claude on every pull request: as soon as a change is opened, it reads the diff and gives the team a first review, so people can spend their attention on the decisions that really need them.",
          "It came out of my work on AI assisted development at Tog Lab, where the goal is simple: ship faster without letting code quality slip.",
        ],
        pt: [
          "Code review é onde a qualidade se ganha ou se perde, e também onde os times mais esperam. A Claude Review Action é uma GitHub Action que coloca o Claude em cada pull request: assim que uma mudança é aberta, ele lê o diff e faz uma primeira revisão, para que as pessoas possam dedicar atenção às decisões que realmente precisam delas.",
          "Ela nasceu do meu trabalho com desenvolvimento assistido por IA na Tog Lab, onde o objetivo é simples: entregar mais rápido sem deixar a qualidade do código cair.",
        ],
      },
      tags: ["GitHub Actions", "Claude", { en: "AI", pt: "IA" }],
      links: [{ label: "GitHub", url: "https://github.com/toglab/claude-review-action" }],
      note: { en: "Private repository · Tog Lab", pt: "Repositório privado · Tog Lab" },
    },
    {
      title: { en: "Commodity price forecasting", pt: "Previsão de preços de commodities" },
      kind: { en: "AI model", pt: "Modelo de IA" },
      status: { en: "In progress", pt: "Em andamento" },
      cover: "assets/img/creations/commodities.svg",
      coverAlt: { en: "Illustration of a price chart with a forecast band", pt: "Ilustração de um gráfico de preços com uma faixa de previsão" },
      summary: {
        en: "A predictive AI model I'm building to forecast commodity prices.",
        pt: "Um modelo preditivo de IA que estou construindo para prever preços de commodities.",
      },
      description: {
        en: "An ongoing research project: studying how to predict commodity prices with machine learning, from collecting and cleaning historical data to training and evaluating models, with the goal of turning the forecasts into something producers can actually use. The code will be published once it's ready.",
        pt: "Um projeto de pesquisa em andamento: estudando como prever preços de commodities com machine learning, da coleta e limpeza de dados históricos ao treino e avaliação dos modelos, com o objetivo de transformar as previsões em algo que os produtores realmente consigam usar. O código vai ser publicado quando estiver pronto.",
      },
      tags: ["Machine Learning", "Python", { en: "Time series", pt: "Séries temporais" }],
    },
    {
      title: { en: "Bass build & pedal mods", pt: "Baixo e pedais" },
      kind: { en: "Instruments", pt: "Instrumentos" },
      status: { en: "In progress", pt: "Em andamento" },
      cover: "assets/img/creations/baixo.jpg",
      coverPosition: "center 78%",
      coverAlt: { en: "Sunburst bass body with pickup and wiring exposed", pt: "Corpo de baixo sunburst com captador e fiação expostos" },
      summary: {
        en: "A bass I'm building by hand and the guitar pedals I keep opening up and tinkering with.",
        pt: "Um baixo que estou construindo à mão e os pedais de guitarra que vivo abrindo e modificando.",
      },
      description: {
        en: "Hands on work away from the screen: assembling and wiring a bass from the body up, with pickup, bridge and electronics, and opening pedals like a Big Muff to understand the circuit, solder and experiment with the sound.",
        pt: "Trabalho com as mãos, longe da tela: montando e ligando a elétrica de um baixo a partir do corpo, com captador, ponte e eletrônica, e abrindo pedais como um Big Muff para entender o circuito, soldar e experimentar com o som.",
      },
      media: [
        { type: "image", src: "assets/img/creations/pedais.jpg", alt: { en: "A Big Muff pedal opened up next to a soldering iron", pt: "Um pedal Big Muff aberto ao lado de um ferro de solda" } },
      ],
    },
    {
      title: { en: "Paintings", pt: "Pinturas" },
      kind: { en: "Art", pt: "Arte" },
      cover: "assets/img/creations/pintura.jpg",
      coverAlt: { en: "Painting on canvas reimagining the cover of By the Way by Red Hot Chili Peppers", pt: "Pintura em tela que reimagina a capa de By the Way, do Red Hot Chili Peppers" },
      summary: {
        en: "Paintings on canvas, like this take on the cover of By the Way.",
        pt: "Pinturas em tela, como esta releitura da capa de By the Way.",
      },
      description: {
        en: "Painting is one of the ways I make something with my hands. This one reimagines the cover of By the Way by Red Hot Chili Peppers, mixing the landscape, the blue figure and hand lettered type.",
        pt: "Pintar é uma das formas que encontro de criar algo com as mãos. Esta reimagina a capa de By the Way, do Red Hot Chili Peppers, misturando a paisagem, a figura azul e as letras pintadas à mão.",
      },
    },
    {
      title: { en: "Music channel", pt: "Canal de música" },
      kind: "YouTube · Instagram · TikTok",
      status: { en: "Coming soon", pt: "Em breve" },
      soon: true,
      cover: "assets/img/creations/channel.svg",
      coverAlt: { en: "Illustration of a play button over a sound wave", pt: "Ilustração de um botão de play sobre uma onda sonora" },
      summary: {
        en: "Videos about music, guitar and songwriting.",
        pt: "Vídeos sobre música, guitarra e criação de músicas.",
      },
      description: {
        en: "A channel to share what I play, build and learn: guitar, gear and pedals, and the process of creating music from the first idea to the finished track. Not live yet, stay tuned.",
        pt: "Um canal para compartilhar o que eu toco, construo e aprendo: guitarra, equipamentos e pedais, e o processo de criar música da primeira ideia à faixa pronta. Ainda não está no ar, fique de olho.",
      },
    },
  ],

  /* ---------- CONTATO ---------- */
  contactLede: {
    en: "Want to talk about a project, a role or just exchange ideas?",
    pt: "Quer conversar sobre um projeto, uma vaga ou só trocar uma ideia?",
  },
  email: "joaovictor2005balvedi@gmail.com",
  socials: [
    { label: "GitHub", url: "https://github.com/JoaoVictorBalvedi" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/jo%C3%A3o-victor-balvedi-57421a309" },
  ],
};
