insert(values){
    const node = new Node()
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
        }
        else{
            this.insertvalues(root.left,node)
        }
    }
    else{
        if(root.right===null){
            root.right =node
        }
        else{
            this.insertvalues(root.right,node)
        }
    }
}