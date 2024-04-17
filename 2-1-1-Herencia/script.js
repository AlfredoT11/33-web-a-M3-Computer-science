// Encapsulamiento
class CuentaDeBanco{

    #dinero;

    constructor(id, titular, dinero){
        this.id = id;
        this.titular = titular;
        this.#dinero = dinero;
    }

    mostrarInformacion(){
        console.log(`${this.titular} tiene ${this.#dinero} MXN`);
        //console.log(this.titular + ' tiene ' + this.dinero + ' MXN');
    }

    // Los métodos get y set.
}

let cuenta1 = new CuentaDeBanco(1, 'Pedro', 5000);
cuenta1.mostrarInformacion();

//cuenta1.#dinero = 1000000;
cuenta1.mostrarInformacion();

// Herencia
class Pokemon{

    constructor(nombre, poderDeAtaque, nivelDeVida){
        this.nombre = nombre;
        this.poderDeAtaque = poderDeAtaque;
        this.nivelDeVida = nivelDeVida;
    }

    atacar(pokemonAtacado){
        console.log(`${this.nombre} está atacando a ${pokemonAtacado.nombre}`);
        console.log(`El nivel de vida de ${pokemonAtacado.nombre} ANTES del ataque es ${pokemonAtacado.nivelDeVida}`);
        pokemonAtacado.nivelDeVida -= this.poderDeAtaque;
        console.log(`El nivel de vida de ${pokemonAtacado.nombre} DESPUÉS del ataque es ${pokemonAtacado.nivelDeVida}`);
    }

}

// class <Nombre de la Subclase> extends <Nombre de la clase Padre>
class PokemonFuego extends Pokemon{
    constructor(nombre, poderDeAtaque, nivelDeVida, colorDeFlama){
        // Este método manda a llamar al constructor de la clase padre.
        // SIEMPRE se tiene que mandar a llamar al constructor de la clase padre en el constructor de la clase hija.
        super(nombre, poderDeAtaque, nivelDeVida); 
        this.colorDeFlama = colorDeFlama;
    }

    // Sobreescritura de método = Reescribir el comportamiento de un método de la clase padre en la clase hija
    atacar(pokemonAtacado){
        this.quemar(pokemonAtacado);
    }

    // Este es un método exclusivo de la clase hija.
    quemar(pokemonAtacado){
        console.log(`${this.nombre} está quemando a ${pokemonAtacado.nombre}`);
        console.log(`El nivel de vida de ${pokemonAtacado.nombre} ANTES del ataque es ${pokemonAtacado.nivelDeVida}`);
        pokemonAtacado.nivelDeVida -= this.poderDeAtaque * 1.2;
        console.log(`El nivel de vida de ${pokemonAtacado.nombre} DESPUÉS del ataque es ${pokemonAtacado.nivelDeVida}`);
    }
}

class PokemonElectrico extends Pokemon{
    constructor(nombre, poderDeAtaque, nivelDeVida, voltaje){
        super(nombre, poderDeAtaque, nivelDeVida); 
        this.voltaje = voltaje;
    }

    atacar(pokemonAtacado){
        this.electrocutar(pokemonAtacado);
    }

    electrocutar(pokemonAtacado){
        console.log(`${this.nombre} está electrocutando a ${pokemonAtacado.nombre}`);
        console.log(`El nivel de vida de ${pokemonAtacado.nombre} ANTES del ataque es ${pokemonAtacado.nivelDeVida}`);
        pokemonAtacado.nivelDeVida -= this.poderDeAtaque * 1.4;
        console.log(`El nivel de vida de ${pokemonAtacado.nombre} DESPUÉS del ataque es ${pokemonAtacado.nivelDeVida}`);
    }
}

