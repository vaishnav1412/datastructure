// function quicksort(arr){


//     if(arr.length<2){
//         return arr
//     }


//  let left=[]
//  let right=[]


//  let pivot=arr[arr.length-1]   



//  for(let i=0;i<arr.length-1;i++){
    


//     if(arr[i]<pivot){
//         left.push(arr[i])
//     }
//     else{
//         right.push(arr[i])
//     }



//  }
//  return [...quicksort(left),pivot,...quicksort(right)]

// }
// const arr=[4,3,2,5,1,7,9]
// console.log(quicksort(arr));





// function quicksort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     else{
//         let left =[]
//         let right =[]

//         let pivot = arr[arr.length-1]

//       for(let i =0 ; i<arr.length-1 ; i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//       }
//       return [...quicksort(left),pivot,...quicksort(right)]
//     }
// }

// let arr =[6,7,4,3,1,2]

// console.log(quicksort(arr));




// function quicksort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     else{
//         let left = []
//         let right = []

//       let pivot = arr[arr.length-1]
//       for(let i =0 ; i< arr.length-1 ; i++){
//     if(arr[i]>pivot){
//      right.push(arr[i])}
//      else{
//         left.push(arr[i])
//      }
//       }
       
//       return [...quicksort(left),pivot,...quicksort(right)]
      
//     }
// }


// let arr =[6,7,4,3,1,2]

// console.log(quicksort(arr));




function quicksort(arr){
    if(arr.length<2){
        return arr
    }
    else{
        let left =[]
        let right = []
        let pivot = arr[arr.length-1]

        for(let i = 0 ; i<arr.length-1 ; i++){
            if(arr[i]<pivot){
                left.push(arr[i])
            }
            else{
                right.push(arr[i])
            }
        }
        return[...quicksort(left),pivot,...quicksort(right)]
    }
}


let arr = [2,5,6,7,4,1,5,98,3,6,99,88]
console.log( quicksort(arr));