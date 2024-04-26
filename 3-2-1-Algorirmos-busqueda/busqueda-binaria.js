//Arreglo de prueba
let arreglo = [0,4,7,10,14,23,45,47,53]

//Búsqueda binaria
//Complejidad : O(log(n))

//Buscar un elemento en arreglo de enteros y devolver su posición
function busquedaBinaria(arreglo, elemento) {
    let inicio = 0
    let fin = arreglo.length - 1
    //Itero mi búsqueda mientras el inicio sea menor o igual al fin del arreglo
    while (inicio <= fin) {
        //Paso 1: Definir la mitad de mi arreglo
        let medio = Math.floor((inicio + fin) / 2)

        //Escenario 1: El elemento que estoy buscando se encuentra a la mitad
        if(arreglo[medio]===elemento){
            //Devuelvo el punto medio
            return medio
        //Escenario 2: El elemento que estoy buscando es MENOR al punto medio
        }else if(elemento < arreglo[medio]){
           fin = medio - 1
        }else{
        //Escenario 3: El elemento que estoy buscando es MAYOR al punto medio
            inicio = medio + 1
        }
    }

    return "No se encontró el elemento"
}

console.log(busquedaBinaria(arreglo, 47));//Salida esperada: 7