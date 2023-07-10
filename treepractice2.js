// class Node{
//     constructor(values){
//         this.values = values
//         this.left = null
//         this.right =null
//     }
// }
// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }
//     isempty(){
//        return this.root === null
//     }
// }

// const bst = new BinarySearchTree()


// console.log(bst.isempty());




// class Node{
//     constructor(values){
//         this.values = values
//         this.left = null
//         this.right =null
//     }
// }

// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }
//     isempty(){
//         return this.root === null
//     }
// }

// const bst = new BinarySearchTree()

// console.log(bst.isempty());




// class Node{
//     constructor(values){
//         this.values = values
//         this.left = null
//         this.right = null
//     }
// }
// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }

//     isempty(){
//         return this.root === null
//     }
// }

// const bst = new BinarySearchTree()

// console.log(bst.isempty());




// class Node {
//     constructor(values){
//         this.values = values
//         this.left = null 
//         this.right =null
//     }
// }
// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }
//     isempty(){
//         return this.root ===null
//     }

//     insert(values){
//         const node = new Node(values)
//         if(this.isempty()){
//             this.root =node
//         }
//         else{
//             this.insertvalues(this.root,node)
//         }
//     }

//     insertvalues(root,node){

//         if(node.values<root.values){
//            if (root.left === null){
//                root.left =node}
//                else{
//                  this.insertvalues(root.left,node)
//                }


//         }else{
//             if(root.right ===null){
//                 root.right = node
//             }else{
//                this.insertvalues(root.right,node)
//             }

//         }
//     }
//     search(root,values){
//         if(!root){
//             return false
//         }
//         if(root.values ===values){
//             return true
//         }
//         else if(values<root.values){
//           return this.search(root.left,values)
//         }
//         else{
//            return this.search(root.right,values)
//         }
//     }
// }
 

// const bst = new BinarySearchTree()

// console.log(bst.isempty());

class Node {
    constructor(values){
        this.values = values
        this.left =null
        this.right =null
    }
}
class BinarySearchTree{
    constructor(){
        this.root =null 
    }
    isempty(){
        return this.root===null
    }
    insert(values){
     const node = new Node(values)
        if(this.isempty()){
            this.root = node
        }
        else{
            this.insertvalues(this.root,node)
        }
    }
    insertvalues(root,node){
        if(node.values<root.values){
          
         if(root.left===null){
            root.left=node
         }else{
            this.insertvalues(root.left,node)
         }

        }
        else{
        if(root.right === null){
            root.right =node
        }
        else{
            this.insertvalues(root.right,node)
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
            }
            else{
                return this.search(root.right,values)
            }
        }
    }
    preorder(root){
        if(root){
            console.log(root.values);
            this.preorder(root.left)
            this.preorder(root.right)
        }

    }
    inorder(root){
        if(root){
            this.inorder(root.left)
            console.log(root.values);
            this.inorder(root.values)
        }
    }
    postorder(root){
        if(root){
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.values);
        }
    }
    min(root){
        if(!root.left){
            return root.values
        }else{
            return min(root.left)
        }
    }
    max(root){
        if(!root.right){
            return root.values
        }
        else{
            return this.max(root,right)
        }
    }
    isbst(root){
        if(root===null){
            return true
        }
        if(root.right != null&& root.right.values<root.values){
            return false
        }
        if(root.left != null && root.left.values>root.values){
            return false
        }
        if(!this.isbst(root.left) || !this.isbst(root.right)){
            return false
        }
    }
    // levelorder(){
    //     const queue = []
    //     queue.push(this.root)
    //     while(queue.length){
    //         let current =queue.shift()
    //         console.log(current.values)
    //         if(current.left){
    //             queue.push(current.left)
    //         }
    //         if(current.right){
    //             queue.push(current.right)
    //         }
    //     }
    // }

    // levelorder(){
    //     const queue = []
    //     queue.push(this.root)
    //     while(queue.length){
    //         let curr = queue.shift()
    //         console.log(curr.values);
    //         if(curr.left){
    //             queue.push(curr.left)
    //         }
    //         if(curr.right){
    //             queue.push(curr.right)
    //         }
    //     }
    // }

    levelorder(){
        const queue = []
        queue.push(this.root)
        while(queue.length){
            let curr =que.shift()
            console.log(curr.values);
            if(curr.left){
                queue.push(queue.left)
            }
            if(curr.left){
                queue.push(curr.right)
            }
        }
    }

    
}