// loading screen

var loadingScreen  = document.getElementById("loading-screen");
var videoBox       = document.getElementById("video-transition");
var video          = document.getElementById("transition-video");
var petalContainer = document.getElementById("ls-petals");
var branchImg      = document.getElementById("ls-branch");
var alreadyClicked = false;

// génère les pétales une fois la page chargée (besoin des coords du DOM)
window.addEventListener("load", function() {
  var rect = branchImg.getBoundingClientRect();

  for (var i = 0; i < 60; i++) {
    var petal = document.createElement("div");
    petal.className = "ls-petal";

    var x    = ((rect.left + Math.random() * rect.width)  / window.innerWidth  * 100).toFixed(1);
    var y    = ((rect.top  + Math.random() * rect.height) / window.innerHeight * 100).toFixed(1);
    var size = Math.floor(7 + Math.random() * 7);
    var hue  = Math.floor(338 + Math.random() * 22);

    petal.style.left       = x + "%";
    petal.style.top        = y + "%";
    petal.style.width      = size + "px";
    petal.style.height     = size + "px";
    petal.style.background = "hsl(" + hue + ", 80%, 80%)";

    petal.style.setProperty("--dur",   (2.5 + Math.random() * 3.5).toFixed(1) + "s");
    petal.style.setProperty("--delay", (Math.random() * 8).toFixed(1) + "s");
    petal.style.setProperty("--drop",  Math.floor(15 + Math.random() * 15) + "vh");
    petal.style.setProperty("--drift", Math.floor((Math.random() - 0.5) * 60) + "px");
    petal.style.setProperty("--r0",    Math.floor(Math.random() * 60 - 30) + "deg");
    petal.style.setProperty("--r1",    Math.floor(Math.random() * 360 - 180) + "deg");

    petalContainer.appendChild(petal);
  }
});

// clic n'importe où → lance la vidéo de transition
loadingScreen.addEventListener("click", function() {
  if (alreadyClicked) return;
  alreadyClicked = true;

  videoBox.classList.add("vt-active");
  loadingScreen.classList.add("ls-hidden");

  video.currentTime = 0;
  video.muted       = false;
  video.volume      = 1;

  video.play().catch(function() {
    // certains browsers bloquent l'audio sans interaction préalable
    video.muted = true;
    video.play();
  });

  // quand la vidéo est finie → fade out vidéo + fade in home
  video.addEventListener("ended", function() {
    var home = document.querySelector(".background-wrapper");
    if (home) home.style.opacity = "0";

    videoBox.classList.remove("vt-active");
    videoBox.classList.add("vt-fadeout");

    setTimeout(function() {
      videoBox.classList.remove("vt-fadeout");
      if (home) {
        home.classList.add("home-fadein");
        home.style.opacity = "";
      }
    }, 850);

  }, { once: true });
});


// mes projets
// pour ajouter un projet : copier un bloc, lui donner une clé unique,
// mettre les liens github/live et le nom de l'image dans assets/
var projects = {
  projet1: {
    github:  "https://github.com/eguediche/project-mood-tracker",
    live:    "https://eguediche.github.io/project-mood-tracker",
    preview: "assets/project-mood-tracker.png",
  },
  projet2: {
    github:  "https://github.com/eguediche/api-food-searcher",
    live:    "https://eguediche.github.io/api-food-searcher",
    preview: "assets/project-food-searcher.png",
  },
};


