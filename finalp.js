// class Node{
//     constructor(){
//         this.children = {}
//         this.isword = false
//     }
// }
// class Trie{
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
//         for(let i=index;i<word.length;i++){
//             let char =word[i]
//             if(!current.children[char]){
//                 current.children[char] =new Node()
//             }
//             current = current.children[char]
//         }
//         current.isword =true
//     }
//     contains(word){
//         let current=this.root
//         for( let i=0;i<word.length;i++){
//             let char=word[i]
//             if(!current.children[char]){
//                 return false
//             }
//             current = current.children[char]
//         }
//        return current.isword
//     }
//     start(word){
//         let current =this.root
//         for(let i=0;i<word.length;i++){
//             let char =word[i]
//             if(!current.children[char]){
//                 return false
//             }
//             current =current.children[char]
//         }
//         return true
//     }
    

// }

// const trie = new Trie()
//  trie.trie('vaishnav')
//  console.log(trie.contains('aishnav'));
//  console.log(trie.start('k'));




// class Heap{
//     constructor(){
//         this.heap =[]
//     }
//     minheap(array){
//         this.buildheap(array)
//     }
//     buildheap(array){
//         this.heap =array
//         for(let i=this.parent(this.heap.length-1);i>=0;i--){
//             this.shiftdown(i)
//         }
//     }
//     shiftdown(current){
//         let endindex =this.heap.length-1
//         let leftindex =this.leftchild(current)
//         while (leftindex<=endindex){
//             let rightindex =this.rightchild(current)
//             let shifttobe
//             if(rightindex<=endindex && this.heap[rightindex]<this.heap[leftindex]){
//                 shifttobe=rightindex
//             }
//             else{
//                 shifttobe= leftindex
//             }
//             if(this.heap[current]>this.heap[shifttobe]){
//                 [this.heap[shifttobe],this.heap[current]] =[this.heap[current],this.heap[shifttobe]]
//                 current =shifttobe
//                 leftindex =this.leftchild(current)
//             }
//             else{
//                 return
//             }
//         }
//     }
//     parent(i){
//         return Math.floor((i-1)/2)
//     }
//     leftchild(i){
//         return (i*2)+1
//     }
//     rightchild(i){
//         return (i*2)+2
//     }
//     peek(){
//         return this.heap[0]
//     }

//     display(){
//         for(let i=0;i<this.heap.length;i++){
//             console.log(this.heap[i]);
//         }
//     }
//     insert(value){
//         this.heap.push(value)
//         this.shiftup(this.heap.length-1)
//     }
//     shiftup(current){
//         let parent=this.parent(current)
//         if(this.heap[current]<this.heap[parent]){
//             [this.heap[current],this.heap[parent]]=[this.heap[parent],this.heap[current]]
//             current =parent
//             parent = this.parent(current)
//         }
//     }
//     remove(){
//         [this.heap[0],this.heap[this.heap.length-1]] = [this.heap[this.heap.length-1],this.heap[0]]
//        let num= this.heap.pop()
//        this.shiftdown(0)
//        return num

//     }
//     heapsort(array){
//         let array2 =[]
//         let length =array.length
//         this.buildheap(array)
//         for(let i=0 ;i<length ;i++){
//             array2.push(this.remove())
//         }
//         console.log(array2);
//     }
// }

// const heap =new Heap()

// let array =[5,6,3,7,2,8,1]
// heap.buildheap(array)
// heap.insert(4)
// console.log(heap.remove());
// console.log('li');
// heap.display()
// heap.heapsort(array)
 


class Node{
    constructor(values){
        this.values =values
        this.left = null
        this.right = null
    }
}
class BinarySearchTree{
    constructor(){
        this.root =null
    }
    isempty(){
        return this.root === null
    }
    insert(values){
        const node =new Node(values)
        if(this.isempty()){
            this.root =node
        }
        else {
            this.insertvalues(this.root,node)
        }
    }
    insertvalues(root,node){
        if(node.values<root.values){
            if(root.left===null){
                root.left =node
            }
            else{
                this.insertvalues(root.left,node)
            }
        }
        else{
            if(root.right===null){
                root.right = node
            }
            else{
                this.insertvalues(root.right,node)
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
          this.inorder(root.right)
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
        }
        else{
            return this.min(root.left)
        }
    }
    isbst(root){
        if(root.values===null){
            return true
        }
        if(!root.left===null && root.values<root.left.values){
            return false
        }
        if(!root.right===null && root.values>root.right.values){
            return false
        }
        if(!this.isbst(root.left) || !this.isbst(root.right)){
            return false
        }
        return true
    }

    levelorder(){
        let queue =[]
        queue.push(this.root)
        while(queue.length){
            let current =queue.shift()
            console.log(current.values);
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.shift)
            }
        }
    }
    search(root,values){
        if(!root){
            return false
        }
        else{
            if(root.values =values){
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
console.log(bst.isempty());