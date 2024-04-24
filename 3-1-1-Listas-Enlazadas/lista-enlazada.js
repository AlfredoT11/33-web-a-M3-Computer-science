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

    //Recorrido de la lista

    //Búsqueda de un elemento
}


let ll = new LinkedList()

ll.insert(1)
ll.insert(2)
ll.insert(3)

console.log(ll);