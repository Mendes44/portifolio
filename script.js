// Animações e interação do site

// Efeito de fade in nas seções
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.3
    };

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, options);

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(50px)';
        fadeInObserver.observe(section);
    });
});

// Formulário de contato (simples validação e resposta)
const form = document.getElementById('contact-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-response').textContent = "Obrigado por entrar em contato, " + document.getElementById('name').value + "!";
    form.reset();
});
