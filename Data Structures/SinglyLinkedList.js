/* jshint esversion: 6 */

let LinkedList = function(){
    this.head = null;
};

let LinkedNode = function(value){

    this.data = value;

    this.next = null;
};

LinkedList.prototype.insert = function(value){

    let node = new LinkedNode(value);

    node.next = this.head;

    this.head = node;

};

LinkedList.prototype.remove = function(val){

    if(this.head == null)
        return;

    let current = this.head;

    while(current.next)
    {
        if(current.next.data == val)
        {
            current.next = current.next.next;
        }

        current = current.next;
    }

};

LinkedList.prototype.find = function(val){

    let current = this.head;

    while(current)
    {
        
        if(current.data == val)
            return current;

        current = current.next;
    }

};

LinkedList.prototype.reverse = function(){

    
    let current = this.head;
    let prev = null;
    let next = null;

    while(current)
    {

        // save the next element to use it 
        next = current.next;

        // change the pointer to point on the last previous element 
        current.next = prev;


        // the previous became the current for the next iteration
        prev = current;

        // move to the next element 
        current = next;

    }

    this.head = prev;

};

LinkedList.prototype.print = function(){

    let current = this.head;

    while(current)
    {
        console.log(current);
        current = current.next;
    }
};

let linkedList = new LinkedList();

linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);
linkedList.insert(4);

linkedList.print();

linkedList.remove(2);
linkedList.reverse();

linkedList.print();