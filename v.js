//    bubble sort

// function bubblesort(arr){
//     let sorted
//    do{
//     sorted = false
//     for(let i =0 ; i<arr.length ;i++){
//         if(arr[i]>arr[i+1]){
//             temp = arr[i]
//             arr[i] = arr[i+1]
//             arr[i+1] =temp
//             sorted = true
            
//         }
//     }
//    }while(sorted)

// }

//  let arr = [11,4,66,46,78,9,5]

// bubblesort(arr)
// console.log(arr);


//insertion  sort 


// function insertionsort(arr){
//     for(let i=1;i<arr.length;i++){
//         let current = arr[i]
//         let j =i-1
//         while(j>=0 && arr[j]>current){
//         arr[j+1]=arr[j]
//         j--}
//         arr[j+1] = current
//     }
// }


// let arr = [66,34,22,67,89,12,4,3,6]
// insertionsort(arr)
// console.log(arr);


//selection sort


// function selectionsort(arr){
//     let length = arr.length


//     for(let i =0;i<length-1;i++){
//         let minindex = i


    
//     for(let j = i+1 ; j<length;j++ ) {
//         if(arr[j]<arr[minindex]){
//             minindex =j
//         }
//     }



//     if(minindex!=i){
//         temp = arr[i]
//         arr[i] =arr[minindex]
//         arr[minindex] = temp
//     }


// }
// }

// let arr = [44,23,45,67,4,5,3,0]
// selectionsort(arr)
// console.log(arr);






// class Stack{
//     constructor(){
//         this.items =[]
//     }
//     isempty(){
//        return this.items.length === 0
//     }
//     getsize(){
//         return this.items.length
//     }
//     push(values){
//         this.items.push(values)
//     }
//     pop(){
//         return this.items.pop()
//     }
//     peek(){
       
//         return this.items[this.items.length-1]
//     }
//     print(){
//         console.log(this.items.toString());
//     }
// }
// const stack = new Stack()



// console.log(stack.isempty());
// console.log(stack.getsize());


// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.pop()


// stack.print()



// class Stack{
//   constructor(){
//     this.items = []
//   }
//   isempty(){
//     return this.items.length===0
//   }
//   getsize(){
//     return this.items.length
//   }
//   push(values){
//       this.items.push(values)
//   }
//   pop(){
//     this.items.pop()
//   }
//   peek(){
//    return this.items[this.items.length-1]
//   }
//   print(){
//     console.log(this.items.toString());
//   }
// }
// const vaishnav = new Stack()


// console.log(vaishnav.isempty());
// console.log(vaishnav.getsize());
// vaishnav.push(10)
// vaishnav.push(20)
// vaishnav.push(30)
// vaishnav.pop()
// console.log(vaishnav.peek());
// vaishnav.print()





class Node{
    constructor(values){
        this.values = values
        this.next =null
    }
}
class Stack{
    constructor(){
        this.head = null 
        this.size = 0
    }
     isempty(){
        return this.size ===0
     }
     getsize(){
        return this.size
     }

     push(values){

        const node = new Node(values)
        if(this.isempty()){
            this.head = node
        }
        else{
            node.next = this.head
            this.head = node 
        }
        this.size++
        
     }
     pop(){
        this.head = this.head.next
     }
    peek(){
        return this.head.value
    }
    print(){
        if(this.isempty()){
            console.log('stack is empty');
        }else{
        let curr =this.head 
        let result =""
        while(curr){
         result += `${curr.values}`
         curr =curr.next
         
        }
        console.log(result);
    }
    }
}

const stack= new Stack()
console.log(stack.getsize());




let a = 'malayalamk'

let b =a.split('')
for(let i =0;i<b.length;i++){
    stack.push(b[i])
}



stack.print()







// class Stack{
//     constructor(){
//         this.items =[]
//     }
//     isempty(){
//       return  this.items.length ===0
//     }
//     getsize(){
//       return  this.items.length
//     }
//     push(values){
//         this.items.push(values)
//     }
//     pop(){
//         return this.items.pop()
//     }
//     peek()
// }

