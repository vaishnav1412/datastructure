// stackimplimentation

class Stack{
    constructor(){
        this.items =[]
        this.items1 =[]
    }
    isempty(){
       return this.items.length===0
    }
    getsize(){
       return this.items.length
    }
    push(values){
        this.items.push(values)
    }
    pop(){
        if(this.isempty()){
            console.log('stack is empty');
        }
        while(this.items.length>0){
            this.items1.push(this.items.pop())
        }

       return  this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    print(){
        console.log(this.items1.toString());
    }
   
}


const stack = new Stack()
const stack1 = new Stack()
console.log(stack.isempty());
console.log(stack.getsize());


let arr ='vaishnav'
for(let i =0 ;i<arr.length;i++){

stack.push(arr[i])
}


stack.pop()

stack.print()
