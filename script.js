document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const cvButton = document.getElementById('cv-button');
    const cvPath = 'assets/documents/AndresbuitragoCv-es.pdf';
    // Verificar preferencia de tema guardada o del sistema
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.add(currentTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
    }


    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        let theme = 'light-mode';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark-mode';
        }
        localStorage.setItem('theme', theme);
    });

cvButton.addEventListener('click', () => {
        window.location.href = cvPath; 
    });
});