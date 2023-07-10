// class Node{
//     constructor(values){
//         this.values =values
//         this.left = null
//         this.right = null
//     }
// }
// class BinarySearchTree{
//     constructor(){
//         this.root =null
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
//        if(node.values<root.values){
//         if(root.left===null){
//             root.left = node
//         }else{
//             this.insertvalues(root.left,node)
//         }
//        }else{
//         if(root.right===null){
//             root.right =node
//         }
//         else{
//             this.insertvalues(root.right,node)
//         }
//        }
//     }
//      search(root,values){
//         if(!root){
//             return false
//         }
//         if(root.values ===values){
//             return true
//         }
//         else if(values<root.left){
//             return this.search(root.left,values)
//         }
//         else{
//             return this.search(root.right,values)
//         }
//      }

//      preorder(root){
//         if(root){
//             console.log(root.values);
//             this.preorder(root.left)
//             this.preorder(root.right)
//         }
//      }
//      inorder(root){
//         if(root){
//             this.inorder(root.left)
//             console.log(root.values);
//             this.inorder(root.right)
//         }
//      }
//      postorder(root){
//         if(root){
//             this.postorder(root.left)
//             this.postorder(root.right)
//             console.log(root.values);
//         }
//      }
//      min(root){
//         if(!root.left){
//             return root.values
//         }
//         else{
//            return this.min(root.left)
//         }
//      }
//      max(root){
//         if(!root.right){
//             return root.values
//         }
//         else{
//             return this.max(root.right)
//         }
//      }

//      isBst(root){
//           if(root.values === null){
//             return true
//           }
//           else if(!root.left===null && root.left.values>root.values){
//             return false
//           }
//           else if(!root.right===null &&root.right.values<root.values){
//             return false
//           }
//           else if(!this.isBst(root.left) || (!this.isBst(root.right))){
//             return false
//           }
//           return true
//      }
//      levelorder(){
//         let queue = []
//         queue.push(this.root)
//         while(queue.length){
//             let current = queue.shift()
//             console.log(current.values);
//             if(current.left){
//                 queue.push(current.left)
//             }
//             if(current.right){
//                 queue.push(current.right)
//             }
//         }
//      }
//      levelorder(){
//         const queue =[]
//         queue.push(this.root)
//         while(queue.length){
//             let current = queue.shift
//             console.log(current.values);
//             if(root.left){
//                 queue.push(root.left)
//             }
//             if()
//         }
//      }
// }
// const bst = new BinarySearchTree()
// bst.insert(10)
// bst.insert(20)
// bst.insert(2)
// console.log(bst.search(bst.root,10));






// class Node{
//     constructor(values){
//     this.values = values
//     this.left = null 
//     this.right = null
//     }
// }
// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }
//     isempty(){
//         return this.root === null
//     }
//     insert(values){
//         const node = new Node(values)
//         if(this.isempty()){
//             this.root =node
//         }
//         else {
//             this.insertvalues(this.root,node)
//         }
//     }
//     insertvalues(root,node){
//         const node = new Node()
//         if(node.values<root.values){
//             if(root.left === null){
//                 root.left = node
//             }
//             else {
//                 this.insertvalues(root.left,node)
//             }
            
//         }
//         else{
//             if(root.right === null){
//                 root.right = node
//             }
//             else{
//                 this.insertvalues(root.right,node)
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
//         else if(valuse<root.values){
//             return this.search(root.left,values)
//         }
//         else{
//             return this.search(root.right,values)
//         }
//     }

//     //dfs

//     preorder(root){
//         if(root){
//             console.log(root.values);
//             this.preorder(root.left)
//             this.preorder(root.right)
//         }
//     }
//     inorder(root){
//         if(root){
//             this.inorder(root.left)
//             console.log(root.values);
//             this.inorder(rooot.right)
//         }
//     }
//     postorder(root){
//         if(root){
//             this.postorder(root.left)
//             this.postorder(root.right)
//             console.log(root.values);
//         }
//     }
//     levelorder(){
//         let queue =[]
//         queue.push(this.root)
//         while(queue.length){
//             let curr = queue.shift()
//             console.log(curr.values);
//             if(curr.left){
//                 queue.push(curr.left)
//             }
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }

