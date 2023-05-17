const inputs = document.querySelectorAll(".inputs")
const enviar = document.getElementById("submit")
const erro = document.getElementsByClassName("mensagem-erro")

inputs.forEach(function(input){
    if(input == undefined){
        input.classList.add("valido");
    } else{
        input.classList.remove("valido");
    }
})

enviar.addEventListener("click", function(){
    inputs.forEach(function(){
        if(inputs == null){
            inputs.classList.add("invalido");
            erro.style.display = "block";
        } else{
            inputs.classList.add("valido");
            erro.style.display = "none";
        }
    })
})
