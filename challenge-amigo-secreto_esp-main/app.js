
let yaSorteado= false;
let amigos = [];

//creamos en el archivo hmtl una etiqueta ul con el id miLista para poder controlarla y modificarla
//despues se crea una variable lista para poder controlarla desde el codigo javascript
const lista = document.getElementById('miLista');


function agregarAmigo(){
const input =document.getElementById("amigo");
const nombre = input.value.trim();

//La condicion no permite que el espacio este en blanco
if(nombre===""){
alert("Por favor inserte un nombre valido")

//la condicion no permite que se ingresen numeros
}else if(nombre>=0){
alert("Por favor no inserte numeros")

}else if(nombre<0){
    alert("Por favor no inserte numeros")
}else{
amigos.push(nombre); //guarda el dato
input.value=""; //limpia el cuadro del nombre

renderLista();


}
}

//esta funcion hara que cada vez que se agrege un valor valido se resetee nuestro valor lista
//para que despues con un bucle for se recorra el array y se impriman en forma de lista los elementos del array
function renderLista(){
 
    lista.innerHTML="";
    for(let i =0; i<amigos.length; i++){
                                             
    const li =document.createElement("li");//Elemento li
    li.textContent=amigos[i]; // a cada elemento li se le asigna el valor de i dentro del array
    lista.appendChild(li);

    }
}

function sortearAmigo(){
    
    
    
    if(amigos.length===0){
        yaJugo();
    }

    else if(amigos.length===1){
    alert("Ingrese mas de 1 valor");
    amigos= [];
    lista.innerHTML="";
    }

    else {
    let tamañoDeArray=amigos.length;
    var aleatorio=(Math.floor(Math.random() * amigos.length)) ;
    console.log(aleatorio );

    //limmpiar lista y mostrar el amigo seleccionado aleatoriamente    
    lista.innerHTML="";

    lista.innerHTML="El amigo secreto es " + amigos[aleatorio];
    
    yaSorteado=true;
    

    //reinicia el array para evitar problemas
    amigos = [];
    }
}

//funcion solo para mostrar si el usuario ya sorteo numeros
function yaJugo(){
if(yaSorteado===true){
    alert("Ingrese otros nombres para seguir sorteandolos")

    //quitamos el nombre de abajo para evitar confusiones
    lista.innerHTML="";
    //volvemos a poner en false la variable de si ya fue sorteado
    yaSorteado=false;
}else{
    alert("Todavia no ha ingresado ningun nombre");
     lista.innerHTML="";
}
}












