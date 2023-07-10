// class heap{
//     constuctor(){
//         this.heap =[]
//     }
//     minheap(array){
//         this.builsheap(array)
//     }
//     buildheap(array){
//         this.heap = array
//         for(let i=parent(this.heap.length-1);i>=0;i--){
//             this.heapdown(i)
//         }
//     }
//     heapdown(current){
//         let endindex = this.heap.length-1
//         let leftindex =this.leftchild(current)
//         while(leftindex<=endindex){
            
//         let rightindex =this.rightchild(current)
//         let shifttobe 
//         if(rightindex<=endindex && this.heap[rightindex]<this.heap[leftindex]){
//             shifttobe =rightindex
//         }
//         else{
//             shifttobe =leftindex
//         }
//         if(this.heap[current]>this.heap[shifttobe]){
//             [this.heap[current],this.heap[shifttobe]] =[this.heap[shifttobe],this.heap[current]]

//             current =shifttobe
//             leftindex=this.leftchild[current]

//         }else{
//             return
//         }


//         }
//     }
//     peek(){
//         return this.heap[0]
//     }
//     parent(i){
//         return Math.floor(i-1/2)
//     }
//     leftchild(i){
//         return (i*2)+1
//     }
//     rightchild(i){
//         return (i*2)+2
//     }




// }


// class heap{
//     constructor(){
//         this.heap =[]
//     }
//     minheap(array){
//         this.buildheap(array)
//     }
//     buildheap(array){
//         this.heap =array

//         for(let i=parant(this.heap.length-1);i>=0;i++){
//             this.shiftdown(i)
//         }
//     }
//     shiftdown(current){
//         let endindex =this.heap.length-1
//         let leftindex =this.leftchild(current)

//         while(leftindex<=endindex){
//             let rightindex =this.rightchild(current)
//             let shiftobe
//             if(rightindex<=endindex && this.heap[rightindex]<this.heap[leftindex]){
//                 shiftobe =  rightindex
//             }
//             else{
//                 shifttobe = leftindex
//             }
//             if(this.heap[current]>this.heap[shiftobe]){
//                 [this.heap[current],this.heap[shiftobe]] =[this.heap[shiftobe],this.heap[current]]
//                 current =shifttobe
//                 leftindex=this.leftchild(current)
//             }

//         }
//     }
//     peek(){
//         return this.heap[0]
//     }
//     parent(i){
//         return Math.floor(i-1)/2
//     }
//     leftchild(i){
//         return (i*2)+1
//     }
//     rightchild(i){
//         return (i*2)+2
//     }
// }


// class heap{
//     constructor(){
//         this.heap =[]
//     }
//     minheap(array){
//        this.builsheap(array)
//     }
//     buildheap(array){
//         this.heap = array
//         for(let i=parent(this.heap,length-1);i>=0;i--){

//             this.shiftdown(i)
//         }
//     }
//     shiftdown(current){
//         let endindex =this.heap.length-1
//         let leftindex = this.leftchild(current)
//         while(leftindex<=endindex){
//           let rightindex =this.rightchild(current) 
//           let shifttobe
//           if(rightindex<=endindex && leftindex>rightindex){
//                 shifttobe =rightindex
//           }
//           else{
//              shifttobe=leftindex
//           }
//           if(this.heap[shifttobe]<this.heap[current]){
//             [this.heap[shifttobe],this.heap[current]]=[this.heap[current],this.heap[shifttobe]]

//             current =shifttobe
//             leftindex =this.leftchild(current)

//           }else{
//             return 
//           }
//         }
//     }

//     shiftup(current){
//         let parrent =this.parent(current)
//         if(this.heap[current]<this.heap[parrent]&&current<0){
//             [this.heap[current],this.heap[parrent]]=[this.heap[parrent],this.heap[current]]
//             current =parrent
//             parent =this.leftchild(current)
//         }

//     }
//     peek(){
//         return this.heap[0]
//     }
//     parent(i){
//         return Math.floor((i-1)/2)
//     }
//     leftchild(i){
//         return (i*2)+1
//     }
//     rightchild(i){
//         return (i*2)+2
//     }
//     remove(){
//         [this.heap[this.heap.length-1],this.heap[this.heap.length-1]] =[this.heap[this.heap.length-1],this.heap[0]]
//        let number = this.heap.pop()
//        this.shiftdown(0)
//        return number
        
//     }
//     insert(value){
//         this.heap.push(value)
//         this.shiftup(this.heap.length-1)

//     }
//     display(){
//         for(let i=0;i<this.heap.length;i++){
//             console.log(this.heap[i]);
//         }
//     }
//     heapsort(array){
//         this.buildheap(array)
//         let array2 =[]
//         let length =this.heap.length

//         for(let i=0;i<length;i++){
//             this.arry2.push(this.remove())
//         }

//     }

// }


// class Heap {
//     constructor(){
//         this.heap =[]
//     }

