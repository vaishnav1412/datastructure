// class Node{
//     constructor(value){
//         this.value=value
//         this.next =null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head=null
//         this.size=0
//     }
//     isempty(){
//        return this.size===0
//     }
//     getsize(){
//         return this.size
//     }
//     propend(value){
//         const node = new Node(value)

//         if(this.isempty()){
//             this.head=node
//         }
//         else{
//             node.next = this.head
//             this.head =node
//         }
//        this.size++
//     }
//     append(value){

//         const node = new Node(value)

//         if (this.isempty()) {
//             this.head = node
//        }else{
//          let curr = this.head
//         while(curr.next){
//             curr =curr.next
//         }
//         curr.next = node
//        }
//      this.size++

//     }
//     print(){
//         if(this.isempty()){
//             console.log('is empty');
//         }
//         else{
//             let curr=this.head
//             let  result=""
//              while(curr){
//                  result +=`${curr.value}`
//                  curr=curr.next
//              }
//              console.log(result);
//         }
       
//     }
// }

// const list = new LinkedList()
 
// console.log(list.isempty());
// console.log(list.getsize());


// list.append(10)
// list.append(20)
// list.append(30)

// list.print()


class Node{
    constructor(value){
        this.value=value
        this.next=null
    }

}
class LinkedList{
    constructor(){
        this.head =null
        this.size =0
    }

    isempty(){
        return this.size===0
    }
    getsize(){
        return this.size
    }
    propend(value){
        const node =new Node(value)
        if(this.isempty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
       this.size++
    }
    append(value){
        const node = new Node(value)
        if(this.isempty()){
            this.head=node
        }
        else{
            let prv=this.head
            while(prv.next){
                prv=prv.next

            }
            prv.next=node
        }
        this.size++
    }
    print(){
       if(this.isempty()){
        console.log('empty');
       }else{
        let crr = this.head
          let result=""
        while(crr){
            result += `${crr.value}`
            crr=crr.next
        }
        console.log(result);

       }
    }
    search(value){
        if(this.isempty()){
            return -1
        }
        let i=0
        let crr=this.head
        while(crr){
            if(crr.value===value){
              return i
            }
            crr=crr.next
            i++
        }
        return -1
    }
    searchindex(index){
        if(index<0||index>this.size){
            return false
        }
       let crr =this.head
       for (let i=0;i<index;i++){
        crr=crr.next
       }
       return crr.value
        
    }
    reverse(){
        if(this.isempty()){
            return false
        }
        else{
        let prv=null
        let crr=this.head
        while(crr){
            let next =crr.next
            crr.next=prv
            prv =crr
            crr=next

        }
        this.head=prv}
    }
    
}
const list =new LinkedList
console.log(list.isempty());
console.log(list.getsize());

list.append(10)
list.append(20)
list.append(30)

list.print()
console.log(list.search(30));
console.log(list.searchindex(1));

list.reverse()
list.print()