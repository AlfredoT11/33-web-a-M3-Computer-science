class Node{
     constructor(data){
        this.data = data //La información que vamos a almacenar
        this.next = null //Puntero o enlace que me va a ayudar a señalar el siguiente dato de la lista enlazada
     }
}

class LinkedList{
    constructor(head = null){
        this.head = head
    }

    //Insertar un nodo la lista
    insert(data){
       //Crear un nuevo nodo que se va a enlazar a mi estructura
       let node = new Node(data)

       //Al agrear un nuevo nodo a la lista, puedo encontrarme con dos casos
       //Primer caso: La lista enlazada se encuentra vacía (head ->null )
       if(this.head == null){
            //Agrego el nodo al inicio de la lista (head -> node)
            this.head = node
       }else{
        //Segundo caso: Tengo por lo menos un nodo en la lista enlazada
            let current = this.head //Mi punto de inicio para recorrer la lista enlazada
            while(current.next != null){ //Verifico si el enlace del nodo en el que me encuentro apunta a nulo
                current = current.next
            }

            //Cuando salgo del while sé que current se encuentra en el último nodo de mi lista
            current.next = node
       }
    }

    //Borrar un elemento de la estructura
    delete(data){
        let current = this.head
        let prev = this.head

        //Para eliminar un elemento de la lista enlazada 
        //necesito primero verificar si la lista no se encutra vacía
        if(this.head != null){
            //Primer caso: El elemento que quiero borrar se encuentra en la primera posición
            if(this.head.data == data){
                current = current.next
                this.head = current
                // this.head = this.head.next <- Otra manera de expresar el código de arriba
            }else{
                //Segundo caso: El dato que quiero borrar no se encuentra en la primera posición de la lista
                while(current.data !== data && current.next !=null){//Verifico si la información de current es la que quiero borrar y si hay un nodo adelante
                    prev = current
                    current = current.next
                }

                //Cuando salgo del ciclo tengo dos opciones:
                //Opción 1.- Encontré el elemento que quiero borrar
                if(current.data == data){
                    prev.next = current.next
                }else{
                    //Opcion 2.- El elemento no se encuentra en la lista
                    console.log("El dato no se encontró en la lista");
                }
            }

        }else{
            console.log("La lista enlazada se encentra vacía");
        }
    }

    //Recorrido de la lista

    //Búsqueda de un elemento
}


let linkedlist = new LinkedList()

linkedlist.insert(1)
linkedlist.insert(2)
linkedlist.insert(3)
linkedlist.insert(4)

console.log(linkedlist);

linkedlist.delete(5)
linkedlist.delete(3)

console.log(linkedlist);