console.log('❗Hola desde LinkLists❗ 👋');

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkLists {
    constructor(){
        this.head = null;
        this.tail = null;
        this.lenght = 0;
    }
    isEmpty() {
        return this.lenght === 0
    }
    push(value){
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode
            this.tail = newNode;
        }

        this.lenght++;
    }
    
    pop(){
        if(this.isEmpty()){
            return null
        } else if (this.lenght===1){
            const nodeToRemove = this.head;
            this.head = null;
            this.tail=null;
            this.lenght = 0
            return nodeToRemove;
        } else { // cuando hay múltiples nodos en la LinkedList
            let currentNode = this.head;
            const nodeToRemove = this.tail;
            let secondToLastNode;
            while(currentNode){
                if(currentNode.next === this.tail){
                    secondToLastNode = currentNode;
                    break;
                }
                currentNode = currentNode.next;
            }
            secondToLastNode.next = null;
            this.tail = secondToLastNode;
            this.lenght--;
            return nodeToRemove; // nodo removido
        } 
    }

    get(idex){
        // sólo puede haber índices positivos
        // no puede ser más alto que el largo de la lista
        // si la lista está vacía
        if(index<0||index >this.lenght||this.isEmpty()){
            return null;
        }
        //queremos el primer nodo
        if(index === 0){
            return this.head;
        }
        //queremos el último nodo
        if (index=== (this.lenght -1)) {
            return this.tail;
        }
        // queremos un nodo n que no es el último ni el primero
        let currentNode = this.Node;
        let iterator = 0;
        while(iterator<index){
            iterator++;
            currentNode = currentNode.next;
        }
        return currentNode

    }

}