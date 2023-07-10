class Node{
    constructor(values){
        this.values =values
        this.left = null
        this.right= null
    }
}
class BinarySearchTree{
    constructor(){
        this.root =null
    }

    isempty(){
        return this.root ===null
    }
    insert(values){
        const newNode = new Node(values)
        if(this.isempty()){
            this.root = newNode
        }
        else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if(newNode.values < root.values){
            if(root.left===null){
                root.left =newNode
            }
            else{
                this.insertNode(root.left,newNode)
            }
        }
        else{
            if (root.right===null) {
                root.right=newNode
            }
            else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    search(root,values){
        if(!root){
            return false
        }
        else{
            if(root.values===values){
                return true
            }
            else if(values<root.values){
               return this.search(root.left,values)
            }else{
              return this.search(root.right,values)
            }
        }
    }
}

const bst = new BinarySearchTree()
console.log(bst.isempty());


bst.insert(10)
bst.insert(50)
bst.insert(100)
console.log(bst.search(bst.root,10));
console.log(bst.search(bst.root,50));
console.log(bst.search(bst.root,20));