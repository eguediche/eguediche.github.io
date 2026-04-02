// ============================================================
// Translations — ajouter une clé ici suffit, pas toucher HTML
// ============================================================

const translations = {
  fr: {
    "profile.title":    "Web dev full stack",
    "about.title":      "À propos de moi :",
    "about.text":       `J'ai créé ce portfolio afin de trouver une alternance pour ma 3ᵉ année de lycée à <a href="https://www.edenschool.fr/" target="_blank" rel="noopener">EDEN School</a>. Curieux et dynamique, je me suis intéressé au code dès la classe de 3ᵉ, après avoir eu envie de créer mon propre jeu vidéo. Cette envie m'a poussé à poursuivre mes études dans le développement. Je me suis donc orienté vers <a href="https://www.edenschool.fr/" target="_blank" rel="noopener">EDEN School</a>, une école spécialisée en développement web et web mobile full stack. Ce portfolio regroupe mes projets, mes contacts et mes compétences techniques.`,
    "tab.projects":     "Projets",
    "tab.contacts":     "Contacts",
    "tab.skills":       "Compétences",
    "nav.hint":         "← → pour changer d'onglet",
    "project.clickable":"👆 je suis clickable",
    "project.ip.desc":  "Un projet en HTML, CSS et JS qui localise une ville via une adresse IP. Réalisé en milieu d'année, c'était le début de mon apprentissage de JS et des API publiques.",
    "project.food.desc":"Un projet en HTML, CSS et JS qui recherche des plats via une API. Fait en fin de 1ère année, en moins d'une heure — c'était la fin de mon cursus JS avant d'attaquer le back-end.",
    "contact.note":     "Pour tout contact professionnel, merci de passer par l'email.",
    "skills.mastered":  "Maîtrisé",
    "skills.learning":  "En apprentissage",
    "skills.next":      "Prochainement",
    "footer.text":      "Ce portfolio est encore en cours de développement. :)",
    "lang.badge":       "FR",
    "lang.hint":        "Changer la langue 👇",
  },
  en: {
    "profile.title":    "Full stack web dev",
    "about.title":      "About me:",
    "about.text":       `I created this portfolio to find an apprenticeship for my 3rd year at <a href="https://www.edenschool.fr/" target="_blank" rel="noopener">EDEN School</a>. Curious and driven, I got into coding in middle school after wanting to build my own video game. That passion led me to pursue web development studies at <a href="https://www.edenschool.fr/" target="_blank" rel="noopener">EDEN School</a>, a school specializing in full stack web development. This portfolio showcases my projects, contacts and technical skills.`,
    "tab.projects":     "Projects",
    "tab.contacts":     "Contacts",
    "tab.skills":       "Skills",
    "nav.hint":         "← → to switch tabs",
    "project.clickable":"👆 click me",
    "project.ip.desc":  "An HTML, CSS & JS project that locates a city from an IP address. Built mid-year, it was my first dive into JS and public APIs.",
    "project.food.desc":"An HTML, CSS & JS project that searches for dishes via an API. Built at the end of year 1 in under an hour — capping off my JS learning before starting back-end.",
    "contact.note":     "For any professional contact, please use the email address.",
    "skills.mastered":  "Mastered",
    "skills.learning":  "Learning",
    "skills.next":      "Coming next",
    "footer.text":      "This portfolio is still a work in progress. :)",
    "lang.badge":       "EN",
    "lang.hint":        "Change language 👇",
  },
};

// ============================================================
// i18n engine (thanks chatgpt for explaining me how to do this in 5 minutes)
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

  // data-i18n-html → innerHTML (pour les textes avec liens <a>)
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Attribut lang de la balise <html>
  document.documentElement.lang = lang;

  // Feedback visuel sur les drapeaux
  document.querySelector(".fr-flag").classList.toggle("active-lang", lang === "fr");
  document.querySelector(".gb-flag").classList.toggle("active-lang", lang === "en");
}

// ============================================================
// Clic sur les drapeaux
// ============================================================

document.querySelectorAll(".flag").forEach((flag) => {
  flag.addEventListener("click", () => {
    applyLanguage(currentLang === "fr" ? "en" : "fr");
  });
});

// ============================================================
// Tab switching
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((c) => c.classList.remove("active"));

      this.classList.add("active");
      const target = document.getElementById(this.getAttribute("data-tab"));
      if (target) target.classList.add("active");

      if (window.innerWidth <= 768) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });

  // Init langue par défaut
  applyLanguage("fr");
});

// ============================================================
// Navigation clavier ← →
// ============================================================

document.addEventListener("keydown", (e) => {
  const btns = Array.from(document.querySelectorAll(".tab-btn"));
  const idx  = btns.indexOf(document.querySelector(".tab-btn.active"));

  if (e.key === "ArrowLeft"  && idx > 0)             btns[idx - 1].click();
  if (e.key === "ArrowRight" && idx < btns.length - 1) btns[idx + 1].click();
});