//     isbst(root){
//        if(root===null){
//         return true
//        }
//        if(root.left !=null && root.left.values>root.values){
//         return false
//        }
//        if(root.right!=null&& root.right.values<root.values){
//         return false
//        }
//        if(!this.isbst(root.left) || !this.isbst(root.right)){
//         return false
//        }
//        return true
//     }
    
//     min(root){
//         if(!root.left){
//             return root.values
//         }
//         else{
//             return this.min(root.left)
//         }
//     }
// }
// const bst = new BinarySearchTree()
 
// console.log(bst.isempty());



//heap   


// 


// class Node{
//     constructor(){
//         this.chilldren ={}
//         this.isword = false
//     }
// }

// class trie{
//     constructor(){
//         this.root =new Node()
//     }
//     trie(values){
//         this.suffix(word)
//     }
//     suffix(word){
//         for(let i=0 ;i<word.length;i++){
//             this.insert(i,word)
//         }
//     }
//     insert(index,word){
//         let current = this.root
//         for(let i=index ;i<word.length;i++){
//             let char = word[i]
//             if(!current.children[char]){
//                 current.children[char] =new Node()
//             }
//             current = current.children[char]
//         }
//         current.isword = true
//     }
// }



// class Node{
//     constructor(){
//         this.children ={}
//         this.isword = false
//     }
// }
// class trie{
//     constructor(){
//         this.root = new Node()
//     }
//     trie(word){
//         this.suffix(word)
//     }
//     suffix(word){
//         for(i=0;i<word.length;i++){
//             this.insert(i,word)
//         }
//     }
//     insert(index,word){
//         let current = this.root
//         for(i=index;i<word.length;i++){
//             char =word[i]
//             if(!current.children[char]){
//                 current.children[char] =new Node()
//             }
//             current = current.children[char]
//         }
//         this.isword= true
//     }
// }


// class Node{
//     constructor(){
//         this.children = {}
//         this.isword =false
//     }
// }
// class trie{
//     constructor(){
//         this.root = new Node()
//     }
//     trie(word){
//         this.suffix(word)
//     }
//     suffix(word){
//         for (let i=0;i<word.length;i++){
//             this.insert(i,word)
//         }
//     }

//     insert(index,word){
//         let current = this.root
//         for( let i=index;i<word.length;i++){
//             let char = word[i]
//             if(!current.children[char]){
//                 current.children[char]=new Node()
//             }
//             current=current.children[char]
//         }
//         this.isword = true
//     }
// }


// class Node{
//     constructor(){
//         this.children = {}
//         this.isword =false
//     }
// }
// class trie{
//     constructor(){
//         this.root = new Node()
//     }
//     trie(word){
//         this.suffix(word)
//     }
//     suffix(word){
//         for(let i=0;i<word.length;i++){
//             this.insert(i,word)
//         }
//     }
//     insert(index,word){
//         let current = this.root 
//         for(let i=index ; i<word.length;i++){
//             let char=word[i]
//             if(!current.children[char]){
//                 current.children[char] = new Node()
//             }
//             current =current.children[char]
//         }
//         this.isword =true
//     }
//     contains(word){
//         let current = this
//         for(let i=0;i<word.length;i++){
//             let char = word[i]
//             if(!current.children[char]){
//                 return false
//             }
//             current= current.children[char]
//         }
//         return current.isword
//     }

// }

class Graph{
    constructor(){
        this.adjecencylist = {}
    }
    addvertex(vertex){
        if(!this.adjecencylist[vetex]){
            this.adjecencylist[vertex] =new Set()
        }

    }
    addedge(vertex1,vertex2){
        if(!this.adjecencylist[vertex1]){
            this.addvertex(vertex1)
        }
        if(!this.adjecencylist[vertex2]){
            this.addvertex(vertex2)
        }
        this.adjecencylist[vertex1].add(vertex2)
        this.adjecencylist[vertex2].add(vertex1)
    }
    hasedge(vertex1,vertax2){
        return (
            this.adjecencylist[vertex1].has(vertex2)&&this.adjecencylist[vertex2].has[vertex2]
        )
    }
    deleteedge(vertex1,vertex2){
        this.adjecencylist[vertex1].delete(vertex2)
        this.adjecencylist[vertex2].delete(vertex1)
    }
}