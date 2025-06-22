export function darkMode() {
    const changeMode = document.getElementById("change-mode") as HTMLImageElement;
    const body = document.body;

    changeMode?.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains('dark-mode')) {
        changeMode.src = '/img/light-mode-icon.png';
        changeMode.alt = 'Simbolo de modo claro';

        document.querySelectorAll<HTMLImageElement>('.trash-icon').forEach(icon => {
            icon.src = '/img/dark-mode-delete.png';
            icon.alt = 'Ícone de deletar no modo claro';
        });
    } else {
        changeMode.src = '/img/dark-mode-icon.png';
        changeMode.alt = 'Simbolo de modo escuro';

        document.querySelectorAll<HTMLImageElement>('.trash-icon').forEach(icon => {
            icon.src = '/img/light-mode-delete.png';
            icon.alt = 'Ícone de deletar no modo escuro';
        });
    }
    });
}
