// class Stack{
//     constructor(){
//         this.items =[]
//     }
//     push(elements){
//         this.items.push(elements)
//     }
//     pop(){
//        return this.items.pop()
//     }
//     mid(){
//       let mid=Math.floor(this.items.length/2)
//       for(let i=0;i<mid;i++){
//         stack1.push(this.pop())
//       }
//       this.pop()
//       for(let i=0;i<mid;i++){
//         this.push(stack1.pop())
//       }
//     }
//     peek(){
//        return this.item[this.items.length-1]
//     }
//     isempty(){
//         return this.items.length===0
//     }
//     getsize(){
//         return this.items.length
//     }
//     print(){
//         console.log(this.items.toString());
//     }
// }
// const stack =new Stack()
// const stack1=new Stack()
// console.log(stack.isempty());
// console.log(stack.getsize());

// stack.push(12)
// stack.push(12)
// stack.push(123)
// stack.push(12)
// stack.push(12)
// stack.mid()
// stack.print()
// console.log(stack.pop());



//reverse


class Stack{
    constructor(){
        this.items=[]
        this.items2=[]
    }
    push(elements){
        this.items.push(elements)
    }
    pop(){
      if(this.isempty()){
        console.log('the stack is empty');
      }
      while (this.items.length > 0) {
        this.items2.push(this.items.pop());
      }
     
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    isempty(){
        return this.items.length === 0
    }
    getsize(){
        return this.items.length
    }
   
    print(){
        console.log(this.items2.toString());
    }
}

const stack = new Stack()


// let k = 'vaishnav'
// for(let i =0;i<k.length;i++){
//   stack.push(k[i])
// }

// stack.pop()



// stack.print()










// class Stack{
//     constructor(){
//         this.items = []
//     }
//     push(elements){
//         this.items.push(elements)
//     }
//     pop(){
//         return this.items.pop()
//     }
//     peek(){
//         return this.items[this.items.length-1]
//     }
//     isempty(){
//         return this.items.length===0
//     }
//     getsize(){
//         return this.items.length
        
//     }
//     print(){
//         console.log(this.items.toString());
//     }
// }

// const stack  = new Stack()


// class Queue{
//     constructor(){
//         this.items = []
//     }
//     isempty(){
//         return this.items.length===0
//     }
//     getsize(){
//         return this.items.length
//     }
//     enqueue(values){
//         this.items.push(values)
//     }
//     dequeue(){
//        return this.items.shift()
//     }
//     peek(){
//         return this.items[0]
//     }
//     print(){
//         console.log(this.items.toString());
//     }
// }


// const queue = new Queue()


// console.log(queue.isempty());

// console.log(queue.getsize());
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// function removeMiddleElement(stack) {
//     if (stack.isEmpty()) {
//       return;
//     }
  
//     const tempStack = new Stack();
//     const size = stack.items.length;
//     const middleIndex = Math.floor(size / 2);
  
//     // Push elements from the original stack to the temporary stack
//     // until the middle element is reached
//     for (let i = 0; i < middleIndex; i++) {
//       tempStack.push(stack.pop());
//     }
  
//     // Skip the middle element by popping it
//     stack.pop();
  
//     // Push back the remaining elements from the temporary stack
//     // to the original stack
//     while (!tempStack.isEmpty()) {
//       stack.push(tempStack.pop());
//     }
//   }

// queue.print()
// console.log(this.items);
