class Node{
    constructor(){
        this.children ={}
        this.isword =false
    }
}
class trie{
    constructor(){
        this.root = new Node()
    }
    insert(word){
        this.suffix(word)
    }
    suffix(word){
        for(let i=0;i<word.length;i++){
            this.insertvalues(i,word)
        }
    }
    insertvalues(index,word){
       let current = this.root
    }
}