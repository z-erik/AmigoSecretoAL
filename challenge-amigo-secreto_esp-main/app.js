// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//primer comit jejej

let amigos = [];
function agregarAmigo(){

const input =document.getElementById("amigo");
const nombre = input.value.trim();

//si el nombre esta en blanco que ingrese un
if(nombre===""){
alert("Por favor inserte un nombre valido")

}else if(nombre>=0){
alert("Por favor no inserte numeros")

}else if(nombre<0){
    alert("Por favor no inserte numeros")
}else{
amigos.push(nombre); //guarda el dato
input.value=""; //limpia el cuadro del nombre
console.log(amigos)
}
}





