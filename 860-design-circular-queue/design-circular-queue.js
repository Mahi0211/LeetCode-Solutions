/**
 * @param {number} k
 */

var MyCircularQueue = function (k) {
    this.queue = [];
    this.size = k;
};

MyCircularQueue.prototype.enQueue = function (value) {
    if (this.size === this.queue.length) return false;
    this.queue.push(value);
    return true;
};

MyCircularQueue.prototype.deQueue = function () {
    if (this.queue.length === 0) return false;
    this.queue.shift();
    return true;
};

MyCircularQueue.prototype.Front = function () {
    if (this.queue.length === 0) return -1;
    return this.queue[0];
};

MyCircularQueue.prototype.Rear = function () {
    if (this.queue.length === 0) return -1;
    return this.queue[this.queue.length - 1];
};

MyCircularQueue.prototype.isEmpty = function () {
    return this.queue.length === 0;
};

MyCircularQueue.prototype.isFull = function () {
    return this.size === this.queue.length;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */