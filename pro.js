// search(value){
//     if(this.isempty()){
//         return -1
//     }
//     let i=0
//     let crr=this.head
//     while(crr){
//         if(crr.value===value){
//           return i
//         }
//         crr=crr.next
//         i++
//     }
//     return -1
// }



for(i=0;i<index;i++){
    curr=cur.next
}
return cur.value


search(value){
if(this.isempty()){
    return -1
}
let i=0
let crr =this.head
while(crr){
    if(crr.value==value){
        return i
    }
    crr=ccr.next
    i++
}
return -1
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
    let prev = null
    let crr =this.head
     
    while(crr){
        let next = crr.next
        crr.next = prev
        prev=crr
        crr =next
    }
    this.head=prev
}

insert(value,index){
    if(index<0||index>this.size){
        return false
    }
    if (index==0){

        this.propend(value)
    }
    else{
        crr=this.head
        if(let i=0;i<index;i++){
            crr=crr.next
        }
      node.next=crr.next






