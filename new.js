class Stack {
    constructor() {
      this.queue1 = [];
      this.queue2 = [];
    }
  
    push(element) {
      this.queue1.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        console.log("Stack is empty.");
        return;
      }
  
      while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
      }
  
      return this.queue1.shift();
    }
  
    top() {
      if (this.isEmpty()) {
        console.log("Stack is empty.");
        return;
      }
  
      while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
      }
  
      const topElement = this.queue1[0];
  
      this.queue2.push(this.queue1.shift()); // Move the last element to queue2
  
      // Swap the names of queue1 and queue2 (not required)
      // [this.queue1, this.queue2] = [this.queue2, this.queue1];
  
      return topElement;
    }
  
    isEmpty() {
      return this.queue1.length === 0;
    }
  }
  
  // Usage example:
  const stack = new Stack();
  
  stack.push(123);
  
  
  console.log(stack.top()); // Output: 3
  
  console.log(stack.pop()); // Output: 3
  
  console.log(stack.top()); // Output: 2
  
  console.log(stack.isEmpty()); // Output: false
  
  console.log(stack.pop()); // Output: 2
  console.log(stack.pop()); // Output: 1
  
  console.log(stack.isEmpty()); // Output: true
  console.log(stack.pop()); // Output: Stack is empty.