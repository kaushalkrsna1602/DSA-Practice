// 155. Min Stack

// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

 

// Example 1:

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]


var MinStack = function() {
    this.s= []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.s.length === 0) {
        this.s.push([val , val])
    } else {
        let minVal = Math.min(val , this.s[this.s.length -1][1])
        this.s.push([val, minVal])
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.s.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.s[this.s.length - 1][0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.s[this.s.length - 1] [1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */