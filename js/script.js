// ===== Active Nav Link =====
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// ===== Scroll Animation for Cards =====
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    },
    {
        threshold: 0.2
    }
);

cards.forEach(card => {
    observer.observe(card);
});
