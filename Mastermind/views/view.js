function render(content) {
    document.getElementById("spiel").innerHTML += content;
}

function implementSolution(id, color) {
    document.getElementById(id).classList.add(color);
}