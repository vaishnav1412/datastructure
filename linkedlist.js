class Node{
   constructor(value){
    this.value=value
    this.next=null
   }
}
class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty(){

        return this.size===0
    }
    getSize(){
        return this.size
    }
}
const list =new LinkedList()
console.log('list isempty',list.isEmpty());
console.log('listsize',list.getSize());