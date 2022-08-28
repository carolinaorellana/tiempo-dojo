//Función de alerta en el navbar
function alertaTiempo(){
    alert("Loading weather report...");
}
//Función para eliminar las cookies al hacer click
//Acá usare hidden, no remove. Ya que dice en la tarea ocultar y no remover.
var tarjetaCookies = document.querySelector(".cookie");

function cerrarCookies(){
    tarjetaCookies.style.visibility = "hidden";
}
//Funcion para cambiar los grados a celcius
var valoresGrados = document.querySelectorAll("h5 span");
console.log(valoresGrados);

function valorSelector(){
    var escalaSeleccionada = document.getElementById("listaGrados").value;
    console.log(escalaSeleccionada);
    if (escalaSeleccionada ==2){
        for(i=0; i<8; i++){
            valoresGrados[i].innerHTML=Math.floor(valoresGrados[i].innerHTML*9/5+32);
        }
    }
    else {
        for(i=0; i<8; i++){
        valoresGrados[i].innerHTML=Math.floor((valoresGrados[i].innerHTML-32)*5/9+1);
        }
    }
}