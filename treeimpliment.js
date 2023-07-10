class Node{
    constructor(values){
        this.values = values
        this.left = null
        this.right = null
    }
}
class BinarySearchTree{
    constructor(){
        this.root=null
    }

    isempty(){
       return this.root === null
    }


}

const bst = new BinarySearchTree()
console.log(bst.isempty());