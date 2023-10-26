function goToDay(day) {
    window.location.href = day + ".html";
}

document.addEventListener("DOMContentLoaded", function () {
    const cells = document.querySelectorAll(".cell");

    cells.forEach(function (cell) {
        cell.addEventListener("input", function () {
            // Salvar o conteúdo do cell em localStorage
            localStorage.setItem(cell.id, cell.innerText);
        });

        // Carregar o conteúdo salvo do localStorage
        const savedContent = localStorage.getItem(cell.id);
        if (savedContent) {
            cell.innerText = savedContent;
        }
    });
});

