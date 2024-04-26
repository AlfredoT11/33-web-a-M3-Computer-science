//Arreglo de prueba
let arreglo = [0,4,7,10,14,23,45,47,53]

//Busqueda lineal
//Complejidad: O(n)

//Busca un elemento en un arreglo de enteros y devuelve su posición
function busquedaLineal(arreglo, elemento) {
    //Recorremos el arreglo
    for (let i = 0; i < arreglo.length; i++) {
        //Verifico si el elemento del arreglo es igual al elemento buscado
        if(arreglo[i] === elemento){
            //Devuelvo su posición
            return i
            
        }
    }

    //No se encontró el elento
    return "no se econtró el elemento"
}

console.log(busquedaLineal(arreglo, 47));//Salida esperada: 7


