// ============================================================
// DONNÉES PROJETS
// Ajouter un projet ici suffit — le HTML data-project fait le lien
// ============================================================

const projects = {
  ip: {
    github:    "https://github.com/eguediche/tp-ip-adress-tracker",
    live:      "https://eguediche.github.io/tp-ip-adress-tracker",
    preview:   "images/project-ip-tracker.webp",
  },
  food: {
    github:    "https://github.com/eguediche/api-food-searcher",
    live:      "https://eguediche.github.io/api-food-searcher",
    preview:   "images/project-food-searcher.png",
  },
};

// ============================================================
// TRADUCTIONS
// ============================================================

const translations = {
  fr: {
    "profile.title":     "Web dev full stack",
    "about.title":       "À propos de moi :",
    "about.text":        `J'ai créé ce portfolio afin de trouver une alternance pour ma 3ᵉ année de lycée à <a href="https://www.edenschool.fr/" target="_blank" rel="noopener">EDEN School</a>. Curieux et dynamique, je me suis intéressé au code dès la classe de 3ᵉ, après avoir eu envie de créer mon propre jeu vidéo. Cette envie m'a poussé à poursuivre mes études dans le développement. Je me suis donc orienté vers <a href="https://www.edenschool.fr/" target="_blank" rel="noopener">EDEN School</a>, une école spécialisée en développement web et web mobile full stack. Ce portfolio regroupe mes projets, mes contacts et mes compétences techniques.`,
    "tab.projects":      "Projets",
    "tab.contacts":      "Contacts",
    "tab.skills":        "Compétences",
    "nav.hint":          "← → pour changer d'onglet",
    "project.clickable": "👆 je suis clickable",
    "project.ip.desc":   "Un projet en HTML, CSS et JS qui localise une ville via une adresse IP. Réalisé en milieu d'année, c'était le début de mon apprentissage de JS et des API publiques.",
    "project.food.desc": "Un projet en HTML, CSS et JS qui recherche des plats via une API. Fait en fin de 1ère année, en moins d'une heure — c'était la fin de mon cursus JS avant d'attaquer le back-end.",
    "contact.note":      "Pour tout contact professionnel, merci de passer par l'email.",
    "skills.mastered":   "Maîtrisé",
    "skills.learning":   "En apprentissage",
    "skills.next":       "Prochainement",
    "footer.text":       "Ce portfolio est encore en cours de développement. :)",
    "lang.hint":         "Change language 👇",
    "overlay.github":    "Voir sur GitHub",
    "overlay.github.sub":"Code source du projet",
    "overlay.live":      "Voir en live",
    "overlay.live.sub":  "Hébergé sur GitHub Pages",
  },
  en: {
    "profile.title":     "Full stack web dev",
    "about.title":       "About me:",
    "about.text":        `I created this portfolio to find an apprenticeship for my 3rd year at <a href="https://www.edenschool.fr/" target="_blank" rel="noopener">EDEN School</a>. Curious and driven, I got into coding in middle school after wanting to build my own video game. That passion led me to pursue web development studies at <a href="https://www.edenschool.fr/" target="_blank" rel="noopener">EDEN School</a>, a school specializing in full stack web development. This portfolio showcases my projects, contacts and technical skills.`,
    "tab.projects":      "Projects",
    "tab.contacts":      "Contacts",
    "tab.skills":        "Skills",
    "nav.hint":          "← → to switch tabs",
    "project.clickable": "👆 click me",
    "project.ip.desc":   "An HTML, CSS & JS project that locates a city from an IP address. Built mid-year, it was my first dive into JS and public APIs.",
    "project.food.desc": "An HTML, CSS & JS project that searches for dishes via an API. Built at the end of year 1 in under an hour — capping off my JS learning before starting back-end.",
    "contact.note":      "For any professional contact, please use the email address.",
    "skills.mastered":   "Mastered",
    "skills.learning":   "Learning",
    "skills.next":       "Coming next",
    "footer.text":       "This portfolio is still a work in progress. :)",
    "lang.hint":         "Changer la langue 👇",
    "overlay.github":    "View on GitHub",
    "overlay.github.sub":"Project source code",
    "overlay.live":      "View live demo",
    "overlay.live.sub":  "Hosted on GitHub Pages",
  },
};

// ============================================================
// I18N ENGINE
// ============================================================

let currentLang = "fr";

function applyLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  // data-i18n → textContent
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // data-i18n-html → innerHTML (liens dans le texte)
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.documentElement.lang = lang;

  // ---- Flag unique : afficher le drapeau de la langue OPPOSÉE ----
  // (cliquer dessus = basculer vers cet autre langue)
  const flag   = document.getElementById("lang-flag");
  const badge  = document.getElementById("lang-badge");

  if (lang === "fr") {
    // On est en FR → montrer le drapeau EN pour pouvoir passer en EN
    flag.src = "images/flag-en.png";
    flag.alt = "Switch to English";
    if (badge) badge.textContent = "EN";
  } else {
    // On est en EN → montrer le drapeau FR pour pouvoir passer en FR
    flag.src = "images/flag-fr.png";
    flag.alt = "Passer en Français";
    if (badge) badge.textContent = "FR";
  }
}

// Clic sur le drapeau unique
document.getElementById("lang-flag").addEventListener("click", () => {
  applyLanguage(currentLang === "fr" ? "en" : "fr");
});

// ============================================================
// TAB SWITCHING
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  const tabBtns     = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      tabBtns.forEach((b) => b.classList.remove("active"));
      tabContents.forEach((c) => c.classList.remove("active"));
      this.classList.add("active");
      const target = document.getElementById(this.getAttribute("data-tab"));
      if (target) target.classList.add("active");
      if (window.innerWidth <= 768) window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // Init
  applyLanguage("fr");
});

// ============================================================
// NAVIGATION CLAVIER ← →
// ============================================================

document.addEventListener("keydown", (e) => {
  const btns = Array.from(document.querySelectorAll(".tab-btn"));
  const idx  = btns.indexOf(document.querySelector(".tab-btn.active"));
  if (e.key === "ArrowLeft"  && idx > 0)             btns[idx - 1].click();
  if (e.key === "ArrowRight" && idx < btns.length - 1) btns[idx + 1].click();
  if (e.key === "Escape") closeOverlay();
});

// ============================================================
// PROJECT OVERLAY — split screen
// ============================================================

const overlay      = document.getElementById("project-overlay");
const splitGithub  = document.getElementById("split-github");
const splitLive    = document.getElementById("split-live");
const splitPreview = document.getElementById("split-preview-img");
const closeBtn     = document.getElementById("overlay-close");

function openOverlay(projectKey) {
  const p = projects[projectKey];
  if (!p) return;

  // Injecter les URLs
  splitGithub.href = p.github;
  splitLive.href   = p.live;

  // Injecter l'image preview dans la moitié basse
  splitPreview.innerHTML = `<img src="${p.preview}" alt="preview" />`;

  // Ouvrir
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; // bloquer le scroll en dessous
}

function closeOverlay() {
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// Clic sur une project-card
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => {
    const key = card.getAttribute("data-project");
    openOverlay(key);
  });
});

// Fermer via bouton ✕
closeBtn.addEventListener("click", closeOverlay);

// Fermer en cliquant sur la ligne de séparation / zone neutre
// (pas sur les <a>, sinon le lien s'ouvre)
overlay.addEventListener("click", (e) => {
  // Si le clic est sur l'overlay lui-même (pas un <a> ou le bouton)
  if (e.target === overlay || e.target.classList.contains("split-divider")) {
    closeOverlay();
  }
});