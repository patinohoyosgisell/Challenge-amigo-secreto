/* lista donde se mostraran los amigos */
let amigos = []; 

function agregarAmigo () { 
    
    let inputAmigo = document.getElementById('amigo'); 
    
    let amigo = inputAmigo.value.trim(); 

    inputAmigo.addEventListener('input',function(){ 
      const regexSoloLetras = /[^a-zA-Z\s]/g; 

      this.value = this.value.replace(regexSoloLetras, '');
      
    });

   
    if (amigo === "") {
        alert ("Por favor, ingresa el nombre de un amigo");
        return; } 
    
        
    //Formatear: primera letra mayúscula, resto minúscula
    amigo=amigo.charAt(0).toUpperCase() + amigo.slice(1).toLowerCase();

    //Evitar duplicados (ignorando mayúsculas/minúsculas)
    let existe = amigos.some(nombre => nombre.toLowerCase() === amigo.toLowerCase());
    if (existe) {
        alert('El nombre ya está en la lista');
        return;
        } 
   
        amigos.push(amigo);// se guarda ya formateado
        
        mostrarListaAmigo ();

        limpiarCaja();

        console.log (amigos);
    }


function limpiarCaja(){
    document.querySelector('#amigo').value=''; /*limpia el campo valor */
}    

function mostrarListaAmigo () { 
   
    let listaAmigos = document.getElementById("listaAmigos"); 
    
    listaAmigos.innerHTML = ''; /*limpia la lista anterior para evitar duplicados*/


    for(let index=0; index <amigos.length; index++){ 
        const element = amigos[index];

    let listaHTML = document.createElement ("li");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);

    }
 
}


function sortearAmigo() {
  let cantidadAmigos = amigos.length;
  if (cantidadAmigos < 2) {
    alert("Necesitas al menos dos amigos para poder sortear");
    } else {
    let indiceAmigo = Math.floor(Math.random() * cantidadAmigos); // generar número aleatorio
    const amigoSecreto = amigos[indiceAmigo];
    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = `<li>¡El amigo secreto es: ${amigoSecreto}!</li>`;
  }
}

// Reinicia el juego a su estado inicial.
function reiniciarJuego() {
    amigos = [];
    amigo.value = '';
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}