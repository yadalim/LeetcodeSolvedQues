/*class Node{
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
        this.middle = this.head;
        this.tail = this.head;
        this.length = 1;
        }
    }

    push(value){
        if(this.head){
            var newNode = new Node(value);
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
            if(this.length % 2 !==  0)
            this.middle = this.middle.next;
        }
    }

    pop(){
        if (!this.head) {
            console.log('stack is empty')
        }
        else {
            let temp = this.tail.prev;
            this.tail = temp;
            this.tail.next = null;
            this.length--;
            if (this.length % 2 === 0)
            {
                this.middle = this.middle.prev;
            }
        }

    }

    printmiddle(){
        console.log(this.middle.data);
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


var linkedList = new LinkedList(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.printmiddle();
// linkedList.insertAt(1,5);
// linkedList.remove(3);
// linkedList.printList();
*/

class node {
	constructor(value)
	{
		this.value = value,
		this.prev = null,
		this.next = null
	}
}

class Mystack {
	constructor(){
	this.head = null,
	this.middle = this.head,
	this.tail = this.head,
	this.size = 0
	}
	
	// Function to insert value in a stack
	push(val)
	{
		if (!this.head) {
			let temp = new node(val)
			this.head = temp;
			this.middle = this.head;
			this.tail = this.head;
			this.size++
		}
		else {
			let newTail = new node(val)
			this.tail.next = newTail
			newTail.prev = this.tail
			this.tail = this.tail.next
			this.size++
			if (this.size % 2 !== 0)
			{
				this.middle = this.middle.next
			}
		}
	}
	
	// Function to remove values from stack
	pop()
	{
		if (!this.head) {
			console.log('stack is empty')
		}
		else {
			let temp = this.tail.prev
			this.tail = temp
			this.tail.next = null
			this.size--
			if (this.size % 2 === 0)
			{
				this.middle = this.middle.prev
			}
		}
	}
	
	// Function to get the middle element of the stack
	findMiddle(){
	console.log(this.middle.value)
	return this.middle.value
	}
	
	// Function to delete the middle value of the stack
	deleteMiddle()
	{
		let leader = this.middle.prev;
		let after = this.middle.next;
		leader.next = after
		after.prev = leader
		if (this.size % 2 !== 0)
		{
			this.middle = leader
		}
		else {
			this.middle = after
		}
		this.size--
		console.log(this.middle.value)
	}
	
	// Function to print the remaining stack
	printStack()
	{
		let curr = this.head;
		let arr = []
		while (curr)
		{
			arr.push(curr.value)
			curr = curr.next;
		}
		console.log(arr)
		return arr
	}
}

const helloStack = new Mystack()
helloStack.push(10)
helloStack.push(15)
helloStack.push(30)
helloStack.push(5)
helloStack.push(8)
helloStack.push(11)
helloStack.pop()
helloStack.findMiddle()
helloStack.deleteMiddle()
helloStack.deleteMiddle()
helloStack.printStack()
