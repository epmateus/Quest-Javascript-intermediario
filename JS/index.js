function stopAutoRefresh(event) {
    event.preventDefault();

    const infos = document.querySelectorAll(".inputs");
    const camposObrigatorios = document.querySelectorAll(".campo-obrigatorio");
    
    infos.forEach(function (input, indice) {
        if (input.value === "") {
            input.classList.remove("valido");
            input.classList.add("invalido");
            camposObrigatorios[indice].style.display = "block";
        } else {
            input.classList.remove("invalido");
            input.classList.add("valido");
            camposObrigatorios[indice].style.display = "none";
        }
    });
}