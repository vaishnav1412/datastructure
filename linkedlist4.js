class Node{
    constructor(value){
        this.value = value;
        this.next =null ;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    isemty(){
        return this.size===0
    }
    getsize(){
        return this.size
    }
    propend(value){
        const node =new Node(value)
        if(this.isemty()){
            this.head = node
        }
        else{
            node.next = this.head
            this.head =node
        }
        this.size++
    }
    append(value){
        const node =new Node(value)
        if(this.isemty()){
            this.head=node
        }
        else{
            let prv =this.head
            while(prv.next){
                prv=prv.next
            }
           prv.next=node
        }
        this.size++
    }
    print(){
        if(this.isemty()){
            console.log('no values present');
        }
        else{
            let arr = this.head
            let result=""
            while(arr){
                result += `${arr.value}`
                arr=arr.next
            }
            console.log(result);
        }
    }
}
 const list = new LinkedList()
  
 console.log(list.isemty());
 console.log(list.getsize());
 
 list.append(10)
 list.append(20)
 list.append(300)
 list.print()
 