/*
Este fragmento de código es lo que tendríamos que hacer si no existiera la Herencia
class PokemonFuego{
    constructor(nombre, poderDeAtaque, nivelDeVida, colorDeFlama){
        this.nombre = nombre;
        this.poderDeAtaque = poderDeAtaque;
        this.nivelDeVida = nivelDeVida;
        this.colorDeFlama = colorDeFlama;
    }

    atacar(pokemonAtacado){
        console.log(`${this.nombre} está atacando a ${pokemonAtacado.nombre}`);
        console.log(`El nivel de vida de ${pokemonAtacado.nombre} ANTES del ataque es ${pokemonAtacado.nivelDeVida}`);
        pokemonAtacado.nivelDeVida -= this.poderDeAtaque;
        console.log(`El nivel de vida de ${pokemonAtacado.nombre} DESPUÉS del ataque es ${pokemonAtacado.nivelDeVida}`);
    }

    quemar(pokemonAtacado){
        console.log(`${this.nombre} está atacando a ${pokemonAtacado.nombre}`);
        console.log(`El nivel de vida de ${pokemonAtacado.nombre} ANTES del ataque es ${pokemonAtacado.nivelDeVida}`);
        pokemonAtacado.nivelDeVida -= this.poderDeAtaque * 1.2;
        console.log(`El nivel de vida de ${pokemonAtacado.nombre} DESPUÉS del ataque es ${pokemonAtacado.nivelDeVida}`);
    }

}

class PokemonElectrico{
    constructor(nombre, poderDeAtaque, nivelDeVida, voltaje){
        this.nombre = nombre;
        this.poderDeAtaque = poderDeAtaque;
        this.nivelDeVida = nivelDeVida;
        this.voltaje = voltaje;
    }

    atacar(pokemonAtacado){
        console.log(`${this.nombre} está atacando a ${pokemonAtacado.nombre}`);
        console.log(`El nivel de vida de ${pokemonAtacado.nombre} ANTES del ataque es ${pokemonAtacado.nivelDeVida}`);
        pokemonAtacado.nivelDeVida -= this.poderDeAtaque;
        console.log(`El nivel de vida de ${pokemonAtacado.nombre} DESPUÉS del ataque es ${pokemonAtacado.nivelDeVida}`);
    }

    electrocutar(pokemonAtacado){
        console.log(`${this.nombre} está atacando a ${pokemonAtacado.nombre}`);
        console.log(`El nivel de vida de ${pokemonAtacado.nombre} ANTES del ataque es ${pokemonAtacado.nivelDeVida}`);
        pokemonAtacado.nivelDeVida -= this.poderDeAtaque * 1.4;
        console.log(`El nivel de vida de ${pokemonAtacado.nombre} DESPUÉS del ataque es ${pokemonAtacado.nivelDeVida}`);
    }

}
*/

class Combate{

    constructor(pokemonA, pokemonB){
        this.pokemonA = pokemonA;
        this.pokemonB = pokemonB;
    }

    comenzarCombate(){
        console.log(`¡Comienza el combate!!!!!!!`)
    }

    pokemonAAtacaAPokemonB(){
        //instanceof es un operador que permite verificar el tipo de dato de un objeto.
        /* Ejemplo de ataques especiales sin polimorfismo (sobreescritura de métodos)
        if(this.pokemonA instanceof PokemonFuego){
            this.pokemonA.quemar(this.pokemonB);
        }else if(this.pokemonA instanceof PokemonElectrico){
            this.pokemonA.electrocutar(this.pokemonB);
        }else{
            this.pokemonA.atacar(this.pokemonB);
        }*/
        this.pokemonA.atacar(this.pokemonB);
    }

    pokemonBAtacaAPokemonA(){
        /*
        if(this.pokemonB instanceof PokemonFuego){
            this.pokemonB.quemar(this.pokemonA);
        }else if(this.pokemonB instanceof PokemonElectrico){
            this.pokemonB.electrocutar(this.pokemonA);
        }else{
            this.pokemonB.atacar(this.pokemonA);
        }
        */
        this.pokemonB.atacar(this.pokemonA);
    }

}

let pokemon1 = new PokemonElectrico('Pikachu', 50, 500);
let pokemon2 = new PokemonFuego('Charmander', 75, 300, 'Azul');
let combate1 = new Combate(pokemon1, pokemon2);
combate1.comenzarCombate();
combate1.pokemonAAtacaAPokemonB();
combate1.pokemonBAtacaAPokemonA();


/*
pokemon1.atacar(pokemon2);
pokemon2.quemar(pokemon1);
pokemon1.electrocutar(pokemon2);
*/

// Camino recomendado de POO
// Pilares de POO -> Diagrama de clases -> Principios SOLID -> Patrones de diseño

/*
    Ejercicio: Crear una clase Animal con la siguiente información: nombre, especie, edad.
    Los animales son capaces de saludar con un sonido. Por defecto los animales hacen el sonido 
    "brrr" y dicen su nombre.
    Crear 3 animales diferentes. Cada animal tendrá una característica única que los diferencíe 
    de los demás.
    Modificar el saludo de los animales para que cada uno haga su sonido específico.
    Crear una clase Rancho que tenga un conjunto de animales. Crear un método que permita que
     todos los animales en el rancho saluden.
*/


