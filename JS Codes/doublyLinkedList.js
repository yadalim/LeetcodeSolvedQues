class Node{
    constructor(value){
        this.prev = null;
        this.data = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(value){
        if(!this.head){
        this.head = {
            prev: null,
            data : value,
            next : null
        };
        this.tail = this.head;
        this.length = 1;
        }
    }

    append(value){
        if(this.head){
            var newNode = new Node(value);
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
    }

    prepend(value){
        if(this.head){
            var newNode = new Node(value);
            newNode.prev = null;
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
            this.length++;
        }
    }

    printListBack(){
        var currentNode = this.tail;
        var arr = [];
        while(currentNode != null){
            arr.push(currentNode.data);
            currentNode = currentNode.prev;
        }
        console.log(arr);
    }

    insertAt(index,value){
        if(index===0){
            return this.prepend(value);
        }
        if(index>=this.length){
            return this.append(value);
        }
        var prevNode = this.traverseList(index-1);
        var currentNode = this.traverseList(index);
        var newNode = new Node(value);
        prevNode.next = newNode;
        newNode.next = currentNode;
        this.length++;
        this.printList();
    }

    traverseList(index){
        if(index>=this.length){
            return;
        }
        var i =0;
        var currentNode = this.head;
        for(var i = 0; i<index; i++){
            currentNode = currentNode.next;
        }
        return currentNode ;
    }

    remove(index){
        if(index===0){
            this.head = this.head.next;
            this.length--
            return;
        }
        var prevNode = this.traverseList(index-1);
        var currentNode = this.traverseList(index);
        prevNode.next = currentNode.next;
        this.length--;

    }




}


var linkedList = new LinkedList(2);
linkedList.append(3);
linkedList.prepend(1);
linkedList.printListBack();
// linkedList.insertAt(1,5);
// linkedList.remove(3);
// linkedList.printList();
