// ==================== //
// Tab Switching Logic
// ==================== //

document.addEventListener("DOMContentLoaded", function () {
  // Get all tab buttons and tab contents
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  // Add click event to each tab button
  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Get the target tab from data attribute
      const targetTab = this.getAttribute("data-tab");

      // Remove active class from all buttons
      tabButtons.forEach((btn) => btn.classList.remove("active"));

      // Remove active class from all tab contents
      tabContents.forEach((content) => content.classList.remove("active"));

      // Add active class to clicked button
      this.classList.add("active");

      // Add active class to corresponding tab content
      const activeContent = document.getElementById(targetTab);
      if (activeContent) {
        activeContent.classList.add("active");
      }
    });
  });

  // Optional: Smooth scroll to top when switching tabs on mobile
  if (window.innerWidth <= 768) {
    tabButtons.forEach((button) => {
      button.addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    });
  }
});

// ==================== //
// Optional: Add keyboard navigation
// ==================== //

document.addEventListener("keydown", function (e) {
  const tabButtons = Array.from(document.querySelectorAll(".tab-btn"));
  const activeButton = document.querySelector(".tab-btn.active");
  const currentIndex = tabButtons.indexOf(activeButton);

  // Left arrow key
  if (e.key === "ArrowLeft" && currentIndex > 0) {
    tabButtons[currentIndex - 1].click();
  }

  // Right arrow key
  if (e.key === "ArrowRight" && currentIndex < tabButtons.length - 1) {
    tabButtons[currentIndex + 1].click();
  }
});

// ================= //
// Language flag swapper
// ================= //

document.querySelectorAll('.flag').forEach(flag => {
    flag.addEventListener('click', () => {
        const frFlag = document.querySelector('.fr-flag');
        const gbFlag = document.querySelector('.gb-flag');

        // On inverse l'affichage des deux drapeaux
        if (gbFlag.style.display === 'none') {
            frFlag.style.display = 'none';
            gbFlag.style.display = 'block';
            // Ici : passer en français (ex: changer des textes, ou recharger page fr)
            console.log("Passage en FRANÇAIS");
            // Exemple : document.documentElement.lang = 'fr';
        } else {
            frFlag.style.display = 'block';
            gbFlag.style.display = 'none';
            // Ici : passer en anglais
            console.log("Passage en ENGLISH");
            // Exemple : document.documentElement.lang = 'en';
        }
    });
});
