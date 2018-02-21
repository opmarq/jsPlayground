/* jshint esversion: 6 */

let Queue = function () {

    this.tail = -1;
    this._queue = [];
};

Queue.prototype.enqueue = function (value) {

    this.tail++;
    this._queue[this.tail] = value;

};

Queue.prototype.dequeue = function () {

    let remove = this._queue.shift();
    this.tail--;

    return remove;

};

Queue.prototype.size = function () {

    return this.tail + 1;
};

Queue.prototype.isEmpty = function () {

    return (this.size === 0);
};


let queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue);

queue.dequeue();

console.log(queue);

