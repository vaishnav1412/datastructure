class Node{
    constructor(){
        this.childern={}
        this.isWord=false
    }
}
class Trie{
    constructor(){
        this.root=new Node()
    }
    trie(word){
        this.populateSuffix(word)
    }
    populateSuffix(word){
        for(let i=0;i<word.length;i++){
            this.insertSubstringStarting(i,word)
        }
    }
   
    contains(word){
       let current=this.root
       for(let i=0;i<word.length;i++){
        let char=word[i]
        if(!current.childern[char]){
            return 'hai'
        }
        current=current.childern[char]
       }
       return current.isWord
    }
}
const tey=new Trie()
tey.trie('manna')
console.log(tey.contains('anna'))