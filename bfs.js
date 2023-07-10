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

     preorder(root){

        if(root){

            console.log(root.values);
            this.preorder(root.left);
            this.preorder(root.right);

        }
    }

    inorder(root){
        if(root){

            this.preorder(root.left)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
            console.log(root.values);
            this.preorder(root.right)
 
        }
       
    }

 postorder(root){
    if(root){
        this.preorder(root.left)
        this.preorder(root.right)
        console.log(root.values);
    }
        }
//bfsmethord
 levelorder(){
    const queue =[]
    queue.push(this.root)
    while(queue.length){
        let curr = queue.shift()
        console.log(curr.values);
        if(curr.left){
            queue.push(curr.left)
        }
        if(curr.right){
            queue.push(curr.right)
        }
        
    }

 }

 min(root){
    if(!root.left){
        return root.values
    }
    else{
        return this.min(root.left)
    }
 }
 max(root)
 {
    if(!root.right){
        return root.values
    }
    else{
        return this.max(root.right)
    }
 }
 isBst(root){
   

    if(root==null){
      
        
        return true;
    }
if(root.left!=null && root.left.value>root.value){
   
    return false
}
if(root.right!=null&&root.right.value<root.value){
    return false
}
if(!this.isBst(root.left)|| !this.isBst(root.right)){
    return false
}
return true
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


// bst.preorder(bst.root)
bst.levelorder()