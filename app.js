/* lista donde se mostraran los amigos */
let amigos = []; /* Aquí se declara una variable llamada amigos y se inicializa como un array vacío. 
// Este array se utilizará para almacenar los nombres de los amigos que se vayan agregando.*/

function agregarAmigo () { /*function agregarAmigo() { ... }: Se define una función llamada agregarAmigo. Esta función se encargará de 
    obtener el nombre del amigo desde un campo de entrada en un formulario HTML y agregarlo al array amigos.*/
    
    let inputAmigo = document.getElementById('amigo'); /*let inputAmigo = document.getElementById("amigo");: Dentro de la función,
    se obtiene una referencia al elemento HTML con el ID "amigo". Se asume que este elemento es un campo de entrada de 
    texto (<input type="text">) donde el usuario ingresará el nombre del amigo.*/
    
    let amigo = inputAmigo.value; /*let amigo = inputAmigo.value;: Se obtiene el valor (el nombre del amigo) que el usuario ha ingresado 
    en el campo de entrada y se almacena en la variable amigo.*/

    inputAmigo.addEventListener('input',function(){ /*Aquí, se está agregando un "escuchador de eventos" al elemento inputAmigo. Este escuchador está atento al evento 
      'input', que se dispara cada vez que el valor del campo de texto cambia (es decir, cada vez que el usuario escribe o pega algo en el campo).
      Cuando ocurre el evento 'input', la función anónima function(){ ... } se ejecuta.*/
      const regexSoloLetras = /[^a-zA-Z\s]/g; /* Aquí se define una expresión regular (regex) llamada regexSoloLetras. Esta expresión regular se utiliza para buscar cualquier carácter que no sea una letra (mayúscula o minúscula) o un espacio en blanco.
      Vamos a analizar la expresión regular:
      [^...]: El corchete con el ^ al principio significa "cualquier carácter que NO esté dentro de este conjunto".
      a-zA-Z: Esto representa todas las letras del alfabeto inglés, tanto mayúsculas como minúsculas.
      \s: Esto representa cualquier carácter de espacio en blanco (espacio, tabulación, salto de línea, etc.).
      /g: La "g" al final es una "bandera" que indica que la búsqueda debe ser global, es decir, debe encontrar todas las coincidencias en la cadena de texto, 
      no solo la primera.*/

      this.value = this.value.replace(regexSoloLetras, '');
      /*Aquí es donde se realiza la magia.
      this.value: Dentro de la función del escuchador de eventos, this se refiere al elemento inputAmigo (el campo de texto). Por lo tanto, this.value es el valor 
      actual del campo de texto.
      .replace(regexSoloLetras, ''): Este método .replace() se utiliza para reemplazar partes de una cadena de texto que coinciden con una expresión regular. 
      En este caso, está reemplazando cualquier carácter que coincida con regexSoloLetras (es decir, cualquier cosa que no sea una letra o un espacio) con una cadena 
      vacía ''. En otras palabras, está eliminando esos caracteres del valor del campo de texto.
      this.value = ...: Finalmente, el resultado de la operación de reemplazo se asigna de nuevo a this.value, lo que actualiza el valor del campo de texto con la 
      versión filtrada que solo contiene letras y espacios.*/

    });

    /*if (amigo === "") { ... }: Se realiza una verificación para asegurarse de que el usuario haya ingresado un nombre de amigo. 
    Si el campo de entrada está vacío (es decir, amigo es igual a una cadena vacía ""), se muestra una alerta al usuario pidiéndole que 
    ingrese un nombre. La función return; se utiliza para salir de la función en caso de que el campo esté vacío, evitando que se agregue 
    un valor vacío al array amigos.*/
    if (amigo === "") {
        alert ("Por favor, ingresa el nombre de un amigo");
        return; } 
    
    //Evitar duplicados    
    if(amigos.includes(amigo)){
        alert('El nombre ya está en la lista');
        return;
        } 

    // amigos.push(amigo); }: Si el campo de entrada no está vacío, se ejecuta esta parte del código. Aquí, se utiliza el método 
    // push() para agregar el nombre del amigo (almacenado en la variable amigo) al final del array amigos.    
    
        amigos.push(amigo);
        
        mostrarListaAmigo ();

        limpiarCaja();
        
        console.log (amigos);
    }


function limpiarCaja(){
    document.querySelector('#amigo').value=''; /*limpia el campo valor */
}    

function mostrarListaAmigo () { // Se define una función llamada listaAmigos. Esta función se encargará de actualizar el contenido de un elemento HTML 
// específico con una lista de amigos.
   
    let listaAmigos = document.getElementById("listaAmigos"); //Dentro de la función, se obtiene una referencia al elemento HTML con el ID "listaAmigos". 
    // Se asume que este elemento es un contenedor (por ejemplo, un <div> o un <ul>) donde se mostrará la lista de amigos.
    
    listaAmigos.innerHTML = ''; /*limpia la lista anterior para evitar duplicados*/


    for(let index=0; index <amigos.length; index++){ // Aquí declaramos una variable llamada index y la inicializamos en 0. Esta variable actuará como nuestro contador, 
    // indicando en qué posición del array estamos.
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