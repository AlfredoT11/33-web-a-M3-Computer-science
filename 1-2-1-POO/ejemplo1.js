//Paso 1. Definimos la clase
class Animal{
    //Paso 1. Definimos sus atributos en el constructor
    constructor(colorOjos, noOjos, color, noPatas, nombre = ""){
        this.colorOjos = colorOjos
        this.noOjos = noOjos
        this.color = color
        this.noPatas = noPatas
        this.nombre = nombre
    }
    //Paso 2. Definimos sus métodos
    hablar(sonido){
        console.log(sonido);
    }

    comer(){
        console.log("comiendo...");
    }

    caminar(){
        console.log("caminando...");
    }
}


//Paso 3. Instanciamos la clase, creamos el/los objetos
let gato = new Animal("verde", 2, "café", 4)
let perro = new Animal("café", 2, "amarillo", 4, "Firulais")

console.log(gato);
console.log(gato.hablar("Miau"));
console.log(gato.comer());
console.log(perro);
console.log(perro.hablar("wof wof"));