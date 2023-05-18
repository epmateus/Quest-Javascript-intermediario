const enviar = document.getElementById("submit")
const infos = document.querySelectorAll(".inputs")
const camposObrigatorios = document.querySelectorAll(".campo-obrigatorio")

enviar.addEventListener("click", function(){
    infos.forEach(function(input, indice){
        if(input.value === ""){
            input.classList.add("invalido");
            camposObrigatorios[indice].classList.add("campo-obrigatorio");
            camposObrigatorios[indice].style.display = 'block';
        } else{
            input.classList.add("valido");
            camposObrigatorios[indice].classList.remove("campo-obrigatorio")
        }
    })
})