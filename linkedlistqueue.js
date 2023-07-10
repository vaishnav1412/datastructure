// class Queue{

//     constructor(){
//         this.items = []
//     }

//     enqueue(values){
//         this.items.push(values)
//     }
//     dequeue(){
//        return  this.items.shift()
//     }
//     isempty(){
//         return this.items.length===0
//     }
//     peek(){
//         if(!this.isempty()){
//             return this.items[0]
//         }
//         return false
//     }
//     size(){
//         return this.items.length
//     }
//     print(){
//         console.log(this.items.toString());
//     }

// }

// const queue=new Queue()
// console.log(queue.isempty());


// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// console.log(queue.peek());






class Node{
    constructor(values){
        this.values = values
        Node.next = null
    }
}
class Queue{
    constructor(){
     this.head = null
     this.size =0
    }
    isempty(){
        return this.size ===0
    }
    getsize(){
        return this.size
    }
   
    
    enqueue(values){
        const node =  new Node(values)
         if(this.isempty()){
             this.head = node
         }
         else{
            let curr = this.head
            while(curr.next){
                curr = curr.next
            }
            curr.next = node
         }
         this.size++
    }
    dequeue(){
       if(this.isempty()){
        console.log('no items present');
       }
       else{
        this.head = this.head.next
       }
    }
    peek(){
        if(this.isempty()){
            console.log('the list is empty');
        }else{
            return this.head.values
        }
    }
    print(){
        if(this.isempty()){
            console.log('no values are present');
        }
        else{
            let curr = this.head
            let result =""
            while(curr){
                result +=`${curr.values}`
                curr = curr.next
            }
            console.log(result);
        }
    }
}



const queue = new Queue()
console.log(queue.getsize());

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.print()
queue.dequeue()
queue.print()
console.log(queue.peek());