// traductions FR / EN
// about.text : mettre ma description ici (supporte le HTML pour les liens)
// project.xxx.desc : description courte du projet xxx
var translations = {
  fr: {
    "profile.title":        "Web dev full stack",
    "about.title":          "À propos de moi :",
    "about.text":           "J'ai créé ce portfolio afin de trouver une alternance pour ma 3ᵉ année de lycée à <a href=\"https://www.edenschool.fr/\" target=\"_blank\" rel=\"noopener\">EDEN School</a>. Curieux et dynamique, je me suis intéressé au code dès la classe de 3ᵉ, après avoir eu envie de créer mon propre jeu vidéo. Cette envie m'a poussé à poursuivre mes études dans le développement. Je me suis donc orienté vers <a href=\"https://www.edenschool.fr/\" target=\"_blank\" rel=\"noopener\">EDEN School</a>, une école spécialisée en développement web et web mobile full stack.",
    "tab.projects":         "Projets",
    "tab.contacts":         "Contacts",
    "tab.skills":           "Compétences",
    "nav.hint":             "← → pour changer d'onglet",
    "project.clickable":    "👆 cliquer moi",
    "project.projet1.desc": "Un projet en HTML, CSS et JS qui permet de suivre son humeur au fil du temps. Fait en éval de fin d'année, sur JS et le DOM.",
    "project.projet2.desc": "Un projet en HTML, CSS et JS qui recherche des plats via une API. Fait en fin de 1ère année.",
    "skills.mastered":      "Maîtrisé",
    "skills.learning":      "En apprentissage",
    "skills.next":          "Prochainement",
    "footer.text":          "Ce portfolio est encore en cours de développement. :)",
    "overlay.github":       "Voir sur GitHub",
    "overlay.github.sub":   "Code source du projet",
    "overlay.live":         "Voir en live",
    "overlay.live.sub":     "Hébergé sur GitHub Pages",
  },
  en: {
    "profile.title":        "Full stack web dev",
    "about.title":          "About me:",
    "about.text":           "I created this portfolio to find an apprenticeship for my 3rd year at <a href=\"https://www.edenschool.fr/\" target=\"_blank\" rel=\"noopener\">EDEN School</a>. Curious and driven, I got into coding in middle school after wanting to build my own video game. That passion led me to pursue web development studies at <a href=\"https://www.edenschool.fr/\" target=\"_blank\" rel=\"noopener\">EDEN School</a>, a school specializing in full stack web development.",
    "tab.projects":         "Projects",
    "tab.contacts":         "Contacts",
    "tab.skills":           "Skills",
    "nav.hint":             "← → to switch tabs",
    "project.clickable":    "👆 click me",
    "project.projet1.desc": "An HTML, CSS & JS project that tracks your mood over time. Built as a final year evaluation, using JS and the DOM.",
    "project.projet2.desc": "An HTML, CSS & JS project that searches for dishes via an API. Built at the end of year.",
    "skills.mastered":      "Mastered",
    "skills.learning":      "Learning",
    "skills.next":          "Coming next",
    "footer.text":          "This portfolio is still a work in progress. :)",
    "overlay.github":       "View on GitHub",
    "overlay.github.sub":   "Project source code",
    "overlay.live":         "View live demo",
    "overlay.live.sub":     "Hosted on GitHub Pages",
  },
};


// moteur de traduction — applique la langue sur tous les éléments data-i18n
var currentLang = "fr";

function applyLanguage(lang) {
  currentLang = lang;
  var t = translations[lang];

  // data-i18n → textContent (texte simple)
  document.querySelectorAll("[data-i18n]").forEach(function(el) {
    var key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // data-i18n-html → innerHTML (si j'ai des liens dans le texte)
  document.querySelectorAll("[data-i18n-html]").forEach(function(el) {
    var key = el.getAttribute("data-i18n-html");
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.documentElement.lang = lang;

  // change le drapeau vers la langue opposée
  var flag  = document.getElementById("lang-flag");
  var label = document.getElementById("lang-label");

  if (lang === "fr") {
    flag.src = "assets/flag-en.png"; flag.alt = "EN";
    if (label) label.textContent = "EN";
  } else {
    flag.src = "assets/flag-fr.png"; flag.alt = "FR";
    if (label) label.textContent = "FR";
  }
}

// clic sur le toggle pour switcher
document.getElementById("lang-toggle").addEventListener("click", function() {
  applyLanguage(currentLang === "fr" ? "en" : "fr");
});


// gestion des onglets
document.addEventListener("DOMContentLoaded", function() {
  var tabBtns     = document.querySelectorAll(".tab-btn");
  var tabContents = document.querySelectorAll(".tab-content");

  tabBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
      tabBtns.forEach(function(b) { b.classList.remove("active"); });
      tabContents.forEach(function(c) { c.classList.remove("active"); });

      btn.classList.add("active");
      var target = document.getElementById(btn.getAttribute("data-tab"));
      if (target) target.classList.add("active");

      // scroll en haut sur mobile quand on change d'onglet
      if (window.innerWidth <= 768) window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  applyLanguage("fr");
});


// navigation clavier ← →
document.addEventListener("keydown", function(e) {
  var btns = Array.from(document.querySelectorAll(".tab-btn"));
  var idx  = btns.indexOf(document.querySelector(".tab-btn.active"));

  if (e.key === "ArrowLeft"  && idx > 0)              btns[idx - 1].click();
  if (e.key === "ArrowRight" && idx < btns.length - 1) btns[idx + 1].click();
  if (e.key === "Escape") closeOverlay();
});


// overlay projet
var overlay      = document.getElementById("project-overlay");
var splitGithub  = document.getElementById("split-github");
var splitLive    = document.getElementById("split-live");
var splitPreview = document.getElementById("split-preview-img");
var closeBtn     = document.getElementById("overlay-close");

function openOverlay(key) {
  var p = projects[key];
  if (!p) return;

  splitGithub.href = p.github;
  splitLive.href   = p.live;
  splitPreview.innerHTML = '<img src="' + p.preview + '" alt="preview" />';

  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeOverlay() {
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// ouvre l'overlay au clic sur une project-card
document.querySelectorAll(".project-card").forEach(function(card) {
  card.addEventListener("click", function() {
    openOverlay(card.getAttribute("data-project"));
  });
});

closeBtn.addEventListener("click", closeOverlay);

// ferme si on clique direct sur l'overlay (pas sur un lien)
overlay.addEventListener("click", function(e) {
  if (e.target === overlay) closeOverlay();
});
