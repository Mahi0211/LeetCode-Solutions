var MinStack = function () {
    this.stack = [];
    this.minStack = [];
};

MinStack.prototype.push = function (val) {
    this.stack.push(val);
    //   if (
    //     this.minStack.length === 0 ||
    //     val <= this.minStack[this.minStack.length - 1]
    //   ) {
    //     this.minStack.push(val);
    //   }
    const lastMin = this.minStack.length === 0 ? val : this.minStack.at(-1);
    this.minStack.push(Math.min(val, lastMin));
};

MinStack.prototype.pop = function () {
    this.stack.pop();
    //     if (val === this.minStack[this.minStack.length - 1]) {
    //     this.minStack.pop();
    //   }
    this.minStack.pop();
};

MinStack.prototype.top = function () {
    return this.stack.at(-1);
};

MinStack.prototype.getMin = function () {
    return this.minStack.at(-1);
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */