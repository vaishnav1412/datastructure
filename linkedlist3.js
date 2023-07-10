class Node{
    constructor(value){
        this.value = value
        this.next =null
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }
    isempty(){
        
       return this.size===0
    }
    getsize(){
       return this.size
    }
    prepender(value){
        const node = new Node(value)
        if(this.isempty()){
            this.head = node
        }
        else{
            node.next=this.head
            this.head=node
        }
       this.size++

    }
    print(){
        if(this.isempty()){
            console.log('oops....its empty ');
        }
        else {
            let crr= this.head
            let result =""
            while(crr){
                result+=`${crr.value}`
                crr=crr.next
            }
            console.log(result);
        }
    }
}
const list =new LinkedList()

console.log('THE LIST IS EMPTY',list.isempty());
console.log('the size is',list.getsize());
list.print()
list.prepender(10)
list.print()
list.prepender(20)
list.prepender(30)
list.print()
   






