document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const toggle = dropdown.querySelector('.dropdown-toggle');

    // Toggle au clic
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        dropdown.classList.toggle('show');
    });

    // Rester ouvert au hover
    dropdown.addEventListener('mouseenter', () => {
        dropdown.classList.add('show');
    });

    dropdown.addEventListener('mouseleave', () => {
        dropdown.classList.remove('show');
    });

    // Fermer si on clique ailleurs
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
});