//     minheap(array){
//         this.buildheap(array)
//     }
//     buildheap(array){
//         this.heap =array

       

//         for(let i=this.parent(this.heap.length-1);i>=0;i--){
//             this.shiftdown(i)
//         }
//     }

//     shiftdown(current){
        
//         let endindex =this.heap.length-1
//         let leftindex =this.leftchild(current)
//         while(leftindex<=endindex){
//             let rightindex =this.rightchild(current)
//             let shiftobe
//             if(rightindex<=endindex && this.heap[leftindex]<this.heap[rightindex]){
//                 shiftobe =leftindex
//             }
//             else{
//                 shiftobe =rightindex
//             }

           
//             if(this.heap[current]>this.heap[shiftobe]){
//                 [this.heap[current],this.heap[shiftobe]] = [this.heap[shiftobe],this.heap[current]]

//                 current = shiftobe
//                 leftindex =this.leftchild(current)
//             }
//             else{
//                 return
//             }
//         }
//     }

//     parent(i){
//         return Math.floor((i-1)/2)
//     }
//     leftchild(i){
//        return (i*2)+1
//     }
//     rightchild(i){
//        return (i*2)+2
//     }
//     display(){
        
//         for(let i=0 ; i<this.heap.length ;i++){
//             console.log(this.heap[i]);
            
//         }
//     }
//     remove(){
//         [this.heap[0],this.heap[this.heap.length-1]] = [this.heap[this.heap.length-1],this.heap[0]]
//         let number = this.heap.pop()
//          this.shiftdown(0)
//         return number
    
//     }
//     heapsort(array){
//         this.buildheap(array);
//         let array2 = []
//         let length =array.length

//         for(let i=0;i<length;i++){
//         array2.push(this.remove())
//         }
//         console.log(array2);

//     }


// }

// const heap =new Heap()

// let array = [6,7,5,4,9,2,8,1,90,87]


// heap.heapsort(array)

// class Heap{
//     constructor(){
//         this.heap=[]
//     }
//     minheap(array){
//         this.buildheap(array)
//     }
//     buildheap(array){
//         this.heap = array
//         for(let i=this.parent(this.heap.length-1);i>=0;i--){
//             this.shiftdown(i)
//         }
//     }
//     shiftdown(current){
//         let endindex = this.heap.length-1
//         let leftindex =this.leftchild(current)
//         while(leftindex<=endindex){
//           let rightindex =this.rightchild(current)
//           let shiftobe 
//           if(rightindex<=endindex && this.heap[rightindex]<this.heap[leftindex]){
//                 shiftobe = rightindex
//           }
//           else{
//             shiftobe = leftindex
//           }
//           if(this.heap[shiftobe]<this.heap[current]){
//               [this.heap[shiftobe],this.heap[current]] = [this.heap[current],this.heap[shiftobe]]
//               current =shiftobe
//               leftindex = this.leftchild(current)
//           }else{
//               return
//           }
//         }
//     }

    
//     display(){

//       let  length =this.heap.length
//         for(let i=0;i<length;i++){
//             console.log(this.heap[i]);
//         }

//     }
//     parent(i){
//         return Math.floor((i-1)/2)
//     }
//     leftchild(i){
//         return (i*2)+1
//     }
//     rightchild(i){
//         return (i*2)+2
//     }
// }

// const heap = new Heap()
// let array =[9,5,6,3,4,2,7,1]
// heap.minheap(array)
// heap.display()






// class Heap{
//     constructor(){
//         this.heap =[]
//     }
//     minheap(array){
//         this.buildheap(array)
//     }
//     buildheap(array){
//         this.heap =array
//         for(let i=this.parent(this.heap.length-1) ; i>=0 ; i--){
//             this.shiftdown(i)
//         }
//     }
//     shiftdown(current){
//        let endindex = this.heap.length-1
//        let leftindex =this.leftchild(current)
//         while(leftindex<=endindex){
//          let rightindex =this.rightchild(current)
//          let shifttobe
//          if(rightindex<=endindex && this.heap[rightindex]<this.heap[leftindex]){
//               shifttobe=rightindex
//          }

//          else{
//             shifttobe =leftindex
//          }

//          if(this.heap[shifttobe] < this.heap[current]){
//             [this.heap[shifttobe],this.heap[current]]  =  [this.heap[current],this.heap[shifttobe]]
//              current = shifttobe
//             leftindex =this.leftchild(current)
//          }

//          else{
//             return
//          }
//         }
//     }
//     shiftup(current){
//       let parent= this.parent(current)
//       while(this.heap[current]<this.heap[parent] && current > 0){
//         [this.heap[current],this.heap[parent]] = [this.heap[parent],this.heap[current]]
//         current = parent
//         parent =this.parent(current)
//       }
//     }

//     parent(i){
//         return  Math.floor((i-1)/2)
//     }

//     leftchild(i){
//         return (i*2)+1
//     }

//     rightchild(i){
//         return (i*2)+2
//     }

