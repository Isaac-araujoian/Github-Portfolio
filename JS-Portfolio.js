document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('formulario').addEventListener('submit', function (e) {
        e.preventDefault();

        const nome = e.target.nome.value;

        const mensagemStatus = document.getElementById('mensagem-status');
        mensagemStatus.innerText = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
        mensagemStatus.style.color = 'var(--cor-primaria)';
        mensagemStatus.style.fontWeight = 'bold';

        setTimeout(() => {
            mensagemStatus.innerText = '';
        }, 5000);

        e.target.reset();
    });

    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});