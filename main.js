(() => {
  const D = window.PORTFOLIO;
  const $ = (s) => document.querySelector(s);
  const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const emph = (s) => esc(s).replace(/\*(.+?)\*/g, "<em>$1</em>");
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Conteúdo ---------- */
  document.title = `${D.name} — ${D.role}`;
  $("#brand").textContent = D.shortName;
  $("#heroEyebrow").textContent = `${D.name} · ${D.role}`;
  $("#heroTitle").innerHTML = emph(D.headline);
  $("#heroLede").textContent = D.lede;
  $("#heroLocation").textContent = D.location;
  $("#heroStatus").textContent = D.status;
  $("#footerName").textContent = `© ${new Date().getFullYear()} ${D.name}`;

  $("#aboutText").innerHTML = D.about.map((p) => `<p>${emph(p)}</p>`).join("");
  $("#skills").innerHTML = D.skills.map((s) => `<li>${esc(s)}</li>`).join("");
  $("#now").innerHTML = D.now.map((s) => `<li>${esc(s)}</li>`).join("");

  const tagList = (tags = []) => `<ul class="tags">${tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;

  $("#experience").innerHTML = D.experience.map((j) => `
    <li class="job reveal">
      <span class="job-date mono">${esc(j.start)} — ${esc(j.end || "Atual")}</span>
      <div>
        <h3>${esc(j.role)} <span class="org">· ${j.url ? `<a href="${esc(j.url)}" target="_blank" rel="noopener">${esc(j.org)}</a>` : esc(j.org)}</span></h3>
        <p>${emph(j.description)}</p>
        ${tagList(j.tags)}
      </div>
    </li>`).join("");

  /* ---------- Projetos + filtros ---------- */
  const allTags = ["Todos", ...new Set(D.projects.flatMap((p) => p.tags || []))];
  $("#filters").innerHTML = allTags.map((t, i) =>
    `<button role="tab" aria-selected="${i === 0}" data-tag="${esc(t)}">${esc(t)}</button>`).join("");

  $("#projects").innerHTML = D.projects.map((p) => `
    <li class="project reveal${p.featured ? " featured" : ""}" data-tags="${esc((p.tags || []).join("|"))}" data-image="${esc(p.image || "")}">
      <div class="project-link">
        <h3>${esc(p.title)}</h3>
        <span class="year mono">${esc(p.year)}</span>
        <p class="desc">${emph(p.description)}</p>
        <div class="project-foot">
          ${tagList(p.tags)}
          <span class="project-actions">
            ${p.link ? `<a href="${esc(p.link)}" target="_blank" rel="noopener">Ver ↗</a>` : ""}
            ${p.repo ? `<a href="${esc(p.repo)}" target="_blank" rel="noopener">Código ↗</a>` : ""}
          </span>
        </div>
      </div>
    </li>`).join("");

  $("#filters").addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    const tag = btn.dataset.tag;
    $("#filters").querySelectorAll("button").forEach((b) => b.setAttribute("aria-selected", b === btn));
    document.querySelectorAll(".project").forEach((el) => {
      el.hidden = tag !== "Todos" && !el.dataset.tags.split("|").includes(tag);
    });
  });

  /* Preview de imagem que segue o cursor (só desktop, só se o projeto tiver imagem) */
  const preview = $("#preview"), previewImg = preview.querySelector("img");
  if (matchMedia("(hover: hover)").matches) {
    let px = 0, py = 0, tx = 0, ty = 0;
    document.querySelectorAll(".project").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        if (!el.dataset.image) return;
        previewImg.src = el.dataset.image;
        preview.classList.add("show");
      });
      el.addEventListener("mouseleave", () => preview.classList.remove("show"));
    });
    addEventListener("mousemove", (e) => { tx = e.clientX + 200; ty = e.clientY; });
    const follow = () => {
      px += (tx - px) * 0.15; py += (ty - py) * 0.15;
      preview.style.left = px + "px"; preview.style.top = py + "px";
      requestAnimationFrame(follow);
    };
    follow();
  }

  /* ---------- Pessoal ---------- */
  $("#personalIntro").textContent = D.personalIntro;
  $("#personal").innerHTML = D.personal.map((c) => {
    let body;
    if (c.type === "list") body = `<ul>${c.items.map((i) => `<li>${emph(i)}</li>`).join("")}</ul>`;
    else if (c.type === "quote") body = `<blockquote>${esc(c.text)}</blockquote>${c.author ? `<cite>— ${esc(c.author)}</cite>` : ""}`;
    else body = `<p>${emph(c.text)}</p>`;
    return `<article class="card reveal"><h3 class="mono">${esc(c.title)}</h3>${body}</article>`;
  }).join("");

  /* ---------- Contato ---------- */
  $("#contactLede").textContent = D.contactLede;
  const mail = $("#contactMail");
  mail.textContent = D.email;
  mail.href = `mailto:${D.email}`;
  $("#socials").innerHTML = D.socials.map((s) =>
    `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a></li>`).join("");

  /* ---------- Relógio local ---------- */
  const clock = $("#clock");
  const tick = () => {
    clock.textContent = new Intl.DateTimeFormat("pt-BR", { hour: "2-digit", minute: "2-digit", timeZone: D.timezone }).format(new Date()) + " local";
  };
  tick(); setInterval(tick, 30000);

  /* ---------- Tema ---------- */
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

  const navLinks = [...document.querySelectorAll(".nav a")];
  const sectionObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) navLinks.forEach((a) => a.classList.toggle("active", a.hash === "#" + en.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll(".section").forEach((s) => sectionObs.observe(s));

  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); revealObs.unobserve(en.target); } });
  }, { rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));

  document.querySelectorAll(".hero-inner > *").forEach((el, i) => {
    el.classList.add("reveal");
    setTimeout(() => el.classList.add("in"), 120 + i * 110);
  });

  /* ---------- Arte generativa: campo de fluxo no topo ---------- */
  const canvas = $("#field"), ctx = canvas.getContext("2d");
  const hero = $(".hero");
  const css = (v) => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
  let W = 0, H = 0, particles = [], t = 0, running = true;
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
      let a = noise(p.x * s, p.y * s, t) * Math.PI * 1.5;
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
    t += 0.0015;
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
