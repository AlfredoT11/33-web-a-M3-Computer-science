// Arreglos
const animales = new Array(); // <- Estamos creando un objeto de tipo Array (class Array);

const frutas = ['Naranja', 'Pera', 'Manzana'];
console.log(frutas);

frutas.push('Fresa', 'Aguacate'); // Agrega elementos al final del arreglo.
console.log(frutas);

let frutaEliminada = frutas.pop(); // Elimina el ÚLTIMO elemento de un arreglo y regresa ese valor.
console.log(`La fruta eliminada del arreglo de la última posición fue: ${frutaEliminada}`);
console.log(frutas);

frutaEliminada = frutas.shift(); // Elimina el PRIMER elemento de un arreglo y regresa ese valor.
console.log(`La fruta eliminada del arreglo en la primera posición fue: ${frutaEliminada}`);
console.log(frutas);

const verduras = ['Zanahoria', 'Calabaza', 'Jitomate', 'Cebolla'];

//const comida = frutas + verduras; <- Esto crea una cadena de ambos arreglos.
let comida = frutas.concat(verduras); // Crea un nuevo arreglo a partir de 2 arreglos sin modificar los arreglos originales.
console.log(comida);

comida = [...frutas, ...verduras]; // Aquí es una copia de los arreglos.
console.log(comida);

console.log("Arreglos antes de modificaciones");
let comidaReferenciada = [frutas, verduras]; // Crear referencias a esos arreglos originales.
console.log(comidaReferenciada);

let comidaCopia = [[...frutas], [...verduras]]; // Aquí se crea directamente una copia de los elementos.
console.log(comidaCopia);

console.log("Arreglos después de modificaciones");
frutas.push('Mandarina');
verduras.push('Esparragos');

console.log(comidaReferenciada);
console.log(comidaCopia);

// Pilas
class Pila{
    constructor(){
        this.datos = [];
    }


    // método push
    agregar(nuevoDato){
        this.datos.push(nuevoDato);
    }

    // método pop
    eliminar(){
        if(this.datos.length == 0){
            return null;
        }
        return this.datos.pop();
    }

    // método peek
    mostrarUltimoElemento(){
        if(this.datos.length == 0){
            return null;
        }
        return this.datos[this.datos.length - 1];
    }

}

let pilaNavegacionWeb = new Pila();
pilaNavegacionWeb.agregar('www.google.com');
pilaNavegacionWeb.agregar('www.youtube.com');
pilaNavegacionWeb.agregar('www.youtube.com/TaylorSwift');
pilaNavegacionWeb.agregar('www.youtube.com/TaylorSwift/Karma');

console.log('Navegación web');

console.log(`Estoy en la página: ${pilaNavegacionWeb.mostrarUltimoElemento()}`);
console.log(`Me regreso a la página anterior...`);
pilaNavegacionWeb.eliminar();
console.log(`Estoy en la página: ${pilaNavegacionWeb.mostrarUltimoElemento()}`);
console.log(`Me regreso a la página anterior...`);
pilaNavegacionWeb.eliminar();
console.log(`Estoy en la página: ${pilaNavegacionWeb.mostrarUltimoElemento()}`);
console.log(`Me regreso a la página anterior...`);
pilaNavegacionWeb.eliminar();
console.log(`Estoy en la página: ${pilaNavegacionWeb.mostrarUltimoElemento()}`);
console.log(`Me regreso a la página anterior...`);
pilaNavegacionWeb.eliminar(); //Elimino el último elemento de la pila
console.log(`Estoy en la página: ${pilaNavegacionWeb.mostrarUltimoElemento()}`); // Mi pila está vacía.
pilaNavegacionWeb.eliminar();

function funcionA(){
    console.log('Función A');
}

function funcionB(){
    funcionA();
    console.log('Funcion B');
}

function funcionC(){
    funcionB();
    console.log('Funcion C');
}

function funcionD(){
    funcionC();
    console.log('Funcion D');
}

funcionD();

class Cola{
    constructor(){
        this.elementos = [];
    }

    //enqueue
    agregarElemento(nuevoElemento){
        this.elementos.unshift(nuevoElemento);
    }

    //deqeue
    eliminarElemento(){
        if(this.elementos.length == 0){
            return null;
        }
        return this.elementos.pop();
    }

    // back <- Mostrar el último elemento en llegar a la cola
    mostrarUltimoElemento(){
        if(this.elementos.length == 0){
            return null;
        }
        return this.elementos[0];
    }

