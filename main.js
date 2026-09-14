(() => {
  const D = window.PORTFOLIO;
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];
  const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Idioma ---------- */
  const UI = {
    en: {
      about: "About", experience: "Experience", projects: "Projects", personal: "Personal", contact: "Contact",
      toolkit: "Toolkit", now: "Now", languages: "Languages", education: "Education", awards: "Recognition",
      present: "Present", all: "All", live: "Live", code: "Code", local: "local time",
      scroll: "↓ scroll", footer: "Handmade · HTML, CSS & JS", top: "↑ top",
      langAria: "Mudar para português", themeAria: "Toggle light/dark theme",
      scrollAria: "Scroll to content", filterAria: "Filter projects",
    },
    pt: {
      about: "Sobre", experience: "Experiência", projects: "Projetos", personal: "Pessoal", contact: "Contato",
      toolkit: "Ferramentas", now: "Agora", languages: "Idiomas", education: "Formação", awards: "Reconhecimentos",
      present: "Atual", all: "Todos", live: "Ver", code: "Código", local: "horário local",
      scroll: "↓ rolar", footer: "Feito à mão · HTML, CSS & JS", top: "↑ topo",
      langAria: "Switch to English", themeAria: "Alternar tema claro/escuro",
      scrollAria: "Rolar para o conteúdo", filterAria: "Filtrar projetos",
    },
  };
  const MONTHS = {
    en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    pt: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
  };

  let lang = "en";
  try {
    const wanted = new URLSearchParams(location.search).get("lang") || localStorage.getItem("lang");
    if (wanted in UI) lang = wanted;
  } catch (e) {}

  // texto bilíngue { en, pt } ou texto simples
  const t = (v) => (v && typeof v === "object" && !Array.isArray(v) ? v[lang] ?? v.en : v) ?? "";
  const emph = (v) => esc(t(v)).replace(/\*(.+?)\*/g, "<em>$1</em>");
  const date = (v) => {
    if (!v) return UI[lang].present;
    const [y, m] = String(v).split("-");
    return m ? `${MONTHS[lang][+m - 1]} ${y}` : y;
  };
  const period = (a, b) => `${date(a)} — ${date(b)}`;
  const tagList = (tags = []) => `<ul class="tags">${tags.map((tag) => `<li>${esc(t(tag))}</li>`).join("")}</ul>`;
  const extLink = (url, label) => `<a href="${esc(url)}" target="_blank" rel="noopener">${label}</a>`;

  /* ---------- Renderização ---------- */
  let firstRender = true;

  function render() {
    const L = UI[lang];
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.title = `${D.name} — ${t(D.role)}`;

    $$("[data-i18n]").forEach((el) => { el.textContent = L[el.dataset.i18n]; });
    $$("[data-i18n-aria]").forEach((el) => el.setAttribute("aria-label", L[el.dataset.i18nAria]));
    $$("#langToggle [data-lang]").forEach((el) => el.classList.toggle("on", el.dataset.lang === lang));

    // Hero
    $("#brand").textContent = D.shortName;
    $("#heroEyebrow").textContent = `${D.name} · ${t(D.role)}`;
    $("#heroTitle").innerHTML = emph(D.headline);
    $("#heroLede").textContent = t(D.lede);
    $("#heroLocation").textContent = t(D.location);
    $("#heroStatus").textContent = t(D.status);
    $("#footerName").textContent = `© ${new Date().getFullYear()} ${D.name}`;
    tick();

    // Sobre
    $("#aboutText").innerHTML = t(D.about).map((p) => `<p>${emph(p)}</p>`).join("");
    $("#skills").innerHTML = D.skills.map((s) => `<li>${esc(t(s))}</li>`).join("");
    $("#now").innerHTML = D.now.map((s) => `<li>${esc(t(s))}</li>`).join("");
    $("#languages").innerHTML = (D.languages || []).map((l) =>
      `<li><span>${esc(t(l.name))}</span><span>${esc(t(l.level))}</span></li>`).join("");

    // Experiência
    $("#jobs").innerHTML = D.experience.map((j) => `
      <li class="job reveal">
        <div class="job-date mono">${period(j.start, j.end)}${j.place ? `<span class="job-place">${esc(t(j.place))}</span>` : ""}</div>
        <div>
          <h3>${esc(t(j.role))} <span class="org">· ${j.url ? extLink(j.url, esc(t(j.org))) : esc(t(j.org))}</span></h3>
          ${j.summary ? `<p>${emph(j.summary)}</p>` : ""}
          ${j.highlights ? `<ul class="highlights">${t(j.highlights).map((h) => `<li>${emph(h)}</li>`).join("")}</ul>` : ""}
          ${tagList(j.tags)}
        </div>
      </li>`).join("");

    const block = (title, items) => items && items.length ? `
      <div class="reveal">
        <h3 class="mono small-title">${title}</h3>
        <ul>${items.join("")}</ul>
      </div>` : "";
    $("#extra").innerHTML =
      block(L.education, (D.education || []).map((e) =>
        `<li><strong>${esc(t(e.title))}</strong><span class="mono">${period(e.start, e.end)}</span><span>${esc(t(e.org))}</span></li>`)) +
      block(L.awards, (D.awards || []).map((a) =>
        `<li><strong>${esc(t(a.title))}</strong><span class="mono">${esc(a.year)}</span><span>${esc(t(a.org))}</span></li>`));

    // Projetos
    const allTags = [L.all, ...new Set(D.projects.flatMap((p) => (p.tags || []).map(t)))];
    $("#filters").innerHTML = allTags.map((tag, i) =>
      `<button role="tab" aria-selected="${i === 0}" data-tag="${esc(tag)}" data-all="${i === 0}">${esc(tag)}</button>`).join("");

    $("#projectList").innerHTML = D.projects.map((p, i) => {
      const href = p.link || p.repo;
      // sem site nem repositório: o projeto expande mostrando descrição e imagens
      const expandable = !href && Boolean(p.summary || (p.gallery && p.gallery.length));
      const detailsId = `project-details-${i}`;
      const title = `<span class="project-title">${esc(t(p.title))}</span>`;
      let main = title;
      if (href) main = `<a class="project-main" href="${esc(href)}" target="_blank" rel="noopener">${title}</a>`;
      else if (expandable) main = `<button type="button" class="project-main" aria-expanded="false" aria-controls="${detailsId}">${title}<span class="project-toggle" aria-hidden="true"></span></button>`;

      const details = expandable ? `
          <div class="project-details" id="${detailsId}">
            <div class="project-details-inner">
              ${p.summary ? `<p class="details-text">${emph(p.description)}</p>` : ""}
              ${p.gallery && p.gallery.length ? `<div class="gallery">${p.gallery.map((g) =>
                `<figure><img src="${esc(g.src)}" alt="${esc(t(g.alt))}" loading="lazy"></figure>`).join("")}</div>` : ""}
            </div>
          </div>` : "";

      return `
      <li class="project reveal${p.featured ? " featured" : ""}${expandable ? " expandable" : ""}" data-tags="${esc((p.tags || []).map(t).join("|"))}" data-image="${esc(p.image || "")}" data-image-style="${esc(p.imageStyle || "")}">
        <div class="project-link">
          <h3>${main}</h3>
          <span class="year mono">${esc(p.year)}</span>
          <p class="desc">${emph(expandable && p.summary ? p.summary : p.description)}</p>
          <div class="project-foot">
            ${tagList(p.tags)}
            <span class="project-actions">
              ${p.link ? extLink(p.link, `${L.live} ↗`) : ""}
              ${p.repo ? extLink(p.repo, `${L.code} ↗`) : ""}
              ${p.note ? `<span class="project-note">${esc(t(p.note))}</span>` : ""}
            </span>
          </div>
          ${details}
        </div>
      </li>`;
    }).join("");
    bindPreviews();

    // Pessoal
    $("#personalIntro").textContent = t(D.personalIntro);
    $("#personalGrid").innerHTML = D.personal.map((c) => {
      let body;
      if (c.type === "list") body = `<ul>${t(c.items).map((i) => `<li>${emph(i)}</li>`).join("")}</ul>`;
      else if (c.type === "quote") body = `<blockquote>${esc(t(c.text))}</blockquote>${c.author ? `<cite>— ${esc(t(c.author))}</cite>` : ""}`;
      else body = `<p>${emph(c.text)}</p>`;
      return `<article class="card reveal"><h3 class="mono">${esc(t(c.title))}</h3>${body}</article>`;
    }).join("");

    // Contato
    $("#contactLede").textContent = t(D.contactLede);
    const mail = $("#contactMail");
    mail.textContent = D.email;
    mail.href = `mailto:${D.email}`;
    $("#socials").innerHTML = D.socials.map((s) => `<li>${extLink(s.url, esc(t(s.label)))}</li>`).join("");

    // Animação de entrada só no primeiro carregamento
    $$("main .reveal").forEach((el) => (firstRender ? revealObs.observe(el) : el.classList.add("in")));
    firstRender = false;
  }

  /* ---------- Filtros de projeto ---------- */
  $("#filters").addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    $$("#filters button").forEach((b) => b.setAttribute("aria-selected", b === btn));
    $$(".project").forEach((el) => {
      el.hidden = btn.dataset.all !== "true" && !el.dataset.tags.split("|").includes(btn.dataset.tag);
    });
  });

  /* ---------- Projetos que expandem ---------- */
  $("#projectList").addEventListener("click", (e) => {
    const btn = e.target.closest("button.project-main");
    if (!btn) return;
    const open = btn.getAttribute("aria-expanded") !== "true";
    btn.setAttribute("aria-expanded", String(open));
    btn.closest(".project").classList.toggle("open", open);
  });

  /* ---------- Preview de imagem que segue o cursor ---------- */
  const preview = $("#preview"), previewImg = preview.querySelector("img");
  const canHover = matchMedia("(hover: hover)").matches;
  function bindPreviews() {
    if (!canHover) return;
    preview.classList.remove("show");
    $$(".project").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        if (!el.dataset.image) return;
        previewImg.src = el.dataset.image;
        preview.classList.toggle("icon", el.dataset.imageStyle === "icon");
        preview.classList.add("show");
      });
      el.addEventListener("mouseleave", () => preview.classList.remove("show"));
    });
  }
  if (canHover) {
    let px = 0, py = 0, tx = 0, ty = 0;
    // ícones ficam colados no cursor; imagens retangulares, mais afastadas
    addEventListener("mousemove", (e) => {
      tx = e.clientX + (preview.classList.contains("icon") ? 60 : 200);
      ty = e.clientY;
    });
    const follow = () => {
      px += (tx - px) * 0.15; py += (ty - py) * 0.15;
      preview.style.left = px + "px"; preview.style.top = py + "px";
      requestAnimationFrame(follow);
    };
    follow();
  }

  /* ---------- Relógio local ---------- */
  function tick() {
    const time = new Intl.DateTimeFormat(lang === "pt" ? "pt-BR" : "en-GB", { hour: "2-digit", minute: "2-digit", timeZone: D.timezone }).format(new Date());
    $("#clock").textContent = `${time} ${UI[lang].local}`;
  }
  setInterval(tick, 30000);

  /* ---------- Troca de idioma e tema ---------- */
  $("#langToggle").addEventListener("click", () => {
    lang = lang === "en" ? "pt" : "en";
    try { localStorage.setItem("lang", lang); } catch (e) {}
    render();
  });

  $("#themeToggle").addEventListener("click", () => {
    const current = document.documentElement.dataset.theme ||
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  /* ---------- Scroll: topbar, nav ativa, reveal ---------- */
  const topbar = $(".topbar");
  addEventListener("scroll", () => topbar.classList.toggle("scrolled", scrollY > 20), { passive: true });

  const navLinks = $$(".nav a");
  const sectionObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) navLinks.forEach((a) => a.classList.toggle("active", a.hash === "#" + en.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  $$(".section").forEach((s) => sectionObs.observe(s));

  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); revealObs.unobserve(en.target); } });
  }, { rootMargin: "0px 0px -8% 0px" });

  render();

  $$(".hero-inner > *").forEach((el, i) => {
    el.classList.add("reveal");
    setTimeout(() => el.classList.add("in"), 120 + i * 110);
  });

  /* ---------- Arte generativa: campo de fluxo no topo ---------- */
  const canvas = $("#field"), ctx = canvas.getContext("2d");
  const hero = $(".hero");
  const css = (v) => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
  let W = 0, H = 0, particles = [], time = 0, running = true;
  const mouse = { x: -9999, y: -9999 };

  // "ruído" barato por soma de senos — suficiente para um campo orgânico
  const noise = (x, y, z) =>
    Math.sin(x * 1.7 + z) * Math.cos(y * 1.3 - z * 0.7) +
    Math.sin((x + y) * 0.9 + z * 0.5) * 0.5 +
    Math.cos(x * 0.4 - y * 2.1 + z * 0.3) * 0.35;

  const spawn = () => ({ x: Math.random() * W, y: Math.random() * H, life: 60 + Math.random() * 180, accent: Math.random() < 0.04 });

  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    W = canvas.clientWidth; H = canvas.clientHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    particles = Array.from({ length: Math.round(Math.min(900, (W * H) / 1400)) }, spawn);
    ctx.clearRect(0, 0, W, H);
  }

  function step(fade = 0.06) {
    const ink = css("--ink"), accent = css("--accent");
    // apaga levemente o quadro anterior, deixando rastros
    ctx.globalCompositeOperation = "destination-out";
    ctx.globalAlpha = fade; ctx.fillRect(0, 0, W, H);
    ctx.globalCompositeOperation = "source-over";
    ctx.lineWidth = 0.8;
    const s = 0.0022;
    for (const p of particles) {
      let a = noise(p.x * s, p.y * s, time) * Math.PI * 1.5;
      const dx = p.x - mouse.x, dy = p.y - mouse.y, d2 = dx * dx + dy * dy;
      if (d2 < 22000) a += Math.atan2(dy, dx) * (1 - d2 / 22000);
      const nx = p.x + Math.cos(a) * 1.2, ny = p.y + Math.sin(a) * 1.2;
      ctx.globalAlpha = p.accent ? 0.75 : 0.3;
      ctx.strokeStyle = p.accent ? accent : ink;
      ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(nx, ny); ctx.stroke();
      p.x = nx; p.y = ny;
      if (--p.life < 0 || p.x < 0 || p.x > W || p.y < 0 || p.y > H) Object.assign(p, spawn());
    }
    ctx.globalAlpha = 1;
    time += 0.0015;
  }

  function loop() {
    if (!running) return;
    step();
    requestAnimationFrame(loop);
  }

  // com movimento reduzido: desenha um quadro estático
  const drawStatic = () => { resize(); for (let i = 0; i < 120; i++) step(0.01); };

  hero.addEventListener("mousemove", (e) => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
  });
  hero.addEventListener("mouseleave", () => { mouse.x = mouse.y = -9999; });

  addEventListener("resize", () => {
    clearTimeout(resize.timer);
    resize.timer = setTimeout(reduceMotion ? drawStatic : resize, 150);
  });

  // ao trocar o tema, limpa o canvas para as cores não se misturarem
  new MutationObserver(() => (reduceMotion ? drawStatic() : ctx.clearRect(0, 0, W, H)))
    .observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

  if (reduceMotion) {
    drawStatic();
  } else {
    resize();
    // pausa a animação quando o topo sai da tela
    new IntersectionObserver(([en]) => {
      const was = running;
      running = en.isIntersecting;
      if (running && !was) requestAnimationFrame(loop);
    }).observe(hero);
    requestAnimationFrame(loop);
  }
})();
