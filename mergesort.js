function mergesort(arr) {
    if(arr.length<2){
        return arr
    } 


    let mid=Math.floor(arr.length/2)
    const leftarry=arr.slice(0,mid)
    const rightaray=arr.slice(mid)
    return merge(mergesort(leftarry),mergesort(rightaray))
    

}

function merge(leftarry,rightaray){
 let sortarray=[]
 while(leftarry.length&&rightaray.length){


    if(leftarry[0]<=rightaray[0]){
        sortarray.push(leftarry.shift())
    }
    else{
        sortarray.push(rightaray.shift())
    }

    
 }
 return [...sortarray,...leftarry,...rightaray]

}


const arr=[10,5,3,2,4,1,0]
console.log(mergesort(arr));