/* ==========================================================================
   CONTEÚDO DO SITE
   Edite apenas este arquivo para atualizar o portfolio.
   Tudo marcado com [PREENCHER] é placeholder.
   ========================================================================== */

window.PORTFOLIO = {
  name: "João Victor",
  shortName: "JV",
  role: "Desenvolvedor",                       // [PREENCHER]
  // Título do topo. Use *asteriscos* para destacar em itálico.
  headline: "Construo *coisas* para a web — e às vezes fora dela.",
  lede: "Estudante e desenvolvedor interessado em software bem feito, interfaces cuidadosas e ideias que misturam código com arte.", // [PREENCHER]
  location: "Brasil",                          // [PREENCHER] ex.: "Curitiba, PR"
  timezone: "America/Sao_Paulo",
  status: "Aberto a oportunidades",

  about: [
    "Olá! Eu sou o João. [PREENCHER] Conte em poucas frases quem você é, o que estuda ou faz hoje e o que te move.",
    "[PREENCHER] Um segundo parágrafo sobre como você começou a programar, o tipo de problema que gosta de resolver ou o que está aprendendo agora.",
  ],

  skills: ["JavaScript", "TypeScript", "Python", "React", "Node.js", "Git", "SQL"], // [PREENCHER]

  now: [                                       // o que você está fazendo "agora"
    "Estudando [PREENCHER]",
    "Construindo [PREENCHER]",
    "Lendo [PREENCHER]",
  ],

  /* ---------- EXPERIÊNCIA ----------
     Mais recente primeiro. "end" vazio = atual. */
  experience: [
    {
      start: "2025",
      end: "",
      role: "Cargo [PREENCHER]",
      org: "Empresa / Instituição",
      url: "",
      description: "Descreva em uma ou duas frases o que você fez e o impacto.",
      tags: ["React", "Node.js"],
    },
    {
      start: "2023",
      end: "2025",
      role: "Curso / Graduação [PREENCHER]",
      org: "Universidade",
      url: "",
      description: "Formação, pesquisa, monitoria, projetos de extensão…",
      tags: ["Formação"],
    },
  ],

  /* ---------- PROJETOS ----------
     image: caminho em assets/img (opcional, aparece ao passar o mouse)
     featured: true = aparece com destaque */
  projects: [
    {
      title: "Projeto Um",
      year: "2026",
      description: "Resumo curto do projeto: o problema, a solução e o que tem de interessante.",
      tags: ["Web", "React"],
      link: "",
      repo: "https://github.com/",
      image: "",
      featured: true,
    },
    {
      title: "Projeto Dois",
      year: "2025",
      description: "Uma ferramenta, um jogo, um script, um estudo — o que for.",
      tags: ["Python", "Dados"],
      link: "",
      repo: "https://github.com/",
      image: "",
    },
    {
      title: "Projeto Três",
      year: "2024",
      description: "Algo experimental ou criativo também vale muito aqui.",
      tags: ["Criativo"],
      link: "",
      repo: "",
      image: "",
    },
  ],

  /* ---------- PESSOAL ----------
     Blocos livres sobre você. type: "list" | "text" | "quote" */
  personalIntro: "Fora do código — coisas que eu gosto, faço e coleciono.",
  personal: [
    { title: "Hobbies", type: "list", items: ["[PREENCHER]", "[PREENCHER]", "[PREENCHER]"] },
    { title: "Lendo", type: "list", items: ["Livro — Autor", "Livro — Autor"] },
    { title: "Ouvindo", type: "list", items: ["Artista / Álbum", "Artista / Álbum"] },
    { title: "Uma frase", type: "quote", text: "Uma citação que você gosta.", author: "Autor" },
    { title: "Curiosidade", type: "text", text: "Algo curioso sobre você que as pessoas não esperam." },
  ],

  /* ---------- CONTATO ---------- */
  contactLede: "Quer conversar sobre um projeto, uma vaga ou só trocar uma ideia?",
  email: "joaovictor2005balvedi@gmail.com",
  socials: [
    { label: "GitHub", url: "https://github.com/JoaoVictorBalvediTog" },
    { label: "LinkedIn", url: "https://linkedin.com/in/" }, // [PREENCHER]
  ],
};
