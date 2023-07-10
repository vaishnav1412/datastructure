// class Graph{
//     constructor(){
//         this.adjecencyList = {}
//     }
//     addvertex(vertex){
//         if(!this.adjecencyList[vertex]){
//             this.adjecencyList[vertex] = new Set()
//         }
//     }
//     addedge(vertex1,vertax2){
//         if(!this.adjecencyList[vertex1]){
//             this.addvertex[vertex1]
//         }
//         if(!this.adjecencyList[vertax2]){
//             this.addvertex[vertax2]
//         }
//         this.adjecencyList[vertex1].add(vertax2)
//         this.adjecencyList[vertex2].add(vertex1)
//     }
// }

class Graph{
    constructor(){
        this.adjecencyList={}
    }

    addvertex(vertex){
        if(!this.adjecencyList[vertex]){
            this.adjecencyList[vertex]= new set()
        }
    }
    addedge(vertax1,vertax2){
        if(!this.adjecencyList[vertax1]){
            this.addvertex(vertex1)
        }
        if(!this.adjecencyList[vertex2]){
            this.addvertex(vertax2)
        }
        this.adjecencyList[vertex1].add(vertex2)
        this.adjecencyList[vertax2].add(vertax1)
    }
}