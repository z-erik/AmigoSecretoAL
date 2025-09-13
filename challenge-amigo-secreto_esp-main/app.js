// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//primer comit jejej

let amigos = [];

const lista = document.getElementById('miLista');


function agregarAmigo(){
const input =document.getElementById("amigo");
const nombre = input.value.trim();

//si el nombre esta en blanco que ingrese un
if(nombre===""){
alert("Por favor inserte un nombre valido")

}else
if(nombre>=0){
alert("Por favor no inserte numeros")

}else if(nombre<0){
    alert("Por favor no inserte numeros")
}else{
amigos.push(nombre); //guarda el dato
input.value=""; //limpia el cuadro del nombre
console.log(amigos)
renderLista();


}
}


function renderLista(){
 
    lista.innerHTML="";
    for(let i =0; i<amigos.length; i++){
    const li =document.createElement("li");
    li.textContent=amigos[i];
    lista.appendChild(li);

    }
}

function sortearAmigo(){
    
    
    
    if(amigos.length===0){
        alert("Todavia no ha ingresado ningun nombre");
    }

    else {
    let tamañoDeArray=amigos.length;
    var aleatorio=Math.floor(Math.random() * amigos.length) +1;
    console.log(aleatorio );

    //limmpiar lista y mostrar el amigo seleccionado aleatoriamente    
    lista.innerHTML="";

    lista.innerHTML="El amigo seleccionado es " + amigos[aleatorio];

    }
}









