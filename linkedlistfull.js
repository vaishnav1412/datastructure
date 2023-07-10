class Node {
    constructor(values){
        this.values = values;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0

    }
    isempty(){
        return this.size===0
    }
    getsize(){
        return this.size
    }

    propend(values){
        const node = new Node(values)
       if(this.isempty()){
        this.head = node
       }else{
           node.next = this.head
        this.head = node
       }
      this. size++

    }
    appent(values){
        const node = new Node(values)
        if(this.isempty()){
            this.head = node
        }
        else{
            let prev= this.head
            while(prev.next){
                prev=prev.next
            }
            prev.next= node
        }
        this.size++
    }
    print(){
        if(this.isempty()){
            console.log('empty');
        }
        else{
            let arr =this.head
            let result = ""
            while(arr){
                result+=`${arr.values}`
                arr=arr.next
            }
            console.log(result);
        }
}
}
const list = new LinkedList()


console.log(list.isempty());
console.log(list.getsize());



list. propend(10)
list. propend(20)
list. propend(30)

list.print()



