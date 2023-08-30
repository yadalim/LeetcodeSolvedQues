class Node{
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(value){
        if(!this.head){
        this.head = {
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
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
    }

    prepend(value){
        if(this.head){
            var newNode = new Node(value);
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }
    }

    printList(){
        var currentNode = this.head;
        var arr = [];
        while(currentNode != null){
            arr.push(currentNode.data);
            currentNode = currentNode.next;
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

    reverse(){
        var first = this.head;
        var second = first.next;
        this.tail = this.head;
        while(second){             // 1 -- 2 -- 3 -- 4 -- null
            var temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
            
        this.head.next = null;
        this.head = first;
        
    }




}


var linkedList = new LinkedList(1);
linkedList.append(2);
//linkedList.prepend(1);
//linkedList.printList();
//linkedList.insertAt(1,5);
//linkedList.remove(3);
linkedList.printList();
linkedList.reverse();
linkedList.printList();

