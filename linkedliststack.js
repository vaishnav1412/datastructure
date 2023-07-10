class Node {
    constructor(value) {
        this.value = value
        node.next = values
    }
}
class Stack {
    constructor() {
        this.head = null
        this.size = 0
    }
    isempty() {
        return this.size === 0
    }
    getsize() {
        return this.size
    }
    push() {
        const node = new Node(value)
        if (this.isempty()) {
            this.head = node
        }
        else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    pop() {
        if (this.isempty()) {
            console.log('your list is empty');
        }
        else {
            this.head = this.head.next
            this.size--
        }
    }
    peek() {
        return this.head.value
    }
   print(){
    if(this.isempty()){
        console.log('your list is empty');
    }
    else{
      let curr= this.head
      let result =""
      while(curr){
        result+=`${curr.value}`
        curr = curr.next
      }
      console.log(result);

    }
   }
}