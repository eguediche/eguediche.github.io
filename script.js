// ==================== //
// Tab Switching Logic
// ==================== //

document.addEventListener('DOMContentLoaded', function() {
    // Get all tab buttons and tab contents
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Add click event to each tab button
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the target tab from data attribute
            const targetTab = this.getAttribute('data-tab');

            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));

            // Remove active class from all tab contents
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Add active class to corresponding tab content
            const activeContent = document.getElementById(targetTab);
            if (activeContent) {
                activeContent.classList.add('active');
            }
        });
    });

    // Optional: Smooth scroll to top when switching tabs on mobile
    if (window.innerWidth <= 768) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        });
    }
});

// ==================== //
// Optional: Add keyboard navigation
// ==================== //

document.addEventListener('keydown', function(e) {
    const tabButtons = Array.from(document.querySelectorAll('.tab-btn'));
    const activeButton = document.querySelector('.tab-btn.active');
    const currentIndex = tabButtons.indexOf(activeButton);

    // Left arrow key
    if (e.key === 'ArrowLeft' && currentIndex > 0) {
        tabButtons[currentIndex - 1].click();
    }

    // Right arrow key
    if (e.key === 'ArrowRight' && currentIndex < tabButtons.length - 1) {
        tabButtons[currentIndex + 1].click();
    }
});