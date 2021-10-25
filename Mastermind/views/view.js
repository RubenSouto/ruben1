function render(content) {
    document.getElementById("spiel").innerHTML += content;
}

function implementSolution(id, color) {
    // console.log(color);
    // console.log(id);
    document.getElementById(id).classList.add(color);
}