// Corchetes [ ]
// Ordenamiento burbuja
function ordenamientoBurbuja(arreglo){

    let huboCambio = true;
    while(huboCambio){
        huboCambio = false;
        for(let i = 0; i < arreglo.length; i++){
            // Comparamos si el elemento de la izquierda es mayor al de la derecha.
            if(arreglo[i] > arreglo[i+1]){
                // Intercambiamos los valores.
    
                // [5  4  3  1  10  21];
                //  0  1  2  3   4   5
                //  4 > 3
                // arreglo[1] = arreglo[2];
                // arreglo[1] = 3;
                // arreglo[2] = 3;
    
                let aux = arreglo[i];
                arreglo[i] = arreglo[i+1];
                arreglo[i+1] = aux;
                huboCambio = true;
                // Tarea: ¿Hay manera de no utilizar una variable auxiliar?
            }
        }
    }

}

let arreglo1 = [5, 4, 21, 0, 100, 2001, -1, 23, -2];
console.log("Arreglo desordenado: ");
//console.log([...arreglo1]);
console.log(arreglo1);


ordenamientoBurbuja(arreglo1);

console.log("Arreglo ordenado: ");
console.log(arreglo1);

// Cómo hacerlo con las herramientas de Javascript.

console.log("Utilizando el método sort()");

let arreglo2 = [5, 4, 21, 0, 100, 2001, -1, 23, -2];
console.log("Arreglo desordenado: ");
//console.log([...arreglo1]);
console.log(arreglo2);

// El método sort sin parámetros convierte los valores en cadenas y los ordena alfabeticamente.
arreglo2.sort();

console.log("Arreglo ordenado: ");
//console.log([...arreglo1]);
console.log(arreglo2);

let arreglo3 = [5, 4, 21, 0, 100, 2001, -1, 23, -2];
console.log("Arreglo desordenado: ");
//console.log([...arreglo1]);
console.log(arreglo3);

// El método sort sin parámetros convierte los valores en cadenas y los ordena alfabeticamente.
/*
 - A negative value indicates that a should come before b.
 - A positive value indicates that a should come after b.
 - Zero or NaN indicates that a and b are considered equal.

  [5, 4, 21, 0, 100, 2001, -1, 23, -2]
   0  1   2  3    4     5   6   7   8
   a  b

   0 -> 5 -> a
   1 -> 4 -> b
   a - b = 5 - 4 = 1
   Después de la evaluación
   [4, 5, 21, 0, 100, 2001, -1, 23, -2]
    0  1   2  3    4     5   6   7   8
    b  a


   [5, 4, 21, 0, 100, 2001, -1, 23, -2]
    0  1   2  3    4     5   6   7   8
              a    b

   3 -> 0 -> a
   4 -> 100 -> b
   a - b = 0 - 100 = -100
   Después de la evaluación
   [4, 5, 21, 0, 100, 2001, -1, 23, -2]
    0  1   2  3    4     5   6   7   8
              a    b

    Utilizando la operación a + b
    [5, 4, 21, 0, 100, 2001, -1, 23, -2]
    0  1   2   3    4     5   6   7   8
               a    b

   3 -> 0 -> a
   4 -> 100 -> b
   a + b = 0 + 100 = 100
   Después de la evaluación
   [4, 5, 21, 100, 0, 2001, -1, 23, -2]
    0  1   2  3    4     5   6   7   8
              b    a

    Utilizando la operación a + b
    [1, 5, 21, 0, 100, 2001, -1, 23, -2]
     0  1   2   3    4     5   6   7   8
     a  b


   1 -> 0 -> a
   5 -> 1 -> b
   a + b = 1 + 5 = 6
   Después de la evaluación
   [1, 5, 21, 100, 0, 2001, -1, 23, -2]
    0  1   2  3    4     5   6   7   8
    
*/
arreglo3.sort(function (a, b){ return a - b }); // Ordenamiento de números de menor a mayor.

console.log("Arreglo ordenado: ");
//console.log([...arreglo1]);
console.log(arreglo3);
