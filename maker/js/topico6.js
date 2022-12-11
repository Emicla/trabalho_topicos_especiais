function mudarTexto(tag) {
    if (tag.textContent == "Click aqui") {
        tag.textContent = "Olha só, funcionou!";

    } else {
        tag.textContent = "Click aqui";
    }
}