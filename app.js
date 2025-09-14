// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica
//  para resolver el problema.


/* lista donde se mostraran los amigos */
let amigos = []; //  Aquí se declara una variable llamada amigos y se inicializa como un array vacío. Este array se utilizará para almacenar los nombres de los amigos que se vayan agregando.

function agregarAmigo () { //function agregarAmigo() { ... }: Se define una función llamada agregarAmigo. Esta función se encargará de obtener el nombre del amigo desde un campo de entrada en un formulario HTML y agregarlo al array amigos.
    let inputAmigo = document.getElementById("amigo"); //let inputAmigo = document.getElementById("amigo");: Dentro de la función, se obtiene una referencia al elemento HTML con el ID "amigo". Se asume que este elemento es un campo de entrada de texto (<input type="text">) donde el usuario ingresará el nombre del amigo.
    let amigo = inputAmigo.value; //let amigo = inputAmigo.value;: Se obtiene el valor (el nombre del amigo) que el usuario ha ingresado en el campo de entrada y se almacena en la variable amigo.


    //if (amigo === "") { ... }: Se realiza una verificación para asegurarse de que el usuario haya ingresado un nombre de amigo. Si el campo de entrada está vacío (es decir, amigo es igual a una cadena vacía ""), se muestra una alerta al usuario pidiéndole que ingrese un nombre. La función return; se utiliza para salir de la función en caso de que el campo esté vacío, evitando que se agregue un valor vacío al array amigos.
    if (amigo === "") {
        alert ("Por favor, ingresa el nombre de un amigo");
        return;

    //else { amigos.push(amigo); }: Si el campo de entrada no está vacío, se ejecuta esta parte del código. Aquí, se utiliza el método push() para agregar el nombre del amigo (almacenado en la variable amigo) al final del array amigos.    
    } else {
    amigos.push(amigo);

    }
}

function listaAmigos () { // Se define una función llamada listaAmigos. Esta función se encargará de actualizar el contenido de un elemento HTML específico con una lista de amigos.
    let listaAmigos =document.getElementById("listaAmigos"); //Dentro de la función, se obtiene una referencia al elemento HTML con el ID "listaAmigos". Se asume que este elemento es un contenedor (por ejemplo, un <div> o un <ul>) donde se mostrará la lista de amigos.
    listaAmigos.innerHTML = ""; //Esta línea establece el contenido HTML dentro del elemento listaAmigos como una cadena vacía (""). Esto significa que cualquier contenido que estuviera previamente dentro de ese elemento será eliminado.
}