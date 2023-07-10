class Node{
    constructor(values){
        this.values = values
        this.left = null
        this.right =null
    }
}
class BinarySearchTree{
    constructor(){
        this.root= null
    }
    isempty(){
       return this.root === null
    }
    insert(values){
        const newNode = new Node(values)
        if(this.isempty()){
            this.root = newNode
        }
        else{
           this.insertvalues(this.root,newNode)
        }
    }

    insertvalues(root,newNode){
        if(newNode.values<root.values){
            if(this.left ===null){
                root.left =newNode
            }
            else{
               return insertvalues(root.left,newNode)
            } 
        }
        else{
            if(this.right===null){
                root.right =newNode
            }
            else{
                return this.insertvalues(root.right,newNode)
            }
        }

    }



    search( root,values){
        if(!root){
            return false
        }
        else{
            if(root.values===values){
                return true
            }
            else if(values<root.values){
                 return this.search(root.left,values)
            }
            else{
                return this.search(root.right,values)
            }
        }
    }
    
}

const bst = new BinarySearchTree()


bst.insert(10)
console.log(bst.search(bst.root,10));