// const enviar = document.getElementById("submit")
// const infos = document.querySelectorAll(".inputs")
// const camposObrigatorios = document.querySelectorAll(".campo-obrigatorio")

// enviar.addEventListener("click", function(){
//     infos.forEach(function(input, indice){
//         if(input.value === ""){
//             input.classList.remove("valido");
//             input.classList.add("invalido");
//             camposObrigatorios[indice].style.display = "block";
//             class stopAutoRefresh{
//                 adiciona(event){
//                     event.preventDefault();
//                 }
//             }
//         } else{
//             input.classList.remove("invalido");
//             input.classList.add("valido");
//             camposObrigatorios[indice].style.display = "none";
//             class stopAutoRefresh{
//                 add(event){
//                     event.preventDefault();
//                 }
//             }
//         }
//     })
// })

function stopAutoRefresh(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário de atualizar a página

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