    // front <- Mostrar el primer elemento que llegó a la cola
    mostrarPrimerElemento(){
        if(this.elementos.length == 0){
            return null;
        }
        return this.elementos[this.elementos.length - 1];
    }
}

console.log('Fila de tortillas');
let colaDeTortillas = new Cola();
colaDeTortillas.agregarElemento('Juliana');
colaDeTortillas.agregarElemento('Héctor');
colaDeTortillas.agregarElemento('Roberto');
colaDeTortillas.agregarElemento('Arturo');

console.log(`La primera persona que llegó a la fila fue: ${colaDeTortillas.mostrarPrimerElemento()}`);
console.log(`La última persona que llegó a la fila fue: ${colaDeTortillas.mostrarUltimoElemento()}`);

console.log('Atendiendo a la primera persona...');
colaDeTortillas.eliminarElemento();

console.log(`La siguiente persona en ser atendida es: ${colaDeTortillas.mostrarPrimerElemento()}`);
console.log(`La última persona en ser atendida será : ${colaDeTortillas.mostrarUltimoElemento()}`);

console.log('Atendiendo a la siguiente persona...');
colaDeTortillas.eliminarElemento();

console.log(`La siguiente persona en ser atendida es: ${colaDeTortillas.mostrarPrimerElemento()}`);
console.log(`La última persona en ser atendida será : ${colaDeTortillas.mostrarUltimoElemento()}`);

console.log('Atendiendo a la siguiente persona...');
colaDeTortillas.eliminarElemento();

console.log(`La siguiente persona en ser atendida es: ${colaDeTortillas.mostrarPrimerElemento()}`);
console.log(`La última persona en ser atendida será : ${colaDeTortillas.mostrarUltimoElemento()}`);

console.log('Se agrega Galilea a la fila de las tortillas...');
colaDeTortillas.agregarElemento('Galilea');
console.log(`La siguiente persona en ser atendida es: ${colaDeTortillas.mostrarPrimerElemento()}`);
console.log(`La última persona en ser atendida será : ${colaDeTortillas.mostrarUltimoElemento()}`);

console.log('Atendiendo a la siguiente persona...');
colaDeTortillas.eliminarElemento();

console.log(`La siguiente persona en ser atendida es: ${colaDeTortillas.mostrarPrimerElemento()}`);
console.log(`La última persona en ser atendida será : ${colaDeTortillas.mostrarUltimoElemento()}`);

/*

    Ejercicio de Pilas
    Escribir una función que reciba como parámetros una pila y un número.
    La función debe eliminar n elementos de la pila.
    function eliminarElementos(pila, elementosABorrar){

    }

    eliminarElementos(pila, 3);
    [5, 4, 1, 9, 7] -> [5, 4]

    Ejercicio de Colas
    Se tiene una cola en la cual se han repartido tickets con el orden de atención. Sin embargo, llegada la hora de inicio hay muchos “colados”, es por esto que se le ordena al vigilante que retire a todos aquellos que no tienen ticket. Muestra la cola inicial, qué elementos fueron retirados de la cola y la cola final.
    Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve a encolar, si no se retira.
    Cola: [ 
            { user:‘User1’, ticket:true },
            { user:‘User2’, ticket:true },
            { user:‘User3’, ticket:false },
            { user:‘User4’, ticket:true },
            { user:‘User5’, ticket:false },
            { user:‘User6’, ticket:false },
            { user:‘User7’, ticket:true },
            { user:‘User8’, ticket:true },
            { user:‘User9’, ticket:true },
            { user:‘User10’, ticket:false },
            { user:‘User11’, ticket:true },
    ];


*/

// Ejercicio colas

console.log("Ejercicio de filtrado de tickets");

let colaEvento = [
    { user: "User1", ticket:true },
    { user: "User2", ticket:true },
    { user: "User3", ticket:false },
    { user: "User4", ticket:true },
    { user: "User5", ticket:false },
    { user: "User6", ticket:false },
    { user: "User7", ticket:true },
    { user: "User8", ticket:true },
    { user: "User9", ticket:true },
    { user: "User10", ticket:false },
    { user: "User11", ticket:true },
]

let colaPersonasConBoletoValido = new Cola();

for(let i = 0; i < colaEvento.length; i++){
    if(colaEvento[i].ticket){
        colaPersonasConBoletoValido.agregarElemento(colaEvento[i]);
    }
}


while(colaPersonasConBoletoValido.mostrarPrimerElemento() != null){
    console.log(colaPersonasConBoletoValido.mostrarPrimerElemento().user);
    colaPersonasConBoletoValido.eliminarElemento();
}