//     display(){
//         for(let i=0;i<this.heap.length;i++){
//             console.log(this.heap[i]);
//         }
//     }
//     peek(){
//         return this.heap[0]
//     }
//     remove(){
//         [this.heap[0],this.heap[this.heap.length-1]] = [this.heap[this.heap.length-1],this.heap[0]]
//         let removedvalue = this.heap.pop()
//         this.shiftdown(0)
//         return removedvalue
//     }
//     heapsort(array){
//        this.buildheap(array)
//        let array2 = []
//        let length = array.length
//        for(let i=0 ;i<length ; i++){
//         array2.push(this.remove())
//        }
//        console.log(array2);
//     }
//     insert(values){
//         this.heap.push(values)
//         this.shiftup(this.heap.length-1)
//     }

// } 
 
// const heap = new Heap()

// let array = [9,4,6,5,3,7,2,1,8]

// heap.buildheap(array)

// console.log(heap.remove());
// console.log('lol');

// heap.insert(6)
// heap.display()

// heap.heapsort(array)




// class Heap{
//     constructor(){
//         this.heap = []
//     }
//     minheap(array){
//         this.buildheap(array)
//     }
//     buildheap(array){
//         this.heap = array
//         for( let i= this.parent(this.heap.length-1); i>=0 ; i--){
//             this.shiftdown(i)
//         }
//     }
//     shiftdown(current){
//         let endindex = this.heap.length-1
//         let leftindex = this.leftchild(current)
//         while(leftindex<=endindex){
//             let rightindex = this.rightchild(current)
//             let shiftobe


//             if(rightindex<=endindex && this.heap[leftindex]>this.heap[rightindex]){
//                 shiftobe  =rightindex
//             }
//             else{
//                 shiftobe =leftindex
//             }
//             if(this.heap[shiftobe] < this.heap[current]){
//                [this.heap[current],this.heap[shiftobe]] = [this.heap[shiftobe],this.heap[current]]

//                current =shiftobe
//                leftindex=this.leftchild(current)
//             }
//             else {
//                 return
//             }
//         }
//     }
//     parent(i){
//         return Math.floor((i-1)/2)
//     }
//     leftchild(i){
//         return (i*2)+1
//     }
//     rightchild(i){

//         return (i*2)+2
//     }
//     display(){
//         for(let i=0 ;i<this.heap.length;i++){
//             console.log(this.heap[i]);
//         }
//     }
// }

// const heap = new Heap()

// let array = [9,4,6,5,3,7,2,1,8]
// heap.buildheap(array)
// heap.display()







class Heap{
    constructor(){
        this.heap = []
    }
    minheap(array){
        this.buildheap(array)
    }
    buildheap(array){
        this.heap = array
        for(let i= this.parent(this.heap.length-1) ; i>=0 ; i--){
            this.shiftdown(i)
        }
    }
    shiftdown(current){

        let endindex = this.heap.length-1
        let leftindex = this.leftchild(current)

        while(leftindex<=endindex){
            let rightindex = this.rightchild(current)
            let shiftobe
            if(rightindex<=endindex && this.heap[leftindex]>this.heap[rightindex]){
                shiftobe = rightindex
            }else{
                shiftobe = leftindex
            }

            if(this.heap[shiftobe]<this.heap[current]){
              [this.heap[current],this.heap[shiftobe]]  = [this.heap[shiftobe],this.heap[current]]
              current = shiftobe
              leftindex = this.leftchild(current)
            }
            else{
                return
            }

        }
    }
    parent(i){
        return Math.floor((i-1)/2)
    }
    leftchild(i){
        return (i*2)+1
    }
    rightchild(i){
        return (i*2)+2
    }
    peek(){
        return this.heap[0]
    }
    display(){
        for(let i=0 ; i<this.heap.length ; i++){
            console.log(this.heap[i]);
        }
    }
    remove(){
     [ this.heap[0],this.heap[this.heap.length-1]]  =[ this.heap[this.heap.length-1],this.heap[0]]
     let number =this.heap.pop()
     this.shiftdown(0)
     return number
    }

    heapsort(array){
        let length =array.length
        let array2 =[]
        this.buildheap(array)
        for(let i=0 ;i<length;i++){
            array2.push(this.remove())
        }
        console.log(array2);
    }
    insert(value){
         this.heap.push(value)
         this.shiftup(this.heap.length-1)
         
    }
    shiftup(current){
        let parent = this.parent(current)
        while(this.heap[current]<this.heap[parent] && current >0){
            [this.heap[current],this.heap[parent] ] = [this.heap[parent],this.heap[current]]
            current = parent
            parent = this.parent(current)
        }
    } 
}
const heap = new Heap()

let array = [8,9,5,6,7,1,3,2,4]


// heap.minheap(array) 
// heap.remove()
// heap.display()


heap.heapsort(array)
















































































































































































































































































































































































































































































































































































































































































 