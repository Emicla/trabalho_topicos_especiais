function mudarTexto(tag) {
    if (tag.textContent == "Click aqui") {
        tag.textContent = "Olha só, funcionou!";

    } else {
        tag.textContent = "Click aqui";
    }
}

function mostrarDados(tag) {
    tag.classList.add("invisivel");
    tag.parentElement.parentElement.children[1].classList.remove("invisivel");
}

function esconderDados(tag){
    tag.parentElement.children[1].classList.remove("invisivel");
    tag.parentElement.parentElement.children[1].classList.add("invisivel");
}