/* jshint esversion: 6 */

let Stack = function(){

    this.tail = -1;
    this.stack = [];
};

Stack.prototype.push = function(value){

    this.tail++;
    this.stack[this.tail] = value;

};

Stack.prototype.pop = function(){

    let remove = this.stack.splice(this.tail);
    this.tail--;

    return remove;
};

Stack.prototype.size = function(){

    return (this.tail + 1);

};

Stack.prototype.isEmpty = function(){

    return (this.size === 0);
};

stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack);

let value = stack.pop();

console.log(value);

console.log(stack);