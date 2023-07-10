class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class LinkedList {
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
    propend(value) {
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
    append(value) {
        const node = new Node(value)
        if (this.isempty()) {
            this.head = node
        }
        else {
            let prv = this.head
            while (prv.next) {
                prv = prv.next
            }
            prv.next = node
        }
        this.size++
    }
    print() {
        if (this.isempty()) {
            console.log('empty');
        }
        else {
            let curr = this.head
            let result = ""

            while (curr) {
                result += `${curr.value}`
                curr = curr.next
            }
            console.log(result);
        }
    }
    searchindex(index) {
        if (index < 0 || index > this.size) {
            return -1
        }
        else {
            let cur = this.head
            for (let i = 0; i < index; i++) {
                cur = cur.next
            }
            return cur.value
        }
    }
    searchvalue(value){
        if(this.isempty()){
            return -1
        }
        else {
            let i=0
            let cur = this.head
            while(cur){
                if(cur.value==value){
                    return i
                }
                i++
                cur =cur.next
            }
            return -1
        }
    }
    reverse(){
        if(this.isempty()){
            return false 
        }
        else{
    
        let prv = null
        let curr = this.head
        while(curr){
            let next =curr.next
            curr.next =prv
            prv =curr
            curr=next
        }
        this.head=prv
    }
    
    }


    insert(value,index){
      if(index<0||index>this.size){
        return false
      }
      if(index==0){
         this.propend(value)
      }
      else{
        const node =new Node(value)
        let cur =this.head
        for(let i=0;i<index-1;i++){
            cur=cur.next
        }
        node.next = cur.next
        cur.next = node
        this.size++
      }
    }

}
const list = new LinkedList()
console.log(list.isempty());
console.log(list.getsize());


list.append(10)
list.append(20)
list.append(30)
list.print()
console.log(list.searchindex(1));
console.log(list.searchvalue(20));
console.log(list.reverse());
list.print()
console.log( list.insert(300,1));
list